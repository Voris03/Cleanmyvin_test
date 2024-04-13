import { lazy, useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Row, Col, Descriptions, Spin } from "antd";

import Carousel from "./Carousel";
import Description from "./Description";

import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";
import styled from "styled-components";

const Feedback = lazy(() => import("../../components/Form"));
const Container = lazy(() => import("../../common/Container"));

const D = styled(Descriptions)`
  text-align: center;

  .ant-descriptions-title {
    font-size: 24px;
  }
`;

const Home = () => {
  const history = useHistory();
  const params = useParams<{ vin?: string }>();
  const vin = params["vin"];

  const [isLaoded, setIsLoaded] = useState(false);
  const [data, setData] = useState<any>();

  useEffect(() => {
    fetch(`/api/lot/${vin}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (!data?.success || data?.statusCode !== 200) {
          throw new Error("LOT_NOT_FOUND");
        }

        console.log(data);
        setData(data.responseObject);
        setIsLoaded(true);
      })
      .catch(() => {
        history.push("/lot/notfound");
      });
  }, [vin]);

  if (!isLaoded) {
    return (
      <div
        style={{
          height: "80vh",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Spin size="large" />
      </div>
    );
  }

  return (
    <div style={{ marginTop: 33, marginBottom: 33 }}>
      <Container>
        {data ? (
          <>
            <Row gutter={16}>
              <Col xs={24} md={12}>
                <D title={data.title}>
                  <Descriptions.Item
                    label="VIN"
                    span={3}
                    labelStyle={{ fontWeight: "bold" }}
                  >
                    {data.vin}
                  </Descriptions.Item>
                  <Descriptions.Item
                    label="Марка"
                    span={3}
                    labelStyle={{ fontWeight: "bold" }}
                  >
                    {data.make}
                  </Descriptions.Item>
                  <Descriptions.Item
                    label="Модель"
                    span={3}
                    labelStyle={{ fontWeight: "bold" }}
                  >
                    {data.model}
                  </Descriptions.Item>
                  <Descriptions.Item
                    label="Серия"
                    span={3}
                    labelStyle={{ fontWeight: "bold" }}
                  >
                    {data.series}
                  </Descriptions.Item>
                  <Descriptions.Item
                    label="Год выпуска"
                    labelStyle={{ fontWeight: "bold" }}
                  >
                    {data.year}
                  </Descriptions.Item>
                </D>
              </Col>

              <Col xs={24} md={12}>
                <Carousel urls={data?.files?.map((file: any) => file.origin)} />
              </Col>
            </Row>

            <div style={{ marginTop: "33px" }}>
              <Description data={data} />
            </div>
          </>
        ) : null}

        <div style={{ marginTop: 66, color: "black" }}>
          <p style={{ color: "black" }}>
            Cleanmyvin.com специализируется на сборе информации об автомобилях с
            аукционов Copart и IAAI. Мы предоставляем подробную информацию обо
            всех автомобилях, представленных на аукционах.
          </p>

          <p style={{ color: "black" }}>
            Одним из наиболее важных данных при покупке подержанного автомобиля
            является поиск по VIN. VIN, или идентификационный номер автомобиля,
            – это уникальный 17-значный код, который присваивается каждому
            выпускаемому автомобилю. Этот номер содержит важную информацию об
            автомобиле, такую как производитель, модель, год выпуска и факты
            производства.
          </p>

          <p style={{ color: "black" }}>
            Поиск VIN-номера перед покупкой подержанного автомобиля может дать
            практическую информацию о его прошлом. Например, можно узнать,
            попадал ли автомобиль в аварию, имеет ли он коэффициент аварийности,
            отзывался ли заводом. Этот факт может помочь принять более
            взвешенное решение о том, стоит ли приобретать автомобиль и по какой
            цене.
          </p>

          <p style={{ color: "black" }}>
            На сайте cleanmyvin.com мы упрощаем поиск истории автомобиля по
            VIN-номеру. Наша платформа предоставляет точную информацию о прошлом
            автомобиля. Вы можете получить доступ к этой информации бесплатно,
            просто введя VIN-код автомобиля.
          </p>
        </div>

        <div style={{ marginTop: 66 }}>
          <Feedback
            fText="Оставьте заявку на очистку истории этого авто"
            sText={
              <>
                Наш менеджер свяжется с Вами в течение 30 минут и<br />
                ответит на все интересующие вопросы.
              </>
            }
          />
        </div>
      </Container>
    </div>
  );
};

export default Home;
