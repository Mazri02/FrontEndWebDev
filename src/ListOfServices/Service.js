import './Service.css';
import {useEffect,useState} from 'react';
import data from './data/dataCar.json';
import dataService from './data/dataDesc.json';
import $ from 'jquery';
import blinder from 'color-blind';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

var listOfService = [];
var listOfPrice = [];
var carModel = "";
var carType = "";
var count = 0;

function chooseCar(e) {
    carType = $(e).parent().children('.ProductTitle').text();
    $('input[type=checkbox]').prop('checked',false);
    $('.ProductCont').css('background-color','transparent');
    $('.ProductTitle').parent().children('.ProductTitle').css('font-weight','350');
    $('.InsertService').html('<tr><td>Select A Service</td></tr>');
    
    carModel = carType;
    
    listOfService = [];
    listOfPrice = [];
    
    for(var i = 0;i < data.length;i++){
        if(data[i].CarType == carType){
            $('.OC').text('RM ' + data[i].listPrice[0]);
            $('.FR').text('RM ' + data[i].listPrice[1]);
            $('.TR').text('RM ' + data[i].listPrice[2]);
            $('.SPR').text('RM ' + data[i].listPrice[3]);
            $('.BI').text('RM ' + data[i].listPrice[4]);

            $('.EO').text('RM ' + data[i].listPrice[5]);
            $('.TS').text('RM ' + data[i].listPrice[6]);
            $('.ACHS').text('RM ' + data[i].listPrice[7]);
            $('.ESR').text('RM ' + data[i].listPrice[8]);
            $('.RA').text('RM ' + data[i].listPrice[9]);
        }
    }
    
    $('.carType').text('Car Model : ' + carModel)
    $(e).parent().css('background-color','#9f9f9f');
    $(e).parent().css('border-radius','1em');
    $(e).parent().children('.ProductTitle').css('font-weight','bold');
}

function submitForm() {
    if(carType == "") {
        alert('Please Choose Your Car Type')
    } else {
        if($('.inputName').val() == '' && $('.inputNumber').val() == ''){
           alert('Please Fill in Your Name and Phone Number')
        } else {
           alert('Hello ' + $('.inputName').val() + ", your credentials has been sent and we will call your number shortly")
        }
    }
}

function chooseService(e) {
    var ServicePrice = $($(e).parents().eq(1).children()[1]).text();
    var ServiceType = $($(e).parents().eq(1).children()[2]).text();
    var StringVal = "",totalPrice = 0,afterTax = 0, grandTotal = 0;
    
    if($(e).prop('checked')){
        listOfService[count] = ServiceType;
        listOfPrice[count] = ServicePrice;
        count++;
    } else {
        for(var i = 0;i < listOfService.length;i++){
            if(listOfService[i] == ServiceType){
                listOfService[i] = null;
                listOfPrice[i] = null;
            } 
        }
        
        listOfService = listOfService.filter(item => item != null && item !== "");
        listOfPrice = listOfPrice.filter(item => item != null && item !== "");
    }
    
    
    for(var i = 0;i < listOfService.length;i++){
        if(listOfService[i] != undefined){
            StringVal += "<tr><td>" + listOfService[i] + "</td><td>"+ listOfPrice[i] +"</td></tr>";
            totalPrice += parseInt(listOfPrice[i].split(" ")[1]);
        } 
    }
    
    afterTax = totalPrice*0.06;
    grandTotal = parseInt(totalPrice) + parseInt(afterTax.toFixed(2));
    
    StringVal += "<tr><td></td></tr><tr><td></td></tr><tr><td className='PreReceipt'>SubTotal</td><td>RM "+ totalPrice +"</td></tr><tr><td>Service Tax (6%)</td><td>RM "+ afterTax.toFixed(2) +"</td></tr><tr className='GrandTotal'><td>Grand Total</td><td>RM "+ grandTotal +"</td></tr>";
    
    $('.InsertService').html(StringVal);
    $('.PreReceipt').css('padding-top','1em')
    $('.PreReceipt').css('border-top','.25px solid black')
}

function App() {
    useEffect(() => {
    },[]);

  return (
    <div className="App">
      <div className='backgroundHeadApps'/>
      <header className='headApps'>
      <div className="LogoCont">
                <div className='logoPic overRide'/>
            </div>
        <ul className="headTitle">
              <li><Link to="/">Home</Link></li>
              <li><Link className="Selected" to="/Service">Service</Link></li>
              <li><Link to="/Product">Products</Link></li>
              <li><Link to="/Testimony">Testimonial</Link></li>
        </ul>
      </header>
      
    <div className='ContExplain'>
      {dataService.map((value,i) => {
            return <div className='ServiceExpContainer'>
        <div className='ServiceCard' style={{backgroundImage : `url(${process.env.PUBLIC_URL + "/" + dataService[i].imageUrl}`}}/>
        <div className='ServiceTitle'>
                <div className='MainTitle'>{dataService[i].imageTitle}</div>
                <div className='SubTitle'>{dataService[i].subTitle}</div>
                <div className='Descript'>{dataService[i].imageDesc}</div>
        </div>
      </div>
      })}
    </div>
<hr className='ContDivider'/>
      
    <div className='Container'>
    <div className='ServiceCont'>
          <div className='d-flex Content ContWrap'>
                <div className='CarStep'>Step 1 : Choose Your Car Type</div>
                <div className='GrandProductCont'>
                    <div className='ModelTitle'>Perodua</div>
                    <div className='d-flex ProductList'>
                        {data.map((value,i) => {
                            if(data[i].CarType.split(" ")[0] === "Perodua"){
                                return (
                                    <div className='ProductCont' onClick={(e) => chooseCar(e.target)}>
                                        <div className='ProductImage' style={{backgroundImage: `url(${process.env.PUBLIC_URL + "/" + data[i].image})`,padding:'4em'}}/>
                                        <div className='ProductTitle'>{data[i].CarType}</div>
                                    </div>
                                )
                            }
                        })}

                    </div>

                    <div className='ModelTitle'>Honda</div>
                    <div className='d-flex ProductList'>
                        {data.map((value,i) => {
                            if(data[i].CarType.split(" ")[0] === "Honda"){
                                return (
                                    <div className='ProductCont' onClick={(e) => chooseCar(e.target)}>
                                        <div className='ProductImage' style={{backgroundImage: `url(${ process.env.PUBLIC_URL + "/" +data[i].image})`,padding:'4em'}}/>
                                        <div className='ProductTitle'>{data[i].CarType}</div>
                                    </div>
                                )
                            }
                        })}
                    </div>

                    <div className='ModelTitle'>Proton</div>
                    <div className='d-flex ProductList'>
                        {data.map((value,i) => {
                            if(data[i].CarType.split(" ")[0] === "Proton"){
                                return (
                                    <div className='ProductCont' onClick={(e) => chooseCar(e.target)}>
                                        <div className='ProductImage' style={{backgroundImage: `url(${process.env.PUBLIC_URL + "/" +data[i].image})`,padding:'4em'}}/>
                                        <div className='ProductTitle'>{data[i].CarType}</div>
                                    </div>
                                )
                            }
                        })}

                    </div>

                    <div className='ModelTitle'>Toyota</div>
                    <div className='d-flex ProductList'>
                        {data.map((value,i) => {
                            if(data[i].CarType.split(" ")[0] === "Toyota"){
                                return (
                                    <div className='ProductCont' onClick={(e) => chooseCar(e.target)}>
                                        <div className='ProductImage' style={{backgroundImage: `url(${process.env.PUBLIC_URL + "/" + data[i].image})`,padding:'4em'}}/>
                                        <div className='ProductTitle'>{data[i].CarType}</div>
                                    </div>
                                )
                            }
                        })}

                    </div>
                </div>

            </div>
<hr className='ContDivider'/>
                <div className='ServiceChoice ContWrap'>
                <div className='CarStep'>Step 2: What Kind Of Service You Seek?</div>
                    <table>
                        <th colspan='3'>
                            <td>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                                </svg> Inspection</td>
                        </th>
                        <tr>
                            <td><input className='Input_DI' type='checkbox' onChange={(e) => chooseService(e.target)}/></td>
                            <td className='DI'>RM 5</td>
                            <td>Fast Inspect</td>
                        </tr>
                        <tr>
                            <td><input className='Input_DI' type='checkbox' onChange={(e) => chooseService(e.target)}/></td>
                            <td className='DI'>RM 15</td>
                            <td>Deep Inspect</td>
                        </tr>
                    </table>
                    <table>
                        <th colspan='3'>
                            <td>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard" viewBox="0 0 16 16">
                              <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z"/>
                              <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z"/>
                            </svg> Standard Service</td>
                        </th>
                        <tr>
                            <td><input className='Input_OC' type='checkbox' onChange={(e) => chooseService(e.target)}/></td>
                            <td className='OC'>RM 0</td>
                            <td>Oil Change</td>
                        </tr>
                        <tr>
                            <td><input className='Input_FR' type='checkbox' onChange={(e) => chooseService(e.target)}/></td>
                            <td className='FR'>RM 0</td>
                            <td>Filter Replacement</td>
                        </tr>
                        <tr>
                            <td><input className='Input_TR' type='checkbox' onChange={(e) => chooseService(e.target)}/></td>
                            <td className='TR'>RM 0</td>
                            <td>Tire Rotation</td>
                        </tr>
                        <tr>
                            <td><input className='Input_SPR' type='checkbox' onChange={(e) => chooseService(e.target)}/></td>
                            <td className='SPR'>RM 0</td>
                            <td>Spark Plugs Replacement</td>
                        </tr>
                        <tr>
                            <td><input className='Input_BI' type='checkbox' onChange={(e) => chooseService(e.target)}/></td>
                            <td className='BI'>RM 0</td>
                            <td>Brake Inspection</td>
                        </tr>
                    </table>

                    <table>
                        <th colspan='3'>
                            <td>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-wrench-adjustable" viewBox="0 0 16 16">
                                  <path d="M16 4.5a4.5 4.5 0 0 1-1.703 3.526L13 5l2.959-1.11q.04.3.041.61"/>
                                  <path d="M11.5 9c.653 0 1.273-.139 1.833-.39L12 5.5 11 3l3.826-1.53A4.5 4.5 0 0 0 7.29 6.092l-6.116 5.096a2.583 2.583 0 1 0 3.638 3.638L9.908 8.71A4.5 4.5 0 0 0 11.5 9m-1.292-4.361-.596.893.809-.27a.25.25 0 0 1 .287.377l-.596.893.809-.27.158.475-1.5.5a.25.25 0 0 1-.287-.376l.596-.893-.809.27a.25.25 0 0 1-.287-.377l.596-.893-.809.27-.158-.475 1.5-.5a.25.25 0 0 1 .287.376M3 14a1 1 0 1 1 0-2 1 1 0 0 1 0 2"/>
                                </svg> Repair & Maintenance</td>
                        </th>
                        <tr>
                            <td><input className='Input_EO' type='checkbox' onChange={(e) => chooseService(e.target)}/></td>
                            <td className='EO'>RM 0</td>
                            <td>Engine Overhaul</td>
                        </tr>
                        <tr>
                            <td><input className='Input_TS' type='checkbox' onChange={(e) => chooseService(e.target)}/></td>
                            <td className='TS'>RM 0</td>
                            <td>Transmission Servicing</td>
                        </tr>
                        <tr>
                            <td><input className='Input_ACHS' type='checkbox' onChange={(e) => chooseService(e.target)}/></td>
                            <td className='ACHS'>RM 0</td>
                            <td>Air Conditioner Servicing</td>
                        </tr>
                        <tr>
                            <td><input className='Input_ESR' type='checkbox' onChange={(e) => chooseService(e.target)}/></td>
                            <td className='ESR'>RM 0</td>
                            <td>Exhaust System Repair</td>
                        </tr>
                        <tr>
                            <td><input className='Input_RA' type='checkbox' onChange={(e) => chooseService(e.target)}/></td>
                            <td className='RA'>RM 0</td>
                            <td>Recalibrate Alignment</td>
                        </tr>
                    </table>
                    <table>
                        <th colspan='3'>
                            <td>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-question" viewBox="0 0 16 16">
                                  <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286m1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94"/>
                                </svg>Others</td>
                        </th>
                        <tr>
                            <td><input className='Input_TW' type='checkbox' onChange={(e) => chooseService(e.target)}/></td>
                            <td className='TW'>RM 5</td>
                            <td>Towing (Pickup & Delivery)</td>
                        </tr>
                        <tr>
                            <td><input className='Input_CR' type='checkbox' onChange={(e) => chooseService(e.target)}/></td>
                            <td className='PJ'>RM 15</td>
                            <td>Custom Paint Job</td>
                        </tr>
                    </table>
                </div>
                <hr className='ContDivider'/>

                <div className='Receipt ContWrap'>
                <div className='CarStep'>Step 3 : Come meet us at our Branch</div>
                        <div className='ReceiptContent'>
                        <div className='carType'>Select a Car Model</div>
                        <table className='InsertService'>
                            <tr>
                                <td>Select A Service</td>
                            </tr>
                        </table>

                        <div className='FurtherCont'>
                            Ready to make adjustments?<br/>
                            Contact Us Now!<br/><br/>
                            <input className='inputName' type='text' placeholder='Insert Your Name'/>
                            <input className='inputNumber' type='number' placeholder='Insert Phone Number'/>
                            <div className='buttonCont'>
                                <input type='button' className='submitButton' value='Send Info' onClick={() => submitForm()}/>                     
                            </div>
                        </div>
                    </div>
                </div>
          </div>
    </div>
      
      <footer className="footApps">
            <div className="footCont">
            <div className="LogoCont">
                <div className='logoPic'/>
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
