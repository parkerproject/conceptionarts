import React, { Component } from 'react';
import { map, indexOf } from 'lodash';
import { nextConnect } from '../../store';
import { selectEvent } from '../../actions';


class Events extends Component {

  handleSelect(e, text, eventId, userToken) {
    e.preventDefault();
    this.props.selectEvent(text, eventId, userToken);
  }

  render() {
    return (
      <main className="main_block_page portfolio_page">
        <div className="container">
          <div className="heading_block">
            <div className="row">
              <div className="page_block_title col-md-12" style={{ fontSize: '25px' }}>
                Upcoming shows and the ones you are currently participating in:
              </div>
            </div>
          </div>

          <div className="portfolio_items clearfix">
            <div className="row row-eq-height">

              {this.props.events && map(this.props.events, (event) => {
                const select = indexOf(this.props.profile.events, Number(event.id)) !== -1 ?
                'unselect' : 'select';

                return (
                  <div
                    className="portfolio_item city_item col-lg-3 col-md-6 col-xs-12 selected_item"
                    key={event.id}
                  >
                    <div className="portfolio_item_inner">
                      <div className="portfolio_item_content">
                        <div
                          className="portfolio_item_inner_image"
                          style={{ backgroundImage: `url(${event.logo.url})` }}
                        >
                          <div className="portfolio_item_inner_image_title">
                            {event.name.text}
                          </div>
                          {indexOf(this.props.profile.events, Number(event.id)) !== -1 &&
                            <span className="ion-ios-checkmark check_image" />
                          }

                        </div>
                        <div className="portfolio_item_inner_link city_link">
                          <a
                            href=""
                            onClick={(evt) => this.handleSelect(
                              evt, select, event.id, this.props.profile.user_token
                            )}
                          >{select}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

            </div>
          </div>
        </div>
      </main>
    );
  }
}

Events.propTypes = {
  profile: React.PropTypes.object,
  events: React.PropTypes.object,
  unSelectEvent: React.PropTypes.func,
  selectEvent: React.PropTypes.func,
};

function mapStateToProps(state) {
  return {
    events: state.events,
    profile: state.profile,
  };
}

export default nextConnect(mapStateToProps, { selectEvent })(Events);
