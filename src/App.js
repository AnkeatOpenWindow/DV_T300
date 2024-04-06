import './App.css';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from './pages/landing';
import Navbar from './components/navbar';
import Footer from './components/footer';




function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/landing' element={<Landing />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
