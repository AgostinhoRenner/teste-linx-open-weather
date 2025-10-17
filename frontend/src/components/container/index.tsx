import React from "react";
export default function Container({ children }: React.PropsWithChildren) {
  return (
    <>
      <div id="container">
        {children}
      </div>
    </>
  );
}
