import { Badge, Descriptions } from "antd";
import React from "react";

type Lot = {
  id: string;
  sourceId: string;
  lotId: string;
  vin: string;
  title: string;
  make: string | null;
  model: string | null;
  series: string | null;
  year: string | null;
  fuel: string | null;
  cylinders: string | null;
  transmission: string | null;
  color: string | null;
  engine: string | null;
  odometer: string | null;
  odobrand: string | null;
  drive: string | null;
  seller: string | null;
  keys: boolean | null;
  loss: string | null;
  status: string | null;
  priceNew: string | null;
  priceOld: string | null;
  priceFuture: string | null;
  costPrice: string | null;
  costRepair: string | null;
  auctionStatus: string | null;
  auctionType: string | null;
  auctionDate: Date | null;
  bidOpen: boolean | null;
  bid: string | null;
  damagePr: string | null;
  damageSec: string | null;
  vehicleType: string | null;
  state: string | null;
  location: string | null;
  document: string | null;
  createdAt: Date;
  updatedAt: Date;
};

const DescriptionComponent = ({ data }: { data: Lot }) => (
  <Descriptions title="Описание" layout="vertical" bordered>
    <Descriptions.Item label="Номер лота">{data.lotId}</Descriptions.Item>

    <Descriptions.Item label="Статус">{data.status}</Descriptions.Item>
    <Descriptions.Item label="Двигатель">{data.engine}</Descriptions.Item>
    <Descriptions.Item label="Пробег">{data.odometer}</Descriptions.Item>
    <Descriptions.Item label="Документы">{data.document}</Descriptions.Item>
    <Descriptions.Item label="Место продажи">{data.location}</Descriptions.Item>
    <Descriptions.Item label="Первичный урон">
      {data.damagePr}
    </Descriptions.Item>
    <Descriptions.Item label="Коробка передач">
      {data.transmission}
    </Descriptions.Item>
    <Descriptions.Item label="Цвет кузова">{data.color}</Descriptions.Item>
    <Descriptions.Item label="Привод">{data.drive}</Descriptions.Item>
    <Descriptions.Item label="Топливо">{data.fuel}</Descriptions.Item>
    <Descriptions.Item label="Ключи">
      {data.keys ? "Есть" : "Нет"}
    </Descriptions.Item>
  </Descriptions>
);

export default DescriptionComponent;
