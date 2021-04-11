import { Invoice, Performance, Play, Plays, StatementData } from './types';

export const createStatementData = (invoice: Invoice, plays: Plays) => {
  const statementData: StatementData = { customer: '', performances: [] };
  statementData.performances = invoice.performances.map(enrichPerformance);
  statementData.customer = invoice.customer;
  statementData.totalAmount = totalAmount(statementData);
  statementData.totalVolumeCredits = totalVolumeCredits(statementData);
  return statementData;

  function enrichPerformance(pref: Performance) {
    const calculator = createPerformanceCalculator(pref, playFor(pref));
    const result = Object.assign({}, pref);
    result.play = playFor(result);
    result.amount = calculator.amount;
    result.volumeCredits = calculator.volumeCredits;
    return result;
  }

  function playFor(performance: Performance): Play {
    return plays[performance.playID];
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

export const createPerformanceCalculator = (
  performance: Performance,
  play: Play
) => {
  switch (play.type) {
    case 'tragedy':
      return new TragedyCalculator(performance, play);
    case 'comedy':
      return new ComedyCalculator(performance, play);
    default:
      throw new Error(`未知の演劇の種類 ${play.type}`);
  }
};

class PerformanceCalculator {
  constructor(public performance: Performance, public play: Play) {}

  get amount(): number | void {
    throw new Error('サブクラスの責務');
  }

  get volumeCredits(): number {
    return Math.max(this.performance.audience - 30, 0);
  }
}

class TragedyCalculator extends PerformanceCalculator {
  get amount() {
    let result = 40000;
    if (this.performance.audience > 30) {
      result += 1000 * (this.performance.audience - 30);
    }
    return result;
  }
}
class ComedyCalculator extends PerformanceCalculator {
  get amount() {
    let result = 30000;
    if (this.performance.audience > 20) {
      result += 10000 + 500 * (this.performance.audience - 20);
    }
    result += 300 * this.performance.audience;
    return result;
  }

  get volumeCredits() {
    return super.volumeCredits + Math.floor(this.performance.audience / 5);
  }
}
