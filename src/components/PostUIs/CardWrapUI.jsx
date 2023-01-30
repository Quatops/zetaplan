import React from 'react';
import ReactDOMServer from 'react-dom/server';

export default function CardWrapUI({ children }) {
  return ReactDOMServer.renderToStaticMarkup(
    <div
      className="photocard_ui"
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${3}, 1fr)`,
        gridColumnGap: '20px',
        gridRowGap: '20px',
      }}>
      {children}
    </div>,
  );
}
