import React from 'react';
import styled from 'styled-components';

//하나의 컴포넌트를 생성(재사용)

//style-components => js파일과 css 파일 관리 !!
const HeaderList = styled.div`
  border: 1px solid black;
  height: 300px;
`;

const Header = () => {
  return (
    <HeaderList>
      <ul>
        <li>메뉴1</li>
        <li>메뉴2</li>
        <li>전화번호:020222</li>
      </ul>
    </HeaderList>
  );
};

export default Header;
