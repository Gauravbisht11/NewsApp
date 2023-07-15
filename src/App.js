
import { useState } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
  
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
function App() {
  const pageSize=9;
  const [progress, setProgress] = useState(0)
  return (
    <>
     <LoadingBar
        color='#f11946'
        progress={progress}
       
      />
    <Router basename='/NewsApp'>

    <Navbar/>  
    <Routes>
          <Route exact path="/NewsApp" element={<News pageSize={pageSize} key ="general" category="general"  setProgress={setProgress}/>}></Route>
          <Route exact path="/general" element={<News pageSize={pageSize} key ="general"category="general"  setProgress={setProgress}/>} ></Route>
          <Route exact path="/business" element={<News pageSize={pageSize}  key ="business" category="business"  setProgress={setProgress}/>}  ></Route>
          <Route exact path="/sports" element={<News pageSize={pageSize}  key ="sports" category="sports"  setProgress={setProgress}/>}></Route>
          <Route exact path="/technology" element={<News pageSize={pageSize} key ="technology"category="technology"  setProgress={setProgress}/>}></Route>
          <Route exact path="/entertainment" element={<News pageSize={pageSize} key ="entertainment" category="entertainment"  setProgress={setProgress}/>}></Route>
          <Route exact path="/politics" element={<News pageSize={pageSize} key ="politics" category="politics"  setProgress={setProgress}/>}></Route>

     </Routes> 
    </Router>
    
    </>
  );
}

export default App;
