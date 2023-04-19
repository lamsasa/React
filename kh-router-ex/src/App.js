import './App.css';
import About from './pages/About';
import Profile from './pages/Profiles';
import Login from './pages/Login';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

//<Route path="주소 규칙" element={보여줄 컴포넌트 jsx} />

// 실습문제 : 스토리보드에서 만든 화면으로 이동해보기
// - 시작 페이지 지정
// - 이동해야 할 각 페이지 pages 폴더 내에 컴포넌트로 작성
// - 메인 페이지에서 link to를 이용해 이동

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Profiles/:username" element={<Profile />} />
    </Routes>
  </Router>
  );
}

export default App;
