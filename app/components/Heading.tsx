import React from "react";

const Heading = ({ text, className }: { text: string; className?: string }) => {
  return <h2 className={`text-3xl md:text-5xl font-bold uppercase ${className || ""}`}>{text}</h2>;
};

export default Heading;
