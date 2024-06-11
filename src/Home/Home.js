import './Home.css';
import Home from './views/Views';
import {Typography} from '@mui/material';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className='backgroundHeadApps' />
      <header className='headApps'>
      <div className="LogoCont">
                <div className='logoPic overRide'/>
            </div>
        <ul className="headTitle">
              <li><Link className="Selected" to="/">Home</Link></li>
              <li><Link to="/Service">Service</Link></li>
              <li><Link to="/Product">Products</Link></li>
              <li><Link to="/">Testimonial</Link></li>
        </ul>
      </header>

      <div className='contVids'>
        <video className='Video' autoPlay muted>
          <source src="image/HomeImage/carmontage.mp4" type="video/mp4" />
        </video>
        <div className='textType'>
          <div>
            <Typography variant='h2'>
              Revive Your Rides
            </Typography>
            <Typography variant='h4'>One Repair at a Time.</Typography>
            <Typography variant='h7'>Expert car services for safety, performance, and reliability.</Typography>
          </div>
        </div>
      </div>
      <div className='ContentContainer'>
        <Home/>
      </div>


      <footer className="footApps">
        <div className="footCont">
          <div className="LogoCont">
            <div className='logoPic' />
          </div>
          <div className="footCont">
            <ul className="footTitle">
              <li className='BoldTitle'>About Us</li>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/Service">Service</Link></li>
              <li><Link to="/Product">Products</Link></li>
              <li>Testimonials</li>
            </ul>

            <ul className="footTitle">
              <li className='BoldTitle'>Standard Service</li>
              <li>Repairs & Maintenance</li>
              <li>Engine Overhaul</li>
              <li>Gearbox Overhaul</li>
              <li>Upgrades Parts</li>
              <li>Air Conditioning Services</li>
              <li>Auto Painting Services</li>
            </ul>

            <ul className="footTitle">
              <li className='BoldTitle'>Models</li>
              <li>Proton Saga</li>
              <li>Perodua Axia</li>
              <li>Perodua Alza</li>
              <li>Toyota Camry</li>
              <li>Toyota Hilux</li>
              <li>Proton X50</li>
              <li>Honda Civic</li>
            </ul>

            <ul className="footTitle">
              <li className='BoldTitle'>Branch Location</li>
              <li>Kajang, Selangor, 43000</li>
              <li>Kuala Lumpur, London, 53200</li>
              <li>Petaling Jaya, Selangor, 47300</li>
              <li>Alor Gajah, Melaka, 78750</li>
              <li>Segamat, Johor, 85000</li>
            </ul>
          </div>
        </div>

        <div className='mediaCont'>
          <div className='justCont'>
            <div className="d-flex">
              <div className='InstaLogo' />
              <div className='FacebookLogo' />
              <div className='WhatsappLogo' />
            </div>
            <div className="CopyrightDisc">© 2024 Car Repair, Sdn. Bhd. All Rights Reserved®</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
