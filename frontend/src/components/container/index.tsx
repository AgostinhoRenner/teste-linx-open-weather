import './container.css'
import React from "react";
export function Container({ children }: React.PropsWithChildren) {
  return (
    <>
      <div id="container">{children}</div>
    </>
  );
}

export function Column({ children }: React.PropsWithChildren) {
  return <div id="column">{children}</div>;
}

export function Row({ children }: React.PropsWithChildren) {
  return <div id="row">{children}</div>;
}
