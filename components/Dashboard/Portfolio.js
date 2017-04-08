import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import randtoken from 'rand-token';
import { map } from 'lodash';
import { nextConnect } from '../../store';
import { sendGalleryFile, hideFlash } from '../../actions';
import { dataURItoBlob } from '../../helpers';


function PorfolioItem(props) {
  const PHOTO_URL = 'https://artistworks.s3-us-west-2.amazonaws.com/artists_images';
  return (
    <div className="portfolio_item col-lg-3 col-md-6 col-xs-12">
      <div className="portfolio_item_inner">
        <div className="portfolio_item_content">
          <div className="portfolio_item_inner_image">
            <img src={`${PHOTO_URL}/${props.art}`} alt="" />
          </div>
          {/* <div className="portfolio_item_inner_link">
            <a href="">
              view
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
}

class Portfolio extends Component {

  constructor() {
    super();
    this.state = { files: [], uploadTxt: 'Upload Photo' };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ ...nextProps });
    if (nextProps.flash.show) {
      this.props.hideFlash();
      this.setState({ uploadTxt: 'Upload Photo' });
    }
  }

  handleImageChange(files) {
    if (files[0].size > (1024 * 1024 * 5)) {
      alert('Holly molly! Image is too large');
      return false;
    }

    const formData = new FormData();
    formData.append('user_token', this.props.profile.user_token);

    const reader = new FileReader();
    const filename = `${randtoken.generate(20)}.jpg`;
    reader.readAsDataURL(files[0]);

    reader.onloadend = () => {
      this.setState({ uploadTxt: 'Uploading photo...' });
      const blob = dataURItoBlob(reader.result);
      formData.append('file', blob, filename);
      this.props.sendGalleryFile(formData);
    };
    return true;
  }


  render() {
    /* eslint-disable  */
    const { artwork_1, artwork_2, artwork_3, full_name } = this.props;
    return (
      <main className="main_block_page portfolio_page">
        {this.props.flash.show &&
          <div className="alert alert-success" role="alert">
            <strong>Success!</strong> Photo has been uploaded.
          </div>}
        <div className="container">
          <div className="heading_block">
            <div className="row">
              <div className="page_block_title col-md-8 col-sm-12">
                {full_name}’s Portfolio
              </div>
              <div className="logout col-md-4 col-sm-12">
                <Dropzone
                  className="image-upload"
                  multiple={false}
                  onDrop={filesToUpload => this.handleImageChange(filesToUpload)}
                >
                  <button className="change-upload" style={{ fontWeight: 'normal'}}>
                    {this.state.uploadTxt}
                  </button>
                  {/* <span className="ion-upload" style={innerStyles.icon}></span> */}
                </Dropzone>
                {/* <a href="">
                  Upload Photo
                </a> */}
              </div>
            </div>
          </div>

          <div className="portfolio_items clearfix">
            <div className="row row-eq-height">


              {artwork_1 && <PorfolioItem art={artwork_1} />}
              {artwork_2 && <PorfolioItem art={artwork_2} />}
              {artwork_3 && <PorfolioItem art={artwork_3} />}

              {this.props.profile.gallery && map(this.props.profile.gallery, (file, key)=> <PorfolioItem art={file} key={key} />)}

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
  sendGalleryFile: React.PropTypes.func,
  hideFlash: React.PropTypes.func,
  profile: React.PropTypes.object,
};

PorfolioItem.propTypes = {
  art: React.PropTypes.string,
};

function mapStateToProps(state) {
  return {
    profile: state.profile,
    flash: state.flash,
  };
}
export default nextConnect(mapStateToProps, { sendGalleryFile, hideFlash })(Portfolio);
