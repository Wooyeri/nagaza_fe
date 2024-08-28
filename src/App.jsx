import { Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from '@/components/Layout/Layout'
import ListPage from '@/components/views/ListPage'
import Home from '@/components/views/Home'
import DetailPage from '@/components/views/DetailPage'
import NotFound from './components/views/NotFound'
import MyLikeSaved from './components/views/MyLikeSaved'
import Login from './components/views/Login'
import SignUp from './components/views/SignUp'
import PersonalInfo from './components/views/PersonalInfo'
import ScrapList from '@/components/scrapList/ScrapList'
// import ScrapDetail from '@/components/scrapList/scrapDetail/ScrapDetail'

function App() {
  return (
    <div style={{width: "100%"}}>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home/>}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/signup' element={<SignUp />}/>
          <Route path='/lists/:category?' element={<ListPage />}/>
          <Route path='/lists/:category/:id' element={<DetailPage />}/>
          <Route path='/mypage/personal' element={<PersonalInfo />}/>
          <Route path='/mypage/mylists/:category?' element={<MyLikeSaved />}/>
          <Route path="/scrap/list" element={<ScrapList/>}></Route>
          {/* <Route path="/scrap/list/:name" element={<ScrapDetail/>}></Route> */}
          <Route path='*' element={<NotFound />}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
