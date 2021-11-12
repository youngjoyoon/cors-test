import { NavLink, Routes, Route, Navigate } from 'react-router-dom';
import DesktopWeb from 'pages/desktopweb/DesktopWeb';
import MobileWeb from './pages/mobileweb/MobileWeb';
import MobileApp from './pages/mobileapp/MobileApp';
import Admin from './pages/admin/Admin';
import CORS from './pages/cors/CORS';

import styles from './App.module.scss';

function App() {
  return (
    <div>
      <header className={styles.gnb}>
        <ul>
          <li>
            <NavLink to="/mobile-web">모바일 웹</NavLink>
          </li>
          <li>
            <NavLink to="/desktop-web">데스크탑 웹</NavLink>
          </li>
          <li>
            <NavLink to="/mobile-app">앱</NavLink>
          </li>
          <li>
            <NavLink to="/admin">어드민</NavLink>
          </li>
          <li>
            <NavLink to="/cors">CORS 테스트</NavLink>
          </li>
        </ul>
      </header>
      <div className={styles.contents}>
        <Routes>
          <Route path="/" element={<Navigate to="/mobile-web" />} />
          <Route path="/desktop-web" element={<DesktopWeb />} />
          <Route path="/mobile-web" element={<MobileWeb />} />
          <Route path="/mobile-app" element={<MobileApp />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/cors" element={<CORS />} />
        </Routes>
      </div>
    </div>
  )
}

export default App;
