import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const styles = {
    card: {
        maxWidth: '60%',
        marginLeft: 3,
        marginBottom: 3,
        padding: '1em',
    },
};


export default function SimpleCard({primary, secondary, icon}) {
  return (
    <Card sx={styles.card}>
      <CardContent>
        <any>{icon}</any>
        <Typography gutterBottom variant="h5" component="div">
          <b>{primary}</b>
        </Typography>
        <Typography variant="body2">
          <br />
          {secondary}
        </Typography>
      </CardContent>
    </Card>
  );
}
