import React from 'react';
import { v4 as uuid } from 'uuid';
export default function ToggleUI({ children }) {
  const id = uuid();
  return (
    <div className="toggle_ui">
      <input type="checkbox" className="toggle_checkbox" id={id} />
      <div className="toggle_label">
        <label className="toggle_prefix" htmlFor={id}>
          <img
            src="https://res.cloudinary.com/detylqu5a/image/upload/v1675142613/write-form/tq10rld1mplsi0v3yf1h_tumanh.png"
            alt="prefix_image"
          />
        </label>
        <p className="toggle_title">title</p>
      </div>
      <div className="toggle_content">
        <p>{children}</p>
      </div>
    </div>
  );
}
