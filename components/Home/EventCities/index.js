import React from 'react';
import { map } from 'lodash';
import City from './city';


function EventCities(props) {
  return (
    <div className="cities_buy_tickets">
      <div className="container">
        {/* <div className="small_title">
          Click To Expand
        </div> */}
        {map(props, (event) => (<City {...event} key={event.id} />))}
      </div>
    </div>
  );
}


export default EventCities;
