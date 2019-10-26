import React from "react";

export function Card(props) {
  const { name, lastName } = props.person;
  return (
    <div>
      <p>
        Hello {name} {lastName}
      </p>
    </div>
  );
}
