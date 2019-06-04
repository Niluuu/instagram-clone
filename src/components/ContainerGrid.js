import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import UserInfo from './UserInfo'
import User from './User'
import UserMedia from './UserMedia'

const styles = theme => ({
  root: {
    flexGrow: 1,
    background: "#FBFCFC",
    paddingTop: 50,
  }
});

export class CenteredGrid extends Component {
  constructor(props){
    super(props);
    this.state = {
      initialUser: []
    };
  }

  componentDidMount = ()=> {
    const access_token = "5341013910.4d3a0b8.ba1bb1c0cfbf44cd8e1547e5d591e222"
    const url = "https://api.instagram.com/v1/users/self/?access_token=" + access_token
      fetch(url)
      .then(response => {
        return response.json();
      })
      .then(jsonStr => {
        const initialUser = jsonStr
        this.setState({ initialUser })
        console.log("self", initialUser);
      })
      .catch(error => {
        console.log("error") 
      })
  }
   
  render() {
    const { classes } = this.props;
    const { user } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <User  initialUser={this.state.initialUser.data}/>
          </Grid>
          <Grid item xs={6}>
            <UserInfo initialUser={this.state.initialUser.data}/>
          </Grid>
          <Grid xs={12} style={{display: 'flex', justifyContent: 'center'}}>
            <UserMedia user={user.data} />
          </Grid>
        </Grid>
      </div>
    );
  }
}


CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);