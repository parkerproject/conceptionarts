import React, { Component } from 'react';

const DropdownList = require('react-widgets/lib/DropdownList');

class Tracker extends Component {
  render() {
    return (
      <main className="main_block_page portfolio_page">
        <div className="ticket_tracker_page_block">
          <div className="container">
            View all tickets purchased under your account below. In order to buyout your remaining balance, please click our "Buyout Tickets" button
          </div>
        </div>
        <div className="ticket_tracker_total">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <DropdownList
                  data={this.props.events}
                  value="one"
                  onChange={() => alert('changed')}
                />
              </div>
            </div>


            <div className="ticket_tracker_total_inner">
              <div className="ticket_tracker_total_inner_item">
                Total Tickets: 15
              </div>
              <div className="ticket_tracker_total_inner_item">
                Sold: 0
              </div>
              <div className="ticket_tracker_total_inner_item">
                Remaining: 0
              </div>
            </div>
          </div>
        </div>
        <div className="tracker_buttons">
          <div className="container">
            <a href="" className="opentracker">
              BUYOUT TICKETS
            </a>
          </div>
        </div>
        <div className="ticket_tracker_detalis">
          <div className="container">
            <div className="ticket_tracker_detalis_head_items">
              <div className="ticket_tracker_detalis_head_item">
                BUYER
              </div>
              <div className="ticket_tracker_detalis_head_item">
                AMOUNT
              </div>
              <div className="ticket_tracker_detalis_head_item">
                TICKET SOLD
              </div>
              <div className="ticket_tracker_detalis_head_item">
                EMAIL
              </div>
              <div className="ticket_tracker_detalis_head_item">
                EVENT
              </div>
            </div>
          </div>
        </div>


      </main>
    );
  }
}

export default Tracker;
