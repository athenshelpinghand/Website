// import logo from './logo.svg';
// import './App.css';
// import About from './pages/About';
// import GetInvolved from './pages/GetInvolved';
// import Team from './pages/Team';
// import Header from './components/Header';
// import Home from './pages/Home';
// import Footer from './components/Footer';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

// function App() {
//   return (
//     <div className="App">
//    <BrowserRouter>
//         <div >
//         <Routes>
         
//            <Route path="/" element={<Home/>} />
//            <Route path="/about" element={<About/>} />
//            <Route path="/team" element={<Team/>} />
//            <Route path="/get-involved" element={<GetInvolved/>} />
            
//         </Routes>
//         </div>
//         <Footer />
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;

import logo from './logo.svg';
import './App.css';
import About from './pages/About';
import GetInvolved from './pages/GetInvolved';
import Team from './pages/Team';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router basename="/home">
        <div >
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/team" element={<Team/>} />
            <Route path="/get-involved" element={<GetInvolved/>} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
