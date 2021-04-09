import React from 'react';
import { HtmlStatement, statement } from './statement';
import { INVOICES, PLAYS } from './data';

export function App() {
  return (
    <div>
      <pre>
        {statement(INVOICES[0], PLAYS)}
        <HtmlStatement invoice={INVOICES[0]} plays={PLAYS} />
      </pre>
    </div>
  );
}

export default App;
