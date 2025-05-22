import logo from './logo.svg';
import './index.css';
import SongSearch from './Components/Search';
import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
       <Toaster position="top-right" reverseOrder={false} />
      <Routes>
         
<Route path='/' element= {<SongSearch></SongSearch>}></Route>
        </Routes>
    </div>
  );
}

export default App;
