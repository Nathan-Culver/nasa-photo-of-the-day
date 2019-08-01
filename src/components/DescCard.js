import React from "react";

export default function DescCard({ imgDesc }) {
  console.log(imgDesc);
  return (
    <h3 style={{ 
          maxWidth: "800px", 
          margin: "0 auto", 
          marginTop: "20px",
          marginBottom: "20px",
          color: "white"
        }}>
      {imgDesc}
    </h3>
  );
}