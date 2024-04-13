import React from "react";
import { Carousel, Image } from "antd";

const CarouselComponent = ({ urls = [] }: { urls: string[] }) => {
  const Item = ({ url }: { url: string }) => (
    <div>
      <Image width={"100%"} src={url} />
    </div>
  );

  const items = urls.map((url, i) => <Item key={i} url={url} />);

  console.log(items);

  return (
    <>
      <div>
        <Carousel dotPosition={"bottom"} autoplay>
          {items}
        </Carousel>
      </div>
    </>
  );
};

export default CarouselComponent;
