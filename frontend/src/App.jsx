import { useState } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import UserLayout from './components/layout/userlayout';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter >
    <Routes>
      <Route path='/' element={<UserLayout />} >{/* userlayout */}</Route>
      <Route >{/* admin layout */}</Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
