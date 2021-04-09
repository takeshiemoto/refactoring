export type Play = { name: string; type: string };
export type Plays = {
  othello: Play;
  'as-like': Play;
  hamlet: Play;
};
export type Performance = {
  playID: string;
  audience: number;
  play?: Play;
  amount?: number;
  volumeCredits?: number;
};
export type Performances = Performance[];
export type Invoice = {
  performances: Performances;
  customer: string;
};
export type Invoices = Invoice[];

export type StatementData = {
  customer: string;
  performances: Performances;
  totalAmount?: number;
  totalVolumeCredits?: number;
};
