import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import '../views/Home.css';

export default function LongCard({ primary, secondary, tiertary, isImageOnRight, onImage, starRating, images }) {
    
    return (
        <Card sx={{ display: 'flex', margin: '3em' }}>
            {isImageOnRight ? (
                <>
                    <CardContent >
                        <Typography gutterBottom component="div" variant="h5" align='right'>
                            <b>{primary}</b>
                        </Typography>
                        {starRating ? (
                            <>
                                <div className='StarContainer'>
                                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                </div>
                            </>
                        ) : (
                            <Typography variant="body1" component="div" align="justify">
                                {secondary}
                            </Typography>
                        )}
                        <Typography variant="body1" component="div" align='justify'>
                            {tiertary}
                        </Typography>
                    </CardContent>
                </>
            ) : null}
            {onImage ?
                <div className='imageLongCard' style={{ backgroundImage: `url(${images})` }} />
                : null}
            {!isImageOnRight ? (
                <>
                    <CardContent>
                        <Typography gutterBottom component="div" variant="h5" align='left'>
                            <b>{primary}</b>
                        </Typography>
                        {starRating ? (
                            <>
                                <div className='StarContainer'>
                                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                </div>
                            </>
                        ) : (
                            <Typography variant="body1" component="div" align="justify">
                                {secondary}
                            </Typography>
                        )}
                        <Typography variant="body1" component="div" align='justify'>
                            {tiertary}
                        </Typography>
                    </CardContent>
                </>
            ) : null}
        </Card>
    );
}