import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { ReactComponent as Settings } from '../img/settings.svg';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
  flex: {
    display: 'flex',
    alignItems: 'center'
  },
  margin: {
    marginRight: 20
  },
  paddingRight: {
    paddingRight: 5
  }
}));

function UserInfo(props) {
  const { initialUser } = props
  const classes = useStyles();  

  if (initialUser){
    return (
      <div>
        <Grid xs={12} className={classes.flex}>
          <Typography variant="h5" component="h2">{initialUser.full_name}</Typography>
          <Button variant="outlined" className={classes.button}>Edit</Button>
          <IconButton>
            <Settings/>
          </IconButton>
        </Grid>
        <Followers/>
        <Grid>
          <strong>{initialUser.full_name}</strong>
        </Grid>
      </div>
    );
  }else{
    return null
  } 
  function Followers(){
    if(initialUser){
      if(initialUser.counts){
        return (
          <div>
            <Grid xs={12} className={classes.flex}>
              <strong className={classes.paddingRight}>{initialUser.counts.media}</strong>
              <Typography className={classes.margin}  variant="subtitle1" component="h2">posts</Typography>
              <strong className={classes.paddingRight}>{initialUser.counts.followed_by}</strong>
              <Typography className={classes.margin}  variant="subtitle1" component="h2">followers</Typography>
              <strong className={classes.paddingRight}>{initialUser.counts.follows}</strong>
              <Typography  className={classes.margin} variant="subtitle1" component="h2">following</Typography>
            </Grid>
          </div>
        )
      }
    }
  }
}




export default UserInfo

