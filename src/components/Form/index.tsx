import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
  Checkbox,
  Upload,
  Row,
  Col,
} from "antd";
import styled from "styled-components";

const { TextArea } = Input;

const StyledForm = styled(Form)`
  .ant-form-item {
    margin-bottom: 3px;
  }
`;

const FormDisabledDemo = ({
  defaultVin,
  fText,
  sText,
}: {
  defaultVin?: string;
  fText: any;
  sText: any;
}) => {
  // const [componentDisabled, setComponentDisabled] = useState<boolean>(true);
  // const onFormLayoutChange = ({ disabled }: { disabled: boolean }) => {
  //   setComponentDisabled(disabled);
  // };

  return (
    <>
      <div
        style={{
          border: "1px solid black",
          padding: "20px",
          borderRadius: "3px",
          borderWidth: "2px",
        }}
      >
        <Row gutter={30}>
          <Col span={12}>
            <StyledForm
              labelCol={{ span: 12 }}
              wrapperCol={{ span: 12 }}
              layout="horizontal"
              // onValuesChange={onFormLayoutChange}
              // disabled={componentDisabled}
            >
              <Form.Item label="Ваше Имя" labelAlign="left">
                <Input />
              </Form.Item>

              <Form.Item label="Мобильный телефон" labelAlign="left" required>
                <Input />
              </Form.Item>

              <Form.Item label="Email" labelAlign="left">
                <Input />
              </Form.Item>

              <Form.Item label="Мессенджер" labelAlign="left">
                <Select>
                  <Select.Option value="telegram">Telegram</Select.Option>
                  <Select.Option value="viber">Viber</Select.Option>
                  <Select.Option value="whatsapp">WhatsApp</Select.Option>
                </Select>
              </Form.Item>

              <Form.Item label="VIN-код автомобиля" labelAlign="left" required>
                <Input defaultValue={defaultVin} />
              </Form.Item>

              <Form.Item
                wrapperCol={{ offset: 12, span: 12 }}
                style={{ marginTop: 10 }}
              >
                <Button
                  htmlType="submit"
                  style={{ width: "100%" }}
                  type="primary"
                >
                  Оставить заявку
                </Button>
              </Form.Item>
            </StyledForm>
          </Col>

          <Col span={12}>
            <div>
              <span
                style={{
                  fontSize: "33px",
                  lineHeight: "1.2",
                }}
              >
                {fText}
              </span>
            </div>
            <div
              style={{
                marginTop: "12px",
              }}
            >
              <span
                style={{
                  fontSize: "15px",
                  lineHeight: "1.2",
                }}
              >
                {sText}
              </span>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default FormDisabledDemo;
