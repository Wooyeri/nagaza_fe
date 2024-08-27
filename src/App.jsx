import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './sign-up';
import Login from './login';
import MainPage from './mainpage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/" element={<MainPage />} /> {/* 기본 경로로 메인 페이지로 이동 */}
      </Routes>
    </Router>
  );
}

export default App;


