import React from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CardMedia } from '@material-ui/core';


const DisplayText = ({description}) => {

  return (
    <div className="h-96 overflow-y-scroll">
    <Card >
      <CardContent  >
        <Typography className="font-serif text-center"  variant="h4" gutterBottom>
          アプリについて
        </Typography>
        <Typography    variant="body1">
          {description}
        </Typography>

      </CardContent>
    </Card>
    </div>
  );
}

export default DisplayText
