import React from "react";

export default function PicCard({ imgUrl }) {
  return (
    <div>
      <img src={imgUrl} style={{ maxWidth: "800px"}}/>
    </div>
  );
}