import React from 'react';
export default function ToggleUI({ children }) {
  return (
    <div className="card_ui">
      <input type="checkbox" className="toggle_checkbox" id="toggle" />
      <div className="toggle_label">
        <label className="toggle_prefix" htmlFor="toggle">
          <img src={require(`assets/toggle.png`)} />
        </label>
        <p className="toggle_title">title</p>
      </div>
      <p className="toggle_content flex_center">{children}</p>
    </div>
  );
}
