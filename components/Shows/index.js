import React, { Component } from 'react';
import moment from 'moment';
import axios from 'axios';
import Link from 'next/link';


export default class ShowCity extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '' };
  }
  async componentWillMount() {
    const res = await axios.get(`https://conceptionarts-api.herokuapp.com/api/venues/${this.props.venue_id}`);
    this.setState({ name: res.data.name });
  }


  render() {
    return (
      <div className="cities_buy_tickets_item clearfix">
        <div className="cities_buy_tickets_item_title">
          <Link
            href="/show"
            as={`/show/${this.props.id}/${this.props.name.text}`}
          >
            <a>{this.props.name.text}</a></Link>
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

ShowCity.propTypes = {
  name: React.PropTypes.object,
  start: React.PropTypes.object,
  venue_id: React.PropTypes.string,
  id: React.PropTypes.string,
};
