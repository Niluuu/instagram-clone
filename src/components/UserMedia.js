import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { ReactComponent as Posts } from '../img/posts.svg'
import Grid from '@material-ui/core/Grid';


function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  }
}));

const styles = theme => ({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: `${theme.spacing(3)}px`,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing(1),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
});

function UserMedia({user}) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" color="inherit">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="inherit"
          textColor="inherit"
          variant="scrollable"
          scrollButtons="auto"
          style={{display: 'flex', justifyContent: 'center'}}
        >
          <Tab label="Posts" icon={<Posts />} />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
          <Tab label="Item Four" />
        </Tabs>
      </AppBar>
      {value === 0 && 
      <TabContainer className={classes.tabs} >

        <Grid container spacing={1} style={{width: "80vw", margin: "0 auto"}}>

          {
            user.map((data)=> {
            if(data.images && data.images.low_resolution ) {
                const pic = data.images.low_resolution.url

                return (
                    <Grid item spacing={3}>
                      <div 
                        className="bg-img" 
                        style={{background: `url(${pic})`,backgroundSize: "cover", backgroundRepeat: "no-repeat", 
                        width: 280, height: 280, margin: 5}}
                        >    
                      </div>
                    </Grid>
                )

              }
            })   
          }

        </Grid>  

      </TabContainer>}
      {value === 1 && <TabContainer className={classes.tabs} >Item Two</TabContainer>}
      {value === 2 && <TabContainer className={classes.tabs} >Item Three</TabContainer>}
      {value === 3 && <TabContainer className={classes.tabs} >Item Four</TabContainer>}
      {value === 4 && <TabContainer className={classes.tabs} > Item Five</TabContainer>}
    </div>
  );
}


export default withStyles(styles)(UserMedia);