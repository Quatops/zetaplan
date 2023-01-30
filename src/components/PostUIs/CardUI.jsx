import React from 'react';
export default function CardUI({ children, count }) {
  return (
    <div className="photocard">
      <article className="photocard_img flex_center">
        <img
          src="https://res.cloudinary.com/dprbw1pa0/image/upload/v1674303942/orxuzuq9jiojbsrnvrg7.png"
          alt="image"
        />
      </article>
      {/* <textarea placeholder={children} className="postcard_text" /> */}
      <div className="photocard_text">안녕?</div>
    </div>
  );
}
