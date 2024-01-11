import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer.js';
import Home from './Pages/Home.js';
import AboutUs from './Pages/AboutUs.js';
import Info from './Pages/Info.js';
import Price from './Pages/Price.js';
import Treatments from './Pages/Treatments.js';


function App() {
  return (
	<Router>
		<Header>
		<Routes>
		<Route path='/' element={<Home />} />	
		<Route path='/Om oss' element={<AboutUs />} />
		<Route path='/Kontakt' element={<Info />} />
		<Route path='/Priser' element={<Price />} />
		<Route path='/Behandlingar' element={<Treatments />} />
		</Routes>
		<Footer />
		</Header>
	</Router>
  );
}

export default App;
