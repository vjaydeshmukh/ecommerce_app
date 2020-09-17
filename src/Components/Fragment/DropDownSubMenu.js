import React from "react";
import { Link } from "react-router-dom";
const DropDownSubMenu = () => {
  return (
    <div id="leftMenu">
      <details style={{ fontSize: "12px" }}>
        <summary className="summary">Injection</summary>
        <Link to="/">Injection IV</Link>
        <Link to="/oral">Oral Product</Link>
      </details>
      <details style={{ fontSize: "12px" }}>
        <summary className="summary">Vitamin Supplement & Sleep Aids</summary>
        <Link to="/menSupplement">Men Supplement </Link>
        <Link to="/womenSupplement">Women Supplement</Link>
        <Link to="/kidandteen">Kid & Teen Supplement </Link>
        <Link to="/sleepaids">Sleep Aids</Link>
      </details>
      <details style={{ fontSize: "12px" }}>
        <summary className="summary">Pain & Headache</summary>
        <Link to="/headacheanddizziness">Headache & Dizziness </Link>
        <Link to="/generalpain">General Pain</Link>
        <Link to="/injuryandbonepain">Injury & Bone Pain </Link>
        <Link to="/softtissueandnervepain">Soft Tissue & Nerve Pain</Link>
        <Link to="/inflammation">Inflammation</Link>
      </details>
      <details style={{ fontSize: "12px" }}>
        <summary className="summary">Common Cold & Fever</summary>
        <Link to="/fever">Fever</Link>
        <Link to="/cough">Cough</Link>
        <Link to="/sneezing">Sneezing</Link>
        <Link to="/sinuscongestion">Sinus Congestion</Link>
      </details>
    </div>
  );
};

export default DropDownSubMenu;
