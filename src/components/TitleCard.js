import React from "react";

export default function TitleCard({ imgTitle }) {
  console.log(imgTitle);
  return (
    <h1 style={{ 
          color: "white" 
        }}>
      {imgTitle.slice(8)}
    </h1>
  );
}