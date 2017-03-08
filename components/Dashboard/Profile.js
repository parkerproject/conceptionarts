import React, { Component } from 'react';
import Dropzone from 'react-dropzone';

const PHOTO_URL = 'https://res.cloudinary.com/conceptionarts/image/fetch/w_318,h_250,c_fill/https://artistworks.s3-us-west-2.amazonaws.com/artists_images';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ ...nextProps });
  }

  handleSubmit(event) {
    event.preventDefault();
  }


  handleImageChange(filesToUpload) {
    const reader = new FileReader();
    const file = filesToUpload[0];

    reader.onloadend = () => {
      console.log(reader.result);
      this.setState({
        file: reader.result,
        preview: 'show',
      });
    };

    reader.readAsDataURL(file);
  }


  render() {
    const { photo, full_name: fullName, genre, email, url, story, file } = this.state;
    return (
      <main className="main_block_page portfolio_page">
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <div className="row">

              <div className="artist_photo col-xl-4 col-lg-6 col-sm-6 col-xs-12">
                <div className="artist_photo_inner">
                  <div className="artist_photo_inner_displayed">
                    {photo && !file && <img src={`${PHOTO_URL}/${photo}`} alt="" />}
                    {file && <img src={file} alt="" />}

                  </div>
                </div>

                <Dropzone
                  className="image-upload"
                  onDrop={filesToUpload => this.handleImageChange(filesToUpload)}
                >
                  <button className="change-upload">
                    Change Photo
                  </button>
                  {/* <span className="ion-upload" style={innerStyles.icon}></span> */}
                </Dropzone>
              </div>
              <div className="artist_detalis col-xl-4 col-lg-6 col-sm-6 col-xs-12">
                <div className="artist_detalis_inner">
                  <div className="wrap_backend_inputs">
                    <div className="wrap_backend_input">
                      <input
                        type="text"
                        placeholder="Beca Smith"
                        value={fullName || ''}
                        onChange={evt => this.setState({ full_name: evt.target.value })}
                      />
                    </div>
                    <div className="wrap_backend_input">
                      <input
                        type="text"
                        placeholder="Artist"
                        value={genre || ''}
                        onChange={evt => this.setState({ genre: evt.target.value })}
                      />
                    </div>
                    <div className="wrap_backend_input">
                      <input type="text" placeholder="Beca@gmail.com" value={email || ''} />
                    </div>
                    <div className="wrap_backend_input">
                      <input
                        type="text"
                        placeholder="Link"
                        value={url || ''}
                        onChange={evt => this.setState({ url: evt.target.value })}
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
                        onChange={evt => this.setState({ story: evt.target.value })}
                      />
                    </div>
                    <div className="wrap_backend_button">
                      <input type="submit" value="Update Profile" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </main>
    );
  }
}

export default Profile;
