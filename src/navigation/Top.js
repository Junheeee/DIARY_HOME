/* eslint-disable */
import { Divider, Header } from "semantic-ui-react";
import Gnb from "./Gnb";

const Top = () => {
  return (
    <div>
      <div style={{ display: "flex", paddingTop: 20, color: "inherit" }}>
        <span>abcdef~ u~~~ </span>
        {/* <div style={{ flex: "100px 0 0" }}>
          <img
          src="/images/cat.png"
          alt="logo"
            style={{ display: "block", width: 80 }}
            />
            </div>
        <Header as="h1">준희</Header> */}
      </div>
      <Divider />
      <Gnb />
    </div>
  );
};

export default Top;
