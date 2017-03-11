import React, { Component } from 'react';
import moment from 'moment';
import { filter, map, forEach } from 'lodash';
import { nextConnect } from '../../store';
import { getAttendees } from '../../actions';

class TicketTrackerDetails extends Component {

  constructor(props) {
    super(props);
    this.state = { sales: [] };
  }

  componentWillMount() {
    this.props.getAttendees(this.props.id);
  }

  componentWillReceiveProps(nextProps) {
    const { attendees, profile } = nextProps;
    const sales = filter(attendees, (attendee) => attendee.affiliate === profile.user_token);
    this.setState({ sales });
  }

  totalSales() {
    let count = 0;
    forEach(this.state.sales, (sale) => {
      count = count + sale.cost.base_price.value / 2000;
      return count;
    });
    return count;
  }

  render() {
    const totalAmtSold = this.totalSales();
    const remaining = 15 - totalAmtSold;
    return (
      <div className="ticket_tracker_detalis">
        <div className="container">
          <h3>{this.props.name.text} Show -
            {moment(this.props.start.local).format('MMMM Do YYYY')}</h3>
          <table className="table">
            <thead className="thead-inverse">
              <tr>
                <th>BUYER</th>
                <th>AMOUNT</th>
                <th>TICKET SOLD</th>
                <th>EMAIL</th>
              </tr>
            </thead>
            <tbody>
              {this.state.sales.length !== 0 && map(this.state.sales, (sale) => (
                <tr>
                  <th>{sale.profile.name}</th>
                  <td>{sale.cost.base_price.display}</td>
                  <td>{sale.cost.base_price.value / 2000}</td>
                  <td>{sale.profile.email}</td>
                </tr>))}

              {this.state.sales.length === 0 &&
                <tr><td colSpan="4"><center>No sales yet</center></td></tr>}

            </tbody>
          </table>
          <hr />
          <div className="ticket_tracker_total_inner">
            <div className="ticket_tracker_total_inner_item">
              Total Tickets: 15
            </div>
            <div className="ticket_tracker_total_inner_item">
              Sold: {totalAmtSold}
            </div>
            <div className="ticket_tracker_total_inner_item">
              Remaining: {remaining < 0 ? 0 : remaining}
            </div>
          </div>
          <div className="tracker_buttons">
            <div className="container">
              <a href="" className="opentracker">
                BUYOUT TICKETS
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

TicketTrackerDetails.propTypes = {
  name: React.PropTypes.object,
  start: React.PropTypes.object,
  getAttendees: React.PropTypes.func,
  id: React.PropTypes.string,
};

function mapStateToProps(state) {
  return {
    attendees: state.attendees,
    profile: state.profile,
  };
}

export default nextConnect(mapStateToProps, { getAttendees })(TicketTrackerDetails);
