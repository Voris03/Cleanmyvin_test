import { Row, Col } from "antd";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

import i18n from "i18next";
import { Menu } from "../Header/styles";
import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  Chat,
  Empty,
  FooterContainer,
  Language,
  Label,
  LanguageSwitch,
  LanguageSwitchContainer,
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = () => {
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="30px" height="30px" />
      </a>
    );
  };

  return (
    <>
      {/* <FooterSection>
        <Container>
          <Row justify="space-between">
            
            <Col lg={10} md={10} sm={12} xs={12}>
              <Title>{t("Компания")}</Title>
              <Large to="/">{t("О нас")}</Large>
              <Large to="/">{t("Этапы работы")}</Large>
              <Large to="/">{t("Частые вопросы")}</Large>
              <Language>{"Contact"}</Language>
              <Large to="/">{"Tell us everything"}</Large>
              <Para>{`Do you have any question? Feel free to reach out.`}</Para>
              <a href="mailto:l.qqbadze@gmail.com">
                <Chat>{`Let's Chat`}</Chat>
              </a>
            </Col>

            <Col lg={8} md={8} sm={12} xs={12}>
              <Title>{t("Политика конфиденциальности")}</Title>
              <Large to="/">{t("Оплата и возврат")}</Large>
              <Large to="/">{t("Публичная оферта")}</Large>
            </Col>
            
          </Row>
        </Container>
      </FooterSection> */}
      <Extra>
        <Container border={true}>
          <Row
            justify="space-between"
            align="middle"
            style={{ paddingTop: "3rem" }}
          >
            <Menu>Cleanmyvin</Menu>
            <Col lg={8} md={8} sm={8} xs={12}>
              <FooterContainer>
                <SocialLink
                  href="https://telegram.im/@cleanmyvin"
                  src="telegram.svg"
                />
                <SocialLink
                  href="https://www.instagram.com/cleanvinmycom/"
                  src="instagram.svg"
                />
                <SocialLink
                  href="https://tiktok.com/@cleanmyvincom"
                  src="tiktok.svg"
                />
                <SocialLink
                  href="https://twitter.com/cleanmyvicom"
                  src="twitter.svg"
                />
              </FooterContainer>
            </Col>
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default Footer;
