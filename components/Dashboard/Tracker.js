import React, { Component } from 'react';
import { indexOf, filter, map } from 'lodash';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import moment from 'moment';
import TicketTrackerDetails from './Ticket-tracker-details';

class Tracker extends Component {
  render() {
    const userEvents = filter(this.props.data, (item) => {
      const index = indexOf(this.props.events, Number(item.id));
      return index !== -1;
    });


    return (
      <main className="main_block_page portfolio_page">
        <div className="ticket_tracker_page_block">
          <div className="container">
            View all tickets purchased under your account below.
            In order to buyout your remaining balance, please click our "Buyout Tickets" button
          </div>
        </div>
        <div className="ticket_tracker_total">
          <div className="container">
            <div className="row">
              <div className="col-md-9">
                <Tabs selectedIndex={0}>
                  <TabList>
                    {map(userEvents, (event) => <Tab key={event.id}>{event.name.text}<br />
                      <small>{moment(event.start.local).format('MMMM Do YYYY')}</small></Tab>)}
                  </TabList>
                  {map(userEvents, (event) =>
                    <TabPanel key={event.id}><TicketTrackerDetails {...event} /></TabPanel>)}
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

Tracker.propTypes = {
  events: React.PropTypes.array,
  data: React.PropTypes.object,
};

export default Tracker;
