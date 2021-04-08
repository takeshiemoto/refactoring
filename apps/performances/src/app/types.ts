export type Play = { name: string; type: string };
export type Plays = {
  othello: Play;
  'as-like': Play;
  hamlet: Play;
};
export type Performance = { playID: string; audience: number };
export type Invoice = {
  performances: Performance[];
  customer: string;
};
export type Invoices = Invoice[];
