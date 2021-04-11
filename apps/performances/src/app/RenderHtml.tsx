import React, { FC } from 'react';
import { StatementData } from './types';
import { usd } from './utils';

type Props = {
  data: StatementData;
};

export const RenderHtml: FC<Props> = ({ data }) => {
  return (
    <div>
      <h1>Statement for {data.customer}</h1>
      <table>
        <tr>
          <th>play</th>
          <th>seats</th>
          <th>cost</th>
        </tr>
        {data.performances.map((p) => (
          <tr key={p.playID}>
            <td>{p.play.name}</td>
            <td>{p.audience}</td>
            <td>{p.amount}</td>
          </tr>
        ))}
      </table>
      <p>
        Amount owed is <em>{usd(data.totalAmount)}</em>
      </p>
      <p>
        You earned <em>{data.totalVolumeCredits}</em> credits
      </p>
    </div>
  );
};
