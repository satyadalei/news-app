import './App.css';
import NavBar from "./components/NavBar";
import News from './components/News';
import { Routes,Route} from 'react-router-dom';
function App() {
  return (
   <>
     <NavBar />
     <Routes>
              <Route path='/' element={<News pageSize={20} country={"in"} category={'general'} />} />
              <Route path='/business' element={<News pageSize={20} country={"in"} category={'business'} />} />
              <Route path='/science' element={<News pageSize={20} country={"in"} category={'science'} />} />
              <Route path='/sports' element={<News pageSize={20} country={"in"} category={'sports'} />} />
              <Route path='/entertainment' element={<News pageSize={20} country={"in"} category={'entertainment'} />} />
              <Route path='/technology' element={<News pageSize={20} country={"in"} category={'technology'} />} />
              <Route path='/health' element={<News pageSize={20} country={"in"} category={'health'} />} />
      </Routes> 

   </>
  );
}

export default App;
