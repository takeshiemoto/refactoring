import React, { FC } from 'react';
import { Invoice, Plays, StatementData } from './types';
import { createStatementData } from './createStatementData';
import { usd } from './utils';
import { RenderHtml } from './RenderHtml';

export const statement = (invoice: Invoice, plays: Plays) => {
  return renderPlainText(createStatementData(invoice, plays));
};

export const renderPlainText = (data: StatementData) => {
  let result = `Statement for ${data.customer}\n`;
  for (const pref of data.performances) {
    result += ` ${pref.play.name}: ${usd(pref.amount)} (${
      pref.audience
    } seats) \n`;
  }
  result += `Amount owed is ${usd(data.totalAmount)}\n`;
  result += `You earned ${data.totalVolumeCredits} credits\n`;
  return result;
};

type Props = { invoice: Invoice; plays: Plays };
export const HtmlStatement: FC<Props> = ({ invoice, plays }) => {
  return <RenderHtml data={createStatementData(invoice, plays)} />;
};
