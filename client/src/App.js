import {Route, Routes } from "react-router-dom";
import SongList from './Components/SongList';

export default function App(){
  return(<div>
    <Routes>
      <Route path="/" element={<SongList/>}>
      {/* <Route path="/songs/:id" element={<SongDetails />} /> */}


      </Route>
    </Routes>
  </div>)
}