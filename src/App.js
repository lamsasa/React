
import './App.css';
//import { Fragment } from 'react';
//import Section from './컴포넌트 합성';
//import Say from './Say';
import Clock from './Clock';

// 컴포넌트는 항상 대문자로 시작, 반환값으로 UI요소를 반환한다.
// 'function App() {' = 'const App = () => {'
const App = () => {

  //let insideTag = "운동"

  return (
    <> 
   {/*<Section title = "오늘의 날씨" content = "오늘은 어쩌고" />
   <Section title = "오늘의 스포츠" content = "오늘은 어쩌고 저쩌고" />
   <MyComponent name ="lam"></MyComponent>*/}
   <Clock />
    </>
  );
}

export default App;
