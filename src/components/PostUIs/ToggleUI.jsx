import React from 'react';
import { v4 as uuid } from 'uuid';
export default function ToggleUI({ children }) {
  const id = uuid();
  return (
    <div className="toggle_ui">
      <input type="checkbox" className="toggle_checkbox" id={id} />
      <div className="toggle_label">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div className="toggle_prefix">
            <label htmlFor={id}>
              <img
                src="https://res.cloudinary.com/detylqu5a/image/upload/v1675142613/write-form/tq10rld1mplsi0v3yf1h_tumanh.png"
                alt="prefix_image"
              />
            </label>
          </div>
          <p className="toggle_title">
            <label htmlFor={id}>title</label>
          </p>
        </div>
        <div className="toggle_plus">
          <label htmlFor={id}>
            <img src="https://res.cloudinary.com/detylqu5a/image/upload/v1675327743/plus-104-32_v469ho.png" />
          </label>
        </div>
      </div>
      <div className="toggle_content">
        <p>{children}</p>
      </div>
    </div>
  );
}
