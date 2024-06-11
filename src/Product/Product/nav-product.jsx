import React, { useState } from 'react';
import './nav-product.css';
import jsonBrake from './brake.json';
import jsonShckAbsr from './shck-absr.json'
import jsonTyre from './tyre.json'
import jsonWheel from './wheel.json'
import $ from 'jquery';

// This is the TabNavigation component
const ProductNavigation = () => {
  // State to keep track of the active tab
  const [activeTab, setActiveTab] = useState('brake');

  // Function to handle tab click
  const handleTabClick = (tab,e) => {
    setActiveTab(tab); // Set the active tab
    $(e.target).parents().eq(2).children('li').map((value,i) => {
        $(i).css('background-color','transparent')
        $(i).children().css('color','white')
    })
    $(e.target).parents().eq(1).css('background-color','#c0c0c0')
    $(e.target).parents().eq(1).children().css('color','black')
  };

  return (
    <div className='mainContainer'>
      {/* Navigation for tabs */}
      <nav className='nav-container'>
        <div className='prdct-title'><h2>Products</h2></div>
        <ul className='nav-tab'>
          {/* Tab for Brake */}
          <li>
            <button
              onClick={(e) => handleTabClick('brake',e)}
              className={activeTab === 'brake' ? 'active' : ''}
            >
              <b>Brake</b>
            </button>
          </li>
          {/* Tab for Brake */}
          <li>
            <button
              onClick={(e) => handleTabClick('shck-asbr',e)}
              className={activeTab === 'shck-asbr' ? 'active' : ''}
            >
              <b>Shock Absorber</b>
            </button>
          </li>          
          {/* Tab for Tyre */}
          <li>
            <button
              onClick={(e) => handleTabClick('tyre',e)}
              className={activeTab === 'tyre' ? 'active' : ''}
            >
              <b>Tyre</b>
            </button>
          </li>
          {/* Tab for Wheel */}
          <li>
            <button
              onClick={(e) => handleTabClick('wheel',e)}
              className={activeTab === 'wheel' ? 'active' : ''}
            >
              <b>Wheel</b>
            </button>
          </li>          
        </ul>
      </nav>
      {/* Content for Brake tab */}
      {activeTab === 'brake' && (
        <div className='prdct'>
          <div className='prdct-description'>
            <h1>Our Brakes</h1>
            <p>When it comes to safety and precision on the road, the excellence of your braking system is crucial. We provide the <b>finest brake brands</b> available in Malaysia, relied upon by numerous drivers for their consistent performance and dependability. Our brakes are of <b>premium quality</b>, engineered to deliver outstanding stopping power and responsiveness in any driving condition. Whether you pilot a <b>Perodua, Proton, Honda, or Toyota</b>, we have the ideal brakes tailored for your vehicle's specifications. Feel the difference with enhanced braking efficiency, minimized stopping distances, and superior control. Don't settle for less when it comes to your safety; opt for our brakes for a more controlled and secure driving experience. Invest in reliability, invest in precision, invest in us. Your journey matters.</p>
          </div>
          {jsonBrake.map((item, index) => (
          <div className='prdct-card' key={index}>
            <img className='prdct-img' src={item.image} alt={item.title}/>
            <h3 className='title'>{item.title}</h3>
            <p className='price'><b>{item.price}</b></p>
            <p className='manufactured'>Made in {item.manufactured}</p>
            <p className='description'>{item.description}</p>
          </div>
        ))}
        </div>
      )}
      {/* Content for Tyre tab */}
      {activeTab === 'tyre' && (
        <div className='prdct'>
          <div className='prdct-description'>
            <h1>Our Tyres</h1>
            <p>When it comes to safety and performance, your vehicle deserves nothing but the best. That’s why we offer the <b>best tyre brands</b> used in Malaysia, trusted by thousands of drivers nationwide. Our tyres are of <b>high quality</b>, designed to withstand various road conditions while providing optimal performance. Whether you drive a <b>Perodua, Proton, Honda, or Toyota</b>, we have the perfect fit for your car model. Experience the difference of superior traction, durability, and fuel efficiency with our tyres. Don’t compromise on your journey; choose our tyres for a smooth and safe ride. Invest in quality, invest in safety, invest in us. Your vehicle deserves it.</p>
          </div>
          {jsonTyre.map((item, index) => (
          <div className='prdct-card' key={index}>
            <img className='prdct-img' src={item.image} alt={item.title}/>
            <h3 className='title'>{item.title}</h3>
            <p className='price'><b>{item.price}</b></p>
            <p className='manufactured'>Made in {item.manufactured}</p>
            <p className='description'>{item.description}</p>
          </div>
        ))}
        </div>
      )}      
      {/* Content for Tyre tab */}
      {activeTab === 'shck-asbr' && (
        <div className='prdct'>
          <div className='prdct-description'>
            <h1>Our Shock Absorbers</h1>
            <p>When it comes to ensuring a smooth and comfortable ride, the quality of your shock absorbers is paramount. We offer the <b>best shock absorber brands</b> used in Malaysia, trusted by countless drivers for their reliability and performance. Our shock absorbers are of <b>high quality</b>, designed to provide superior comfort and control on all road conditions. Whether you drive a <b>Perodua, Proton, Honda, or Toyota</b>, we have the perfect shock absorbers for your car model. Experience the difference of enhanced stability, reduced vibration, and improved road handling with our shock absorbers. Don’t compromise on your comfort and safety; choose our shock absorbers for a smoother and safer journey. Invest in quality, invest in comfort, invest in us. Your vehicle deserves it.</p>
          </div>
          {jsonShckAbsr.map((item, index) => (
          <div className='prdct-card' key={index}>
            <img className='prdct-img' src={item.image} alt={item.title}/>
            <h3 className='title'>{item.title}</h3>
            <p className='price'><b>{item.price}</b></p>
            <p className='manufactured'>Made in {item.manufactured}</p>
            <p className='description'>{item.description}</p>
          </div>
        ))}
        </div>
      )}
      {/* Content for Tyre tab */}
      {activeTab === 'wheel' && (
        <div className='prdct'>
        <div className='prdct-description'>
          <h1>Our Wheels</h1>
          <p>Elevate your drive with our top wheel brands, trusted for their robust performance and durability. Our selection caters to all models, from <b>Perodua to Toyota</b>, ensuring a seamless fit for your vehicle. Experience enhanced stability and control, and enjoy a ride that’s <b>smooth and secure</b>. Choose quality, choose comfort—choose our wheels for the ultimate driving experience.</p>
        </div>
        {jsonWheel.map((item, index) => (
        <div className='prdct-card' key={index}>
          <img className='prdct-img' src={item.image} alt={item.title}/>
          <h3 className='title'>{item.title}</h3>
          <p className='price'><b>{item.price}</b></p>
          <p className='manufactured'>Made in {item.manufactured}</p>
          <p className='description'>{item.description}</p>
        </div>
      ))}
      </div>
      )}      
    </div>
  );
};

export default ProductNavigation;