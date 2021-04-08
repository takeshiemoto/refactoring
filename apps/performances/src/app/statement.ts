import { Invoice, Performance, Play, Plays } from './types';

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

export const statement = (invoice: Invoice, plays: Plays) => {
  let totalAmount = 0;
  let volumeCredits = 0;
  let result = `Statement for ${invoice.customer}\n`;
  const format = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format;

  for (const pref of invoice.performances) {
    const play: Play = plays[pref.playID];
    const thisAmount = amountFor(pref, play);

    volumeCredits += Math.max(pref.audience - 30, 0);

    if ('comedy' === play.type) {
      volumeCredits += Math.floor(pref.audience / 5);
    }

    result += ` ${play.name}: ${format(thisAmount / 100)} (${
      pref.audience
    } seats) \n`;
    totalAmount += thisAmount;
  }

  result += `Amount owed is ${format(totalAmount / 100)}\n`;
  result += `You earned ${volumeCredits} credits\n`;
  return result;
};
