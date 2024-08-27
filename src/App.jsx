
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'
import Detail from 'src/Component/detail/Detail';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/movies/:id" element={<Detail/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
