// Update the import path to match the actual file location and name
// For example, if the correct path is './components/layout/Layout'
import { Route, Routes } from 'react-router-dom'
import Layout from './Components/Layout'
import HomePage from './pages/home'
import Team from './pages/team'
import Shop from './pages/shop'
import ContactPage from './pages/contact/index.jsx'


function App() {
  
  return (
   <>
    <Layout >
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/shop' element={<Shop/>} />
        <Route path='/team' element={<Team/>} />
        <Route path='/contact' element={<ContactPage/>} />
      </Routes>
    </Layout>
   </>
  )
}

export default App
