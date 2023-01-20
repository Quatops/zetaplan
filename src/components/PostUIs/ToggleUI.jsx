import React from 'react';
export default function ToggleUI({ children }) {
  return (
    <div className="card_ui">
      <header className="toggle_header">
        <div className="toggle_prefix">
          <img src={require(`assets/toggle.png`)} />
        </div>
        <div className="toggle_title">title</div>
      </header>
      <p className="toggle_content flex_center">{children}</p>
    </div>
  );
}
