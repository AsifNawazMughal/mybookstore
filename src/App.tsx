// Update the import path to match the actual file location and name
// For example, if the correct path is './components/layout/Layout'
import Layout from './Components/Layout'
import HomePage from './pages/home'


function App() {
  
  return (
   <>
    <Layout >
      <HomePage />
    </Layout>
   </>
  )
}

export default App
