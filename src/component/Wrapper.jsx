import React from "react";

export default function Wrapper({ children }) {
  return (
    <div className="container mx-auto py-4 px-4 min-h-screen ">{children}</div>
  );
}
