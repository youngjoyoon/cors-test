import { useState } from 'react';
import Cookies from 'js-cookie';

import { searchRecentlyWordAPI, searchHotWordAPI } from './api/search';

import './App.css';

const webToken = '0gUT0RgxqEn3nkaMV515amGcJ/RhtuDnAorgpipeardS/+fsDUCp0vW30A9nSh7s2AizxAFRBbyDHdHXPi5mRSOGmJMOGYBoocqIu4kdqxEOz8Osw8jyqtd2JB8lJiAV2127RKPEfr/oRcHDG+77ooYRqbdsmjmWsRTaglBm7GV/4PL6vzcpn5wO2Y+1U5aodgjqCLj4RiCZ563FaHH8ASMjgslUcbZ6lvj/TQ8mHRM=';

function App() {
  const currentToken = Cookies.get('USER');
  const [isLogin, setLogin] = useState(Boolean(currentToken));
  const [response, setResponse] = useState(null);
  const handleLogin = () => {
    if (isLogin) {
      Cookies.remove('USER');
    } else {
      Cookies.set('USER', webToken);
    }
    
    setLogin((prev) => !prev);
  }
  const handleSearchRecent = async () => {
    let content;

    try {
      const { data } = await searchRecentlyWordAPI();

      content = data;
    } catch (e) {
      content = e;
    }

    setResponse(JSON.stringify(content, null, 4));
  }
  const handleSearchHot = async () => {
    let content;

    try {
      const { data } = await searchHotWordAPI();

      content = data;
    } catch (e) {
      content = e;
    }

    setResponse(JSON.stringify(content, null, 4));
  }

  return (
    <div className="App">
      <div className="section">
        <div>일반 고객 계정, 타투이스트 연동 없음</div>
        <button type="button" onClick={handleLogin}>
          {isLogin ? '로그아웃' : '로그인'}
        </button>
      </div>
      <div className="section">
        <div>(로그인)/api/web/v1/search/search-recently-word</div>
        <button type="button" onClick={handleSearchRecent}>최근 검색 단어 목록 호출</button>
      </div>
      <div className="section">
        <div>(비로그인)/api/web/v1/search/search-hot-word</div>
        <button type="button" onClick={handleSearchHot}>인기 검색 단어 목록 호출</button>
      </div>
      <div className="respBox">
        {response}
      </div>
    </div>
  );
}

export default App;
