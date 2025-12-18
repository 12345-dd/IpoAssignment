import { Route, Routes } from 'react-router-dom'
import IpoList from './components/IpoList'
import IpoDetails from './components/IpoDetails'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<IpoList />}/>
        <Route path="/ipo/:id" element={<IpoDetails />}/>  
      </Routes>
    </>
  )
}

export default App
