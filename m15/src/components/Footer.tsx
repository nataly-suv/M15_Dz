import { FC } from "react";
import styled from "styled-components";

const FooterConteiner = styled.footer`
  margin-top: 50px;
  background: black;
  padding: 50px 10px;
  font-size: 40px;
  text-align: center;
  color: white;

  @media (max-width: 590px) {
    font-size: 24px;
  }
`;

const Footer: FC = () => {
  return <FooterConteiner>FOOTER</FooterConteiner>;
};

export default Footer;
