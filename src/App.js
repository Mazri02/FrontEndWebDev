import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='backgroundHeadApps'/>
      <header className='headApps'>
        <ul className="headTitle">
            <li>Home</li>
            <li>Services</li>
            <li>Products</li>
            <li>Testimonials</li>
            <li>Contact</li>
        </ul>
      </header>
      
      <div className='ContentContainer'>Insert Content Here</div>
      
      <footer className="footApps">
            <div className="footCont">
                <div className="LogoCont">
            <div className='logoPic'/>
        </div>
        <div className="footCont">
            <ul className="footTitle">
                <li className='BoldTitle'>About Us</li>
                <li>Home</li>
                <li>Services</li>
                <li>Products</li>
                <li>Testimonials</li>
                <li>Contact</li>
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
                    <div className='InstaLogo'/>
                    <div className='FacebookLogo'/>
                    <div className='WhatsappLogo'/>
                </div>
                <div className="CopyrightDisc">© 2024 Car Repair, Sdn. Bhd. All Rights Reserved®</div>
            </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
