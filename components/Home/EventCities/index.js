import React from 'react';
import { map } from 'lodash';


function EventCities(props) {
  const events = map(props, (event) => (
    <div className="cities_buy_tickets_item index_cities clearfix" key={event.id}>
      <div className="cities_buy_tickets_item_title">
        {event.name.text}
      </div>
    </div>
    ));
  return (
    <div className="cities_buy_tickets">
      <div className="container">
        <div className="small_title">
          Click To Expand
        </div>
        {events}

        {/* <div className="cities_buy_tickets_item index_cities clearfix">
          <div className="cities_buy_tickets_item_title">
            Pittsburgh
          </div>
          <div className="cities_buy_tickets_places">
            <div className="cities_buy_tickets_places_item">
              October 10 | Smith Art Gallery
            </div>
            <div className="cities_buy_tickets_places_item">
              November 22 | Tomlin View Center
            </div>
          </div>
        </div> */}

        <div className="cities_buy_tickets_item index_cities clearfix">
          <div className="cities_buy_tickets_item_title">
            New York City
          </div>
        </div>
      </div>
    </div>
  );
}


export default EventCities;
