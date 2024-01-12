import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from './layout/MainLayout';
import Home from './Pages/HomePage/Home';
import Addpage from './Pages/AddPage/Addpage';
import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <HelmetProvider>

    <BrowserRouter  >
    <Routes>
      <Route element={<MainLayout></MainLayout>}>
      <Route path="/" element={<Home></Home>} />
      <Route path='/add' element={<Addpage></Addpage>}/>
      </Route>
    </Routes>
  </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
