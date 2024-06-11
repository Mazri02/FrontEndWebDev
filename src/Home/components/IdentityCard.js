import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function IdentityCard({ images, primary, secondary, description, maxWidth }) {

    const styles = {
        card: {
            maxWidth: {maxWidth}, // Use provided value or default to 200
            height: '97%',
            marginLeft: 3,
        },
        media: {
            height: '50%', // Adjust the height to 50%
        },
        typography: {
            fontSize: '100%', // Adjust the font size to 50%
            marginTop: '30',
        },
    };

    return (
        <Card sx={styles.card}>
            <CardActionArea>
                <div className="imageStaff" style={{ backgroundImage: `url(${images})` }}></div>
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
