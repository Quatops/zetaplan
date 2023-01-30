import React from 'react';

// count 대로 grid 크기를 조절하고싶었는데, 리액트로 렌더링하는 중에
//  map이 적용되지 않는 것 같아서 일단 정적으로 갯수를 정해놔야겠다.
export default function CardUI({ children, col, row, count }) {
  console.log(count);
  return (
    <div
      className="photocard_ui"
      style={{
        display: 'grid',
        gridTemplateRows: `repeat(${row}, 1fr)`,
        gridTemplateColumns: `repeat(${col}, 1fr)`,
        gridColumnGap: '20px',
        gridRowGap: '20px',
        margin: '20px 0',
      }}>
      {new Array(Number(row * col)).fill('').map((_, index) => (
        <div
          className="photocard"
          key={index}
          style={{ width: `calc((961px - (20px * ${count - 1})) / ${count})` }}>
          <article className="photocard_img flex_center">
            <img
              src="https://res.cloudinary.com/dprbw1pa0/image/upload/v1674303942/orxuzuq9jiojbsrnvrg7.png"
              alt="image"
            />
          </article>
          <div className="photocard_text">{children}</div>
        </div>
      ))}
    </div>
  );
}
