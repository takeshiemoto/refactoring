import { Invoice, Performance, Play, Plays } from './types';

export const statement = (invoice: Invoice, plays: Plays) => {
  const amountFor = (pref: Performance, play: Play) => {
    let result = 0;

    switch (play.type) {
      case 'tragedy':
        result = 40000;
        if (pref.audience > 30) {
          result += 1000 * (pref.audience - 30);
        }
        break;
      case 'comedy':
        result = 30000;
        if (pref.audience > 20) {
          result += 10000 + 500 * (pref.audience - 20);
        }
        result += 300 * pref.audience;
        break;
      default:
        throw new Error(`unknown type: ${play.type}`);
    }
    return result;
  };

  const playFor = (performance: Performance): Play => {
    return plays[performance.playID];
  };

  const volumeCreditsFor = (pref: Performance): number => {
    let result = 0;
    result += Math.max(pref.audience - 30, 0);
    if ('comedy' === playFor(pref).type) {
      result += Math.floor(pref.audience / 5);
    }
    return result;
  };

  const usd = (n: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    }).format(n / 100);
  };

  const totalVolumeCredits = () => {
    let result = 0;
    for (const pref of invoice.performances) {
      result = volumeCreditsFor(pref);
    }
    return result;
  };

  const totalAmount = () => {
    let result = 0;
    for (const pref of invoice.performances) {
      result += amountFor(pref, playFor(pref));
    }
    return result;
  };

  let result = `Statement for ${invoice.customer}\n`;
  for (const pref of invoice.performances) {
    result += ` ${playFor(pref).name}: ${usd(
      amountFor(pref, playFor(pref))
    )} (${pref.audience} seats) \n`;
  }
  result += `Amount owed is ${usd(totalAmount())}\n`;
  result += `You earned ${totalVolumeCredits()} credits\n`;
  return result;
};
