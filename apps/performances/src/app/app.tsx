import React from 'react';
import { statement } from './statement';
import { INVOICES, PLAYS } from './data';

export function App() {
  return <div>
    <pre>
      {statement(INVOICES[0], PLAYS)}
    </pre>
  </div>;
}

export default App;
