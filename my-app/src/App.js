import './App.css';

//0.React 엔진 - 데이터변경감지해서 UI그려주는 !!
//1.실행 과정(index.html) - SPA(Single Page Application)
//2.JSX 문법
//3.바벨(자바스크립트 ES5) -> ES6

// (1) return시에 하나의 Dom만 리턴할 수 있다.
// (2) 변수선언은 let 혹은 const로만 해야함.
// (3) if 사용 불가능X -> 삼항연산자(조건 ? 값(true):값(false))
// (4) 조건부 렌더링(조건 && 값(true))
// (5) css 디자인
//    - 내부에 적는 방법
//    - 외부에 적는 방법
//    - 라이브러리 사용방법

function App() {
  let list = [1, 2, 3];

  return (
    <div>
      <div>
        {list.map((n) => (
          <h1>{n}</h1>
        ))}
      </div>
    </div>
  );
}

export default App;
