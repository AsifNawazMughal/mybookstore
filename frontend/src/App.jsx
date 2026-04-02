import { Route, Routes } from 'react-router-dom'
import Layout from './Components/Layout'
import HomePage from './pages/home'
import Team from './pages/team'
import Shop from './pages/shop'
import ContactPage from './pages/contact'
import LoginPage from './pages/auth/login'
import RegisterPage from './pages/auth/register'
import Profile from './pages/profile'
import ProtectedRoutes from './utils/ProtectedRoutes'


function App() {
  return (
   <>
    <Layout >
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/shop' element={<Shop/>} />
        <Route path='/team' element={<Team/>} />
        <Route path='/contact' element={<ContactPage/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/register' element={<RegisterPage/>} />
        <Route path='/profile' element={
          <ProtectedRoutes>
            <Profile />
          </ProtectedRoutes>
        } />
      </Routes>
    </Layout>
   </>
  )
}

export default App
