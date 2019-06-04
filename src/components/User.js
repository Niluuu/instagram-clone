import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  avatar: {
    margin: 10,
    width: 150,
    height: 150,
  }
});

function User({ initialUser }) {
  const classes = useStyles();
  // console.log("initialUser", initialUser )

  if (initialUser){
    const picture = initialUser.profile_picture
    // console.log("pic",picture)

    return (
      <div>
        <Grid container justify="center" alignItems="center">
          <Avatar alt="Remy Sharp" src={picture} className={classes.avatar}/>
        </Grid>
      </div>
    );
  }else{
    return null
  } 
}

export default User
