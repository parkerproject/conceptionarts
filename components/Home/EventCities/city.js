import React, { Component } from 'react';
import moment from 'moment';
import { getVenue } from '../../../actions';


class City extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  toggle() {
    this.setState({ open: !this.state.open });
  }

  render() {
    console.log(getVenue(this.props.venue_id));
    return (
      <div className="cities_buy_tickets_item index_cities clearfix">
        <div className="cities_buy_tickets_item_title">
          <span onClick={() => this.toggle()}>{this.props.name.text}</span>
        </div>
        {this.state.open &&
          <div className="cities_buy_tickets_places">
            <div className="cities_buy_tickets_places_item">
              {moment(this.props.start.local).format('MMMM Do')} |
            </div>

          </div>
        }

      </div>
    );
  }
}

City.propTypes = {
  name: React.PropTypes.object,
  start: React.PropTypes.object,
  venue_id: React.PropTypes.string,
};

export default City;
