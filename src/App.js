import { Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import Notice from './page/Notice';
import Profile from './page/Profile';
import Diary from './page/Diary';
import Myself from './page/Myself';

import Notice1 from './page/notice/Notice1';
import Notice2 from './page/notice/Notice2';
import Notice3 from './page/notice/Notice3';
import Notice4 from './page/notice/Notice4';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/notice" element={<Notice />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/diary" element={<Diary />}/>
        <Route path="/myself" element={<Myself />}/>
        <Route path="/notice/notice1" element={<Notice1 />}/>
        <Route path="/notice/notice2" element={<Notice2 />}/>
        <Route path="/notice/notice3" element={<Notice3 />}/>
        <Route path="/notice/notice4" element={<Notice4 />}/>
      </Routes>
    </div>
  );
}

export default App;