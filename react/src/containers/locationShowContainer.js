import React from 'react';
import Location from '../components/locations';

class LocationShowContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: {}
    }
  }

  componentDidMount() {
    fetch(`/api/v1/locations/${this.props.params.id}/`)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(body => {
      this.setState({
        locations: body
      })
    } )
    .catch(error => console.error(`Error in fetch: ${error.message}`));

  }

  render() {
    return(
      <div>
        <Location
          key={this.state.locations.id}
          id={this.state.locations.id}
          name={this.state.locations.name}
          people={this.state.locations.people}
          locale={this.state.locations.locale}
        />
      </div>
    );
  }
}

export default LocationShowContainer;
