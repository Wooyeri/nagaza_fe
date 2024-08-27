import { Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout/Layout'
import ListPage from './components/ListPage'
import Home from './components/Home'
import Detail from './components/detail/Detail'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home/>}/>
          <Route path='/lists/:category?' element={<ListPage />}/>
          <Route path="/lists/:category/:id" element={<Detail/>}></Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
