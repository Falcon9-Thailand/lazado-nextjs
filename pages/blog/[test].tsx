import React, { ReactElement } from "react";

interface Props {}

export default function test({ href }): ReactElement {
  console.log(href);
  return <div>sss</div>;
}
