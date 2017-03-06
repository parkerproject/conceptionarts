import React, { Component } from 'react';
import moment from 'moment';
import Link from 'next/link';
import { getVenue } from '../../../actions';


class City extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false, name: '' };
  }

  componentDidMount() {
    getVenue(this.props.venue_id, (data) => {
      this.setState({ name: data.name });
    });
  }


  // toggle() {
  //   this.setState({ open: !this.state.open });
  // }


  render() {
    return (
      <div className="cities_buy_tickets_item index_cities clearfix">
        <div className="cities_buy_tickets_item_title">
          <Link
            href="/shows"
            as={`/shows/${this.props.id}/${this.props.name.text}`}
          >
            <a>{this.props.name.text}</a>
          </Link>
        </div>
        <div className="cities_buy_tickets_places">
          <div className="cities_buy_tickets_places_item">
            {moment(this.props.start.local).format('MMMM Do')} | {this.state.name}
          </div>
        </div>

      </div>
    );
  }
}

City.propTypes = {
  name: React.PropTypes.object,
  start: React.PropTypes.object,
  venue_id: React.PropTypes.string,
  id: React.PropTypes.string,
};

export default City;
