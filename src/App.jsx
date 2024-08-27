import { Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from '@/components/Layout/Layout'
import ListPage from '@/components/views/ListPage'
import Home from '@/components/views/Home'
import DetailPage from '@/components/views/DetailPage'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home/>}/>
          <Route path='/lists/:category?' element={<ListPage />}/>
          <Route path="/lists/:category/:id" element={<DetailPage/>}></Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
