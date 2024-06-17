import * as React from 'react';
import IdentityCard from '../components/IdentityCard';
import LongCard from '../components/LongCard';
import SimpleCard from '../components/SimpleCard';
import {Divider,Typography}  from '@mui/material';
import HandshakeIcon from '@mui/icons-material/Handshake';
import HandymanIcon from '@mui/icons-material/Handyman';
import imageData from '../model/data.json';

import FeedbackIcon from '@mui/icons-material/Feedback';
import './Home.css';
import PictureCard from '../components/PictureCard';
import MapCard from '../components/MapCard';

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

export default function Home() {

    return (
        <React.Fragment>
            {/* <div className='Tagline'>
                <Typography variant='h2'>
                    Revive Your Rides
                </Typography>
                <Typography variant='h5'>One Repair at a Time.</Typography>
            </div> */}

            {/* Products */}
            <div className='Product'>
                <Typography variant='h4'>
                    Products
                </Typography>
                <Typography gutterBottom variant='body1'>
                    Buy our products, we promise you will be satisfy your purchase!
                </Typography>
                <PictureCard types='product'></PictureCard>
            </div>


            <div className='Service'>
                {/* Service */}
                <Typography variant='h4'>
                    Services
                </Typography>
                <Typography gutterBottom variant='body1'>
                    What services we provide to you?
                </Typography>
                <PictureCard types='services'></PictureCard>
            </div>

            <div className='divider'>
                <Divider sx={{ bgcolor: 'white' }} variant='middle' />
            </div>


            {/* About us */}
            <div className='AboutUs'>
                <Typography variant='h4'>
                    About Us
                </Typography>
            </div>
            <div className='AboutUsWrap'>
                <div className='CoreValue'>
                    <SimpleCard
                        icon={<HandshakeIcon></HandshakeIcon>}
                        primary="Integrity"
                        secondary="We believe in honesty, transparency, and doing what’s right—even when no one’s watching."
                    ></SimpleCard>
                    <SimpleCard
                        icon={<HandymanIcon></HandymanIcon>}
                        primary="Expertise"
                        secondary=" We stay ahead of the curve, attending workshops, mastering new technologies, and fine-tuning our skills."
                    ></SimpleCard>
                    <SimpleCard
                        icon={<FeedbackIcon></FeedbackIcon>}
                        primary="Customer-Centric"
                        secondary="We listen, empathize, and tailor solutions to your unique needs."
                    ></SimpleCard>
                </div>
                <div className='AboutUsCard'>
                    {/* <LongCard
                        images={'./image/about_info.jpg'}
                        onImage={true}
                        isImageOnRight={true}
                        primary="Our Journey"
                        secondary='At [Your Company Name], we’re more than just a car repair shop. We’re a team of passionate mechanics, gearheads, and problem solvers who live and breathe all things automotive. Our journey began with a simple mission: to keep wheels turning, engines humming, and smiles on our customers’ faces.'
                        tiertary='Back in [Year of Establishment], a small garage nestled in the heart of [City Name] became the birthplace of our automotive adventure. Armed with a toolbox, a dream, and a relentless drive to serve our community, our founder—[Founder’s Name]—set out to change the way people experienced car repairs.'
                    ></LongCard> */}
                    <IdentityCard
                        maxWidth={1000}
                        images={process.env.PUBLIC_URL + "/"+'image/HomeImage/about_us.jpg'}
                        primary="Our Journey"
                        secondary='At CareNWorkshop, we’re more than just a car repair shop. We’re a team of passionate mechanics, gearheads, and problem solvers who live and breathe all things automotive. Our journey began with a simple mission: to keep wheels turning, engines humming, and smiles on our customers’ faces. Back in 2015, a small garage nestled in the heart of Kajang,Selangor became the birthplace of our automotive adventure. Armed with a toolbox, a dream, and a relentless drive to serve our community, our founder Azri Mokhzani set out to change the way people experienced car repairs. CareNWorkshop is trusted by companies in the automotive aftermarket and has had partnerships with: Advance Auto Parts, A/C Pro, Batteries Plus, Cars.com, Energizer, FRAM, Mann + Hummel, Meijer, O’Reilly Auto Parts, Purolator, Sylvania, STP, Walmart, WIX Filters and more. CareNWorkshop is a vibrant company backed by distinguished angel investors and is not owned, wholly or partially, by any car company, dealership or aftermarket provider.'
                        description='All this hard work, the grease-stained hands, and the rhythmic hum of tools—it’s more than just repairing cars. It’s about breathing life back into engines, stitching together memories, and ensuring that every vehicle that leaves our workshop carries a piece of our dedication. We’re not just fixing cars; we’re restoring freedom, one bolt at a time.'
                    />
                </div>
            </div>


            <div className='divider'>
                <Divider sx={{ bgcolor: 'white' }} variant='middle' />
            </div>


            {/* Staff Member*/}
            <div className='StaffTitle'>
                <Typography variant='h4'>
                    Know Our Staff Member
                </Typography>
            </div>
            <div className='StaffMember'>
                {imageData.staff.map((staff) => (
                    <IdentityCard maxWidth={200} images={ process.env.PUBLIC_URL + "/"+staff.url} primary={staff.name} secondary={staff.position} description={staff.motto}></IdentityCard>
                ))}
            </div>

            <div className='divider'>
                <Divider sx={{ bgcolor: 'white' }} variant='middle' />
            </div>

            <div className='divider'>
                <Divider sx={{ bgcolor: 'white' }} variant='middle' />
            </div>

            {/* Contact */}
            <div className='Contact'>
                <div className='ContactDetails'>
                    <Typography variant='h4'>
                        Our Branch
                    </Typography>
                    <Typography gutterBottom variant='body1'>
                        Visit us at our car repair workshop branch, conveniently located in the heart of the city. 
                    </Typography>
                </div>
                <div className='ContactSelangor'>
                    {imageData.location.map((location) => (
                        <MapCard images={process.env.PUBLIC_URL + "/"+location.images} url={location.url} primary={location.name} secondary={location.phonenumber} description={location.email}></MapCard>
                    ))}
                </div>
            </div>
        </React.Fragment>
    );
}
