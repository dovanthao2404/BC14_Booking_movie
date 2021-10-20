import React, { useState } from "react";

export default function ScrollHorizontal({ Component, props }) {
  const [mousePosition, setMousePosition] = useState(0);
  return () => (
    <>
      <Component
        onMouseDown={(e) => {
          setMousePosition(e.pageX);
        }}
        onClick={(e) => {
          const { pageX } = e;
          if (Math.abs(pageX - mousePosition) > 10) {
            e.preventDefault();
          }
        }}
      />
    </>
  );
}
