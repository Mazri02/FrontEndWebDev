import './testimony.css';
import React from 'react';
import LongCard from '../components/LongCard';
import imageData from '../model/data.json';
import GalleryImage from '../components/Gallery';
import { Typography } from '@mui/material';

export default function Testimony() {
    return (
        <React.Fragment>
            {imageData.testimony.map((testimony) => (
                <LongCard images={testimony.url}
                    onImage={true}
                    isImageOnRight={false}
                    starRating={true}
                    primary={testimony.primary}
                    secondary=''
                    tiertary={testimony.tiertary}>
                </LongCard>
            ))}
            <center><div className='gallery'><GalleryImage></GalleryImage></div></center>
        </React.Fragment>
    );

}