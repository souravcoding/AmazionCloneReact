import React from 'react'
import "./home.css"
import Product from './Product'
function Home() {
    return (
        <div className='home'>
            <img className="home_img" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""/>
         <div className="home_row">
         <Product id={123455656} title={"New Apple iPhone 12 Mini (64GB) - Black"} price={150} rating={5} image={"https://images-na.ssl-images-amazon.com/images/I/71uuDYxn3XL._SL1500_.jpg"}/>
         <Product id={123455888} title={"Shift IZI NanoDrone Camera 5MP FHD 1080P Patented 3D-Sensing Controller Autonomous Follow Me Mode 13 Mins Fly time Quadcopter UAV"} price={300} rating={5} image={"https://images-na.ssl-images-amazon.com/images/I/61UEVtYiVpL._SL1500_.jpg"}/>

         </div>
         <div className="home_row">
         <Product id={123455777} title={"Mi TV 4A PRO 108 cm (43 Inches) Full HD Android LED TV (Black) | With Data Saver"} price={350} rating={4} image={"https://images-na.ssl-images-amazon.com/images/I/710rArA2OPL._SL1500_.jpg"}/>
         <Product id={123455122} title={"Noise NoiseFit Endure Smart Watch with 100+ Cloud Based Watch Faces & 20 Day Battery Life (Charcoal Black)"} price={70} rating={4} image={"https://images-na.ssl-images-amazon.com/images/I/81bk5BJr8tL._UX679_.jpg"}/>
         <Product id={123455989} title={"Amazfit Bip U Smart Watch, 1.43 HD Color Display, SpO2 & Stress Monitor, 60+ Sports Modes, Breathing Training, 50+ Watch Faces Black"} price={50} rating={5} image={"https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"}/>

         </div>
         <div className="home_row">
         <Product id={9110079110} title={"HB Plus Waterproof Portable Bluetooth Speakers Model No: TG-1"} price={25} rating={5} image={"https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?%24300x400_retinamobilex2%24"}/>

         </div>
        </div>
    )
}

export default Home
