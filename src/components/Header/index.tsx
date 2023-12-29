import { useEffect, useState } from "react";
import { Row, Col, Drawer } from "antd";
import { withTranslation } from "react-i18next";
import Container from "../../common/Container";
import { SvgIcon } from "../../common/SvgIcon";
import { Button } from "../../common/Button";
import { Link, useHistory, useLocation } from "react-router-dom";
import {
  HeaderSection,
  LogoContainer,
  Burger,
  NotHidden,
  Menu,
  CustomNavLinkSmall,
  Label,
  Outline,
  Span,
} from "./styles";

const Header = ({ t }: any) => {
  const [visible, setVisibility] = useState(false);

  const showDrawer = () => {
    setVisibility(!visible);
  };

  const onClose = () => {
    setVisibility(!visible);
  };

  const MenuItem = () => {
    const location = useLocation();
    const history = useHistory();
    useEffect(() => {
        if (location.hash.length > 1) {
          const scrollId = location.hash.substring(location.hash.lastIndexOf('/') + 1);
          scrollTo(scrollId);
        }
    }, [location]);
    const scrollTo = (id: string) => {
     if (location.pathname == '/') {
        const element = document.getElementById(id) as HTMLDivElement;
        element.scrollIntoView({ behavior: "smooth", });
        setVisibility(false);
      } else {
        history.push('/#/' + id);
      }
    };
    return (
      <>
        <CustomNavLinkSmall onClick={() => scrollTo("about")}>
          <Span>{t("About")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => scrollTo("mission")}>
          <Span>{t("Mission")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => scrollTo("contact")}>
          <Span>{t("Contact")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall style={{ width: "130px" }} >
          <Link to="/register">
            <Span>
          <Button>{t("Register")}</Button>
          </Span>
          </Link>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall style={{ width: "130px" }} >
          <Link to="/login">
            <Span>
          <Button>{t("Login")}</Button>
          </Span>
          </Link>
        </CustomNavLinkSmall>
      </>
    );
  };

  return (
    <HeaderSection>
      <Container>
        <Row justify="space-between">
          <LogoContainer to="/" aria-label="homepage">
            <SvgIcon src="logo.svg" width="101px" height="64px" />
            <div style={{ marginTop: '18px' }}>
              <h6> Health Tracker </h6>
            </div>
          </LogoContainer>
          <NotHidden>
            <MenuItem />
          </NotHidden>
          <Burger onClick={showDrawer}>
            <Outline />
          </Burger>
        </Row>
        <Drawer closable={false} visible={visible} onClose={onClose}>
          <Col style={{ marginBottom: "2.5rem" }}>
            <Label onClick={onClose}>
              <Col span={12}>
                <Menu>Menu</Menu>
              </Col>
              <Col span={12}>
                <Outline />
              </Col>
            </Label>
          </Col>
          <MenuItem />
        </Drawer>
      </Container>
    </HeaderSection>
  );
};

export default withTranslation()(Header);
