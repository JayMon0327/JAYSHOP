import './App.css';

function App() {
  let number = 1;

  const add = () => {
    number++;
    console.log('add', number);
  };

  // 랜더링 시점 = 상태값 변경
  return (
    <div>
      <h1>숫자:{number}</h1>
      <button onClick={add}>더하기</button>
    </div>
  );
}

export default App;
