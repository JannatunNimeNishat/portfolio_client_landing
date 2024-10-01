"use client";

import { ArrowUpOutlined } from "@ant-design/icons";
import ScrollToTop from "react-scroll-to-top";

const ScrollToTopComponent = () => {
  return (
    <>
      <ScrollToTop
        smooth
        style={{
          backgroundColor: "white",
          borderRadius: "50%",
          width: "40px",
          height: "40px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: "20px",
          boxShadow: "0px 2px 5px rgba(63, 195, 128, 1)",
        }}
        component={<ArrowUpOutlined style={{ color: "#22c55e", fontSize: "25px" }}/>}
      />
    </>
  );
};

export default ScrollToTopComponent;
