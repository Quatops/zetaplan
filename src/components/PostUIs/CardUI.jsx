import React from 'react';

export default function CardUI({ children, col, row, space }) {
  return (
    <div
      className="photocard_ui"
      style={{
        display: 'grid',
        gridTemplateRows: `repeat(${row}, 1fr)`,
        gridTemplateColumns: `repeat(${col}, 1fr)`,
        gridColumnGap: `${space}px`,
        gridRowGap: `${space}px`,
      }}>
      {new Array(Number(row * col)).fill('').map((_, index) => (
        <div
          className="photocard"
          key={index}
          style={{
            width: `calc((961px - (${space}px * ${col - 1})) / ${col})`,
          }}>
          <article className="photocard_img flex_center">
            <img
              src="https://res.cloudinary.com/dprbw1pa0/image/upload/v1674303942/orxuzuq9jiojbsrnvrg7.png"
              alt="image"
            />
          </article>
          <article className="photocard_textwrap">
            <div className="photocard_text">{children}</div>
          </article>
        </div>
      ))}
    </div>
  );
}
