import React, { Component } from 'react';


function PorfolioItem(props) {
  const PHOTO_URL = 'https://artistworks.s3-us-west-2.amazonaws.com/artists_images';
  return (
    <div className="portfolio_item col-lg-3 col-md-6 col-xs-12">
      <div className="portfolio_item_inner">
        <div className="portfolio_item_content">
          <div className="portfolio_item_inner_image">
            <img src={`${PHOTO_URL}/${props.art}`} alt="" />
          </div>
          <div className="portfolio_item_inner_link">
            <a href="">
              view
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

class Portfolio extends Component {

  render() {
    /* eslint-disable  */
    const { artwork_1, artwork_2, artwork_3, full_name } = this.props;
    console.log(this.props);
    return (
      <main className="main_block_page portfolio_page">
        <div className="container">
          <div className="heading_block">
            <div className="row">
              <div className="page_block_title col-md-8 col-sm-12">
                {full_name}’s Portfolio
              </div>
              <div className="logout col-md-4 col-sm-12">
                <a href="">
                  Upload Photo
                </a>
              </div>
            </div>
          </div>

          <div className="portfolio_items clearfix">
            <div className="row row-eq-height">


              {artwork_1 && <PorfolioItem art={artwork_1} />}
              {artwork_2 && <PorfolioItem art={artwork_2} />}
              {artwork_3 && <PorfolioItem art={artwork_3} />}

              {/* eslint-enable  */}


            </div>
          </div>
        </div>
      </main>
    );
  }
}

Portfolio.propTypes = {
  artwork_3: React.PropTypes.string,
  artwork_2: React.PropTypes.string,
  artwork_1: React.PropTypes.string,
};

PorfolioItem.propTypes = {
  art: React.PropTypes.string,
};
export default Portfolio;
