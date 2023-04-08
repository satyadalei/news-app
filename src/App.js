import './App.css';
import NavBar from "./components/NavBar";
import News from './components/News';
function App() {
  return (
   <>
     <NavBar />
     <News pageSize={10} country={"in"} category={'business'} />
   </>
  );
}

export default App;
