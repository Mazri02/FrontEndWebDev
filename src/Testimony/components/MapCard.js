import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function MapCard({ images, url, primary, secondary, description }) {

    const styles = {
        card: {
            maxWidth: 1000,
            marginLeft: 2,
        },
        media: {
            height: '50%', // Adjust the height to 50%
            paddingTop: '0%',
            marginTop: 0, // You can adjust this margin as needed
        },
        typography: {
            fontSize: '100%', // Adjust the font size to 50%
            marginTop: '30',
        },
    };

    return (
        <Card sx={styles.card}>
            <CardActionArea>
                <div className='imageMaps'>
                    <div className='imageLocation' style={{ backgroundImage: `url(${images})` }} />
                    <iframe src={url}
                        width='250'
                        height='230'
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>

                <CardContent>
                    <Typography gutterBottom variant="h1" component="div" style={styles.typography}>
                        <b>{primary}</b>
                    </Typography>
                    <Typography gutterBottom variant="body2" style={styles.typography}>
                        {secondary}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" style={styles.typography}>
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

// ActionAreaCard.propTypes = {
//     name: PropTypes.string.isRequired,
//     position: PropTypes.string.isRequired,
// }
