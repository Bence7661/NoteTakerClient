import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Notes from './pages/Notes/Notes.jsx'
import Register from './pages/RegisterPage.jsx'
import NavBar from './components/NavBar/NavBar.jsx'

function App() {

  return (
    <BrowserRouter>
      <div className='initial-viewport'>
        <NavBar />
        <div className='body-wrapper'>
          <main>
            <Routes>
              <Route index element={<Home />} />
              <Route path="Home" element={<Home />} />
              <Route path="Notes" element={<Notes />} />
              <Route path="Register" element={<Register />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
