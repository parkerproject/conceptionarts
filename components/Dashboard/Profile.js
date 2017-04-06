import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import randtoken from 'rand-token';
import { forEach } from 'lodash';
import { updateProfile, updateProfileImage, hideFlash } from '../../actions';
import { dataURItoBlob } from '../../helpers';
import { nextConnect } from '../../store';

const PHOTO_URL = 'https://artistworks.s3-us-west-2.amazonaws.com/artists_images';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = { disabled: true, indicator: 'update profile' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
  }

  componentDidMount() {
    /* eslint-disable */
    this.setState({ ...this.props });
    /* eslint-enable */
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ ...nextProps });
    if (nextProps.flash.show) {
      this.props.hideFlash();
      this.setState({ indicator: 'update profile' });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const keys = Object.keys(this.state);
    const data = { user_token: this.state.user_token };
    const formData = new FormData();

    if (this.state.file) {
      const filename = this.state.photo || `${randtoken.generate(20)}.jpg`;
      const blob = dataURItoBlob(this.state.file);
      formData.append('photo', blob, filename);
      formData.append('user_token', this.state.user_token);
      this.props.updateProfileImage(formData);
    }

    if (this.state.changes) {
      forEach(keys, (key) => {
        if (this.state.changes[key] && this.state[key]) {
          data[key] = this.state[key];
        }
      });
      this.props.updateProfile(data);
    }

    this.setState({ disabled: true, indicator: 'updating...' });
  }


  handleImageChange(filesToUpload) {
    const reader = new FileReader();
    const file = filesToUpload[0];

    if (file.size > (1024 * 1024 * 5)) {
      alert('Holly molly! That photo is too large');

      return false;
    }

    reader.onloadend = () => {
      this.setState({
        file: reader.result,
        disabled: false,
      });
    };

    reader.readAsDataURL(file);

    return true;
  }

  handleTextChange(val, evt) {
    const changes = {};
    const newStates = {};
    changes[val] = true; // hashing what has changed
    newStates[val] = evt.target.value;
    newStates.disabled = false;
    newStates.changes = { ...this.state.changes, ...changes };
    this.setState(newStates);
  }


  render() {
    const { photo,
      full_name: fullName,
      genre,
      email,
      url,
      story,
      disabled,
      indicator } = this.state;


    return (
      <main className="main_block_page portfolio_page">
        {this.props.flash.show &&
          <div className="alert alert-success" role="alert">
            <strong>Well done!</strong> You have successfully updated your profile.
          </div>}
        <div className="container">
          <div className="row">
            <div className="artist_photo col-xl-4 col-lg-6 col-sm-6 col-xs-12">
              <div className="artist_photo_inner">
                <div className="artist_photo_inner_displayed">
                  {photo && !this.state.file && <img src={`${PHOTO_URL}/${photo}?${+new Date()}`} alt="" />}
                  {this.state.file && <img src={this.state.file} alt="" />}
                </div>
              </div>

              <Dropzone
                className="image-upload"
                multiple={false}
                onDrop={filesToUpload => this.handleImageChange(filesToUpload)}
              >
                <button className="change-upload">
                  Change Photo
                </button>
                {/* <span className="ion-upload" style={innerStyles.icon}></span> */}
              </Dropzone>
            </div>
            <div className="artist_detalis col-xl-4 col-lg-6 col-sm-6 col-xs-12">
              <form onSubmit={this.handleSubmit}>
                <div className="artist_detalis_inner">
                  <div className="wrap_backend_inputs">
                    <div className="wrap_backend_input">
                      <input
                        type="text"
                        placeholder="Sarah Lee"
                        value={fullName || ''}
                        onChange={evt => this.handleTextChange('full_name', evt)}
                      />
                    </div>
                    <div className="wrap_backend_input">
                      <input
                        type="text"
                        placeholder="Artist"
                        value={genre || ''}
                        onChange={evt => this.handleTextChange('genre', evt)}
                      />
                    </div>
                    <div className="wrap_backend_input">
                      <input
                        type="text"
                        placeholder="sarah@gmail.com" value={email || ''}
                        onChange={evt => this.handleTextChange('email', evt)}
                      />
                    </div>
                    <div className="wrap_backend_input">
                      <input
                        type="text"
                        placeholder="sarahlee.com"
                        value={url || ''}
                        onChange={evt => this.handleTextChange('url', evt)}
                      />
                    </div>
                    <div className="wrap_backend_textarea">
                      <div className="wrap_backend_textarea_label">
                        Bio
                      </div>
                      <textarea
                        placeholder="Some text"
                        maxLength="150"
                        className="textarea_change"
                        value={story || ''}
                        onChange={evt => this.handleTextChange('story', evt)}
                      />
                    </div>
                    <div className="wrap_backend_button">
                      <button
                        type="submit"
                        className={`btn ${disabled && 'disabled'}`}
                      >
                        {indicator}</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

Profile.propTypes = {
  updateProfile: React.PropTypes.func,
  updateProfileImage: React.PropTypes.func,
  hideFlash: React.PropTypes.func,
  flash: React.PropTypes.object,
};

function mapStateToProps(state) {
  return {
    flash: state.flash,
  };
}

export default nextConnect(mapStateToProps,
  { updateProfile, updateProfileImage, hideFlash })(Profile);
