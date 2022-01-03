import { Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import Notice from './page/Notice';
import Profile from './page/Profile';
import Diary from './page/Diary';
import Guest from './page/Guest';

import Notice1 from './page/notice/Notice1';
import Notice2 from './page/notice/Notice2';
import Notice3 from './page/notice/Notice3';

import Diary1 from './page/diary/Diary1';
import Diary2 from './page/diary/Diary2';
import Diary3 from './page/diary/Diary3';
import Diary4 from './page/diary/Diary4';
import Diary5 from './page/diary/Diary5';
import Diary6 from './page/diary/Diary6';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/notice" element={<Notice />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/diary" element={<Diary />}/>
        <Route path="/guest" element={<Guest />}/>

        <Route path="/board/notice1" element={<Notice1 />}/>
        <Route path="/board/notice2" element={<Notice2 />}/>
        <Route path="/board/notice3" element={<Notice3 />}/>
        
        <Route path="/board/diary1" element={<Diary1 />}/>
        <Route path="/board/diary2" element={<Diary2 />}/>
        <Route path="/board/diary3" element={<Diary3 />}/>
        <Route path="/board/diary4" element={<Diary4 />}/>
        <Route path="/board/diary5" element={<Diary5 />}/>
        <Route path="/board/diary6" element={<Diary6 />}/>
      </Routes>
    </div>
  );
}

export default App;