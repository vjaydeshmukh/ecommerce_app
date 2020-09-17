import React from "react";

export default function Title({ name, title }) {
  return (
    <div className="row">
      <div className="col-10 my-2 text-title">
        <h4>
          {name}
          {title}
        </h4>
      </div>
    </div>
  );
}
