import React, { Component } from 'react';
import { Link } from 'react-router';
import VenueTile from '../components/venueTile';
import VenueForm from '../components/venueForm';

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {GridList, GridTile} from 'material-ui/GridList';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';


class VenuesIndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      venues: [],
      venueName: '',
      venueAddress: '',
      venuePhone: '',
      venueUrl: '',
      venuePhoto: ''


    }
    this.addNewVenue= this.addNewVenue.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleUrlChange = this.handleUrlChange.bind(this);
    this.handlePhotoChange = this.handlePhotoChange.bind(this);
  }

  addNewVenue(formPayLoad) {
      fetch('/api/v1/venues', {
      method: 'POST',
      credentials: 'same-origin',
      body: JSON.stringify(formPayLoad)
      })
      .then(response => response.json())
      .then(body => {
          let newVenue = this.state.venues.concat(formPayLoad)
          this.setState({ venues: newVenue })
      })
  }
  handleFormSubmit(event) {
      event.preventDefault();
      let formPayLoad = {
        name: this.state.venueName,
        address: this.state.venueAddress,
        phone: this.state.venuePhone,
        url: this.state.venueUrl,
        photo: this.state.venuePhoto
      }
      this.addNewVenue(formPayLoad)
      this.handleClearForm()
  }

    // handleFormSubmit(event) {
    //   event.preventDefault();
    //   let venues = this.state.venues
    //   let formPayLoad = JSON.stringify({
    //     venue: {
    //       name: this.state.venueName,
    //       address: this.state.venueAddress,
    //       phone: this.state.venuePhone,
    //       url: this.state.venueUrl,
    //       photo: this.state.venuePhoto
    //     }
    //   })
    //   fetch('/api/v1/venues', {
    //     method: 'POST',
    //     credentials: 'same-origin',
    //     body: formPayLoad
    //   })
    //   .then(response => response.json())
    //   .then(venue => {
    //     let newVenue= this.state.venues.concat(formPayLoad)
    //     this.setState({ venues: newVenue })
    //   })
    //   .then(() => {
    //       this.handleClearForm()
    //   })
    // }

  componentDidMount() {
    fetch('/api/v1/venues')
    .then(response =>  response.json())
    .then(body => {
      this.setState({venues: [...this.state.venues, ...body] })
    })
  }

  handleNameChange(event) {
   this.setState({ venueName: event.target.value })
  }

  handleAddressChange(event) {
    this.setState({ venueAddress: event.target.value })
  }

  handlePhoneChange(event) {
    this.setState({ venuePhone: event.target.value })
  }

  handleUrlChange(event) {
    this.setState({ venueUrl: event.target.value })
  }

  handlePhotoChange(event) {
    this.setState({ venuePhoto: event.target.value })
  }

  handleClearForm(event) {
    this.setState({
      venueName: '',
      venueAddress: '',
      venuePhone: '',
      venueUrl: '',
      venuePhoto: ''
    })
  }




  // updateVenue(venue) {
  //   let venueIndex = this.state.venues.findIndex(x => x.id === venue.id)
  //   this.setState({
  //     venues: venueIndex
  //   })
  // } ##this isn't an event.target.id, is it?


//   deleteVenue(venue, url) {
//   fetch('/api/v1/venues/', {
//     method: 'delete',
//     credentials: 'same-origin',
//     body:
//   })
//   .then(response => response.json());
// }


  render() {
    let styles = {
      root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
      },
      gridList: {
        width: 550,
        height: 600,
        overflowY: 'auto',
      },
    };
    let venueComponent =
      this.state.venues.map((venue) => {
        return(
          <Link to={`/venues/${venue.id}`} key={venue.id}>
            <div>
              <GridTile>
                <VenueTile
                  key={venue.id}
                  id={venue.id}
                  photo={venue.photo}
                  name={venue.name}
                />
              </GridTile>
            </div>
          </Link>
        )
      })
    return (
      <div>
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
          <div style={styles.root}>
            <AppBar
             title=" S H I M M Y "
             iconClassNameRight="muidocs-icon-navigation-expand-more"
             style={{backgroundColor: '#FFC400'}}
            />

            <Paper zDepth={5} style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                justifyContent: 'space-around',
                                backgroundColor: 'none',
                              }}
            >
            <GridList
              cellHeight={180}
              style={styles.gridList}
            >
            {venueComponent}

            </GridList>
            <Divider />

            <VenueForm
              handleNameChange={this.handleNameChange}
              handleAddressChange={this.handleAddressChange}
              handlePhoneChange={this.handlePhoneChange}
              handleUrlChange={this.handleUrlChange}
              handlePhotoChange={this.handlePhotoChange}
              handleFormSubmit={this.handleFormSubmit}
              nameContent={this.state.venueName}
              addressContent={this.state.venueAddress}
              phoneContent={this.state.venuePhone}
              urlContent={this.state.venueUrl}
              photoContent={this.state.venuePhoto}
            />
            </Paper>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default VenuesIndexContainer;
