import React from 'react';
import styled from 'styled-components';

//하나의 컴포넌트를 생성(재사용)

//style-components => js파일과 css 파일 관리 !!
const FooterList = styled.div`
  border: 1px solid black;
  height: 300px;
`;

const Footer = () => {
  return (
    <FooterList>
      <ul>
        <li>오시는길: 서울 강남구</li>
        <li>전화번호:020222</li>
      </ul>
    </FooterList>
  );
};

export default Footer;
