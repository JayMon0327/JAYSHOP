import React from 'react';

const Sub = () => {
  // 자식 컴포넌트들은 다시 그려질지 안 그려질지를 설정할 수 있는 함수 제공해줌.
  // 결국 항상 그려지는게 아니라, 조건에 따라 컴포넌트들을 보여줄지 제어할 수 있는게 중요하다.
  return (
    <div>
      <h1>Sub입니다.</h1>
    </div>
  );
};

export default Sub;
