import { Invoices, Plays } from './types';

export const PLAYS: Plays = {
  hamlet: { name: 'Hamlet', type: 'tragedy' },
  'as-like': { name: 'As You Like it', type: 'comedy' },
  othello: { name: 'Othello', type: 'tragedy' },
};
export const INVOICES: Invoices = [
  {
    customer: 'BigCo',
    performances: [
      { playID: 'hamlet', audience: 55 },
      { playID: 'as-like', audience: 35 },
    ],
  },
];
