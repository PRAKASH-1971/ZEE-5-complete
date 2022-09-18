import './App.css';
import {Route,Routes,BrowserRouter} from "react-router-dom"
import Home from './Components/Home';
import Tvshow from './Components/Tvshow';
import Movies from './Components/Movies';
import Webseries from './Components/Webseries';
import News from './Components/News';
import Login from './Login';

function App() {
  return (
    <div className="App">
          <BrowserRouter >
    <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/zee5/TVshows' element={<Tvshow/>}/>
          <Route path='/zee5/Movies' element={<Movies/>}/>
          <Route path='/zee5/Web-series' element={<Webseries/> }/>
          <Route path='/zee5/News' element={<News/> }/>
          <Route path='/zee5/Login' element={<Login/> }/>
    </Routes>
    </BrowserRouter> 
    </div>
  );
}

export default App;
