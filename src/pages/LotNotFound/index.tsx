import { lazy, useEffect, useState } from "react";
import img from "./iamge.png";

const Container = lazy(() => import("../../common/Container"));

const Home = () => {
  return (
    <Container>
      <div
        style={{
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img src={img} alt="NotFound" />
      </div>
    </Container>
  );
};

export default Home;
