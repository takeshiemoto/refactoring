import { Invoice, Performance, Play, Plays, StatementData } from './types';

export const createStatementData = (invoice: Invoice, plays: Plays) => {
  const statementData: StatementData = { customer: '', performances: [] };
  statementData.performances = invoice.performances.map(enrichPerformance);
  statementData.customer = invoice.customer;
  statementData.totalAmount = totalAmount(statementData);
  statementData.totalVolumeCredits = totalVolumeCredits(statementData);
  return statementData;

  function enrichPerformance(pref: Performance) {
    const result = Object.assign({}, pref);
    result.play = playFor(result);
    result.amount = amountFor(result);
    result.volumeCredits = volumeCreditsFor(result);
    return result;
  }

  function playFor(performance: Performance): Play {
    return plays[performance.playID];
  }

  function amountFor(pref: Performance) {
    let result = 0;

    switch (pref.play.type) {
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
        throw new Error(`unknown type: ${pref.play.type}`);
    }
    return result;
  }

  function volumeCreditsFor(pref: Performance): number {
    let result = 0;
    result += Math.max(pref.audience - 30, 0);
    if ('comedy' === pref.play.type) {
      result += Math.floor(pref.audience / 5);
    }
    return result;
  }

  function totalVolumeCredits(data: StatementData) {
    return data.performances.reduce(
      (total, p) => (total += p.volumeCredits),
      0
    );
  }

  function totalAmount(data: StatementData) {
    return data.performances.reduce((total, p) => (total += p.amount), 0);
  }
};
