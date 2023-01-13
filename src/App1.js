import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';

function App() {
  
  const name = "홍길동"; //변수
  const age = 20;
  const myStyle={color: 'red', backgroundColor: 'yellow', fontSize: 15};

  return (
    <Fragment>
      <ul>
        <li>1. 주석 alt + shift + a</li>
        <li>2. return구문은 반드시 한개여야 한다 반드시 하나의 태그를 리턴해야 한다</li>
        <li>3. div를 사용하고 싶지 않으면 Fragment컴포넌트를 사용한다</li>
        <li>4. 함수 안에서 변수를 만들고 사용하고 싶으면 {name}를 사용한다</li>
        <li>5. if문 대신에 3항연산자를 사용한다</li>
        <li>6. 화면에 그리고 싶은 내용이 없다면 null을 반환한다</li>
        <li>7. undefined을 반환하는 상황을 만들면 안된다 (렌더링은 가능)</li>
        <li>8. DOM에 직접 스타일을 하고 싶은 경우는 객체로 묶고 속성은 카멜표기법을 사용한다(단위생략시 px적용)</li>
        <li>9. class속성 대신에 className을 사용한다</li>
        <li>10. 홀로 사용하는 태그는 반드시 닫는 태그를 작성한다 (예: {/*<input /> <br /> */})</li>
      </ul>
      <div className="App" style={myStyle}>
        {name === '홍길동' ? '홍길동입니다' : '홍길동이 아닙니다'} 
        {name === '이순신' ? <h3>이순신입니다</h3> : <h3>이순신이 아닙니다</h3>} {/* jsx문법이라 가능하다 */}
        {age === 30 ? <h3>30입니다</h3> : null}
      </div>

      
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <p>
          안뇽하세요
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    </Fragment>


  );
}

export default App;