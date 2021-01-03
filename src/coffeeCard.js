import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import { Avatar, CardMedia, IconButton } from '@material-ui/core';
import ShareIcon from '@material-ui/icons/Share';


const CoffeeCard = (props) =>{
  const {avatarUrl , title, subtitle,description,imageUrl} = props;
    return (
        <Card >
            <CardHeader
        avatar={
          <Avatar src={avatarUrl}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <ShareIcon />
          </IconButton>
        }
        title={title}
        subheader={subtitle}
      />
      <CardMedia
        style={{height:"auto" ,width:"100%"}}
        image={imageUrl}
      />
        <CardContent>
         
          <Typography variant="body2" component="p">
            {description}
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">BUY NOW</Button>
          <Button size="small">OFFER</Button>
        </CardActions>
      </Card>
    )
}
export default CoffeeCard;