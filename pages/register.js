import React, { Component } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import randtoken from 'rand-token';
import Dropzone from 'react-dropzone';

import Footer from '../components/Footer';
import { nextConnect } from '../store';
import { dataURItoBlob } from '../helpers';
import { register, hideFlash } from '../actions';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      oldEnough: '',
      full_name: '',
      email: '',
      photo: null,
      artwork_1: null,
      artwork_2: null,
      artwork_3: null,
      terms: false,
      referral: '',
      url: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.flash.show) {
      this.props.hideFlash();
      this.setState({ processing: false });
    }
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({ processing: true });

    const { email, terms, name } = this.state;
    if (email === '' || !terms || name === '') {
      return false;
    }

    const keys = Object.keys(this.state);
    const formData = new FormData();
    formData.append('user_token', randtoken.generate(5));

    const files = {
      artwork_3: true,
      artwork_2: true,
      artwork_1: true,
      photo: true,
    };

    keys.forEach((key) => {
      if (files[key]) {
        const blob = dataURItoBlob(this.state[key]);
        const filename = `${randtoken.generate(20)}.jpg`;
        formData.append(key, blob, filename);
      } else {
        formData.append(key, this.state[key]);
      }
    });

    this.props.register(formData);

    return true;
  }


  handleImageChange(filesToUpload, name) {
    const reader = new FileReader();
    const file = filesToUpload[0];

    if (file.size > (1024 * 1024 * 5)) {
      alert('Holly molly! That photo is too large');

      return false;
    }
    const state = {};


    reader.onloadend = () => {
      state[name] = reader.result;
      this.setState(state);
    };

    reader.readAsDataURL(file);

    return true;
  }

  render() {
    return (
      <div className="login_body">
        <Head>
          <title>Submit your work - Conception Arts</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link type="text/css" rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" />
        </Head>
        <header className="page_header login_header">
          <div className="container">
            <div className="row">
              <div className="logo col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <Link href="/index"><a>
                  <img src="/static/img/logo_white.png" alt="" />
                </a></Link>
              </div>
            </div>
          </div>
        </header>

        <main className="main_block_page">
          <div className="login_form">
            <div className="container">
              <div className="row flex-items-xs-center">
                <div className="login_form_inner col-xl-9 col-lg-10 col-md-12 col-sm-12 col-xs-12">
                  <div className="login_form_inner_inner">
                    {this.props.flash.show &&
                      <div className="alert alert-success" role="alert">
                        <strong>Registration successfully!</strong>
                        <p>Check your email for your password.</p>
                      </div>}
                    <div className="login_form_inner_inner_title">
                      Artist Registration
                    </div>
                    <div className="login_form_inner_inner_register">
                      Already a member of our team? <a href="">Login.</a>
                    </div>
                    <div className="login_form_inner_inner_inputs">
                      <div className="wrap_inputs row">
                        <div className="col-md-12">
                          <div className="wrap_input">
                            <input
                              type="text"
                              placeholder="Name"
                              value={this.state.name}
                              onChange={evt => this.setState({ full_name: evt.target.value })}
                            />
                          </div>
                          <div className="wrap_input">
                            <input
                              type="text"
                              placeholder="Email"
                              value={this.state.email}
                              onChange={evt => this.setState({ email: evt.target.value })}
                            />
                          </div>
                          <div className="wrap_file">
                            <div className="row">
                              <div className="col-md-4 col-sm-12">
                                <div className="wrap_photo">
                                  {this.state.photo && <img src={this.state.photo} alt="" />}
                                  Photo
                                </div>
                              </div>
                              <div className="col-md-8 col-sm-12">
                                <div className="wrap_file_inner">
                                  <Dropzone
                                    className="image-upload"
                                    multiple={false}
                                    onDrop={filesToUpload =>
                                      this.handleImageChange(filesToUpload, 'photo')}
                                  >
                                    <button>Upload Photo</button>
                                  </Dropzone>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="wrap_label">
                            Are you 21 years or older?
                          </div>
                          <div className="wrap_check_buttons">
                            <div className="row">
                              <div className="wrap_check_button col-md-6 col-sm-12">
                                <button
                                  className={`check_button ${this.state.oldEnough && 'active'}`}
                                  onClick={() => this.setState({ oldEnough: true })}
                                >Yes</button>
                              </div>
                              <div className="wrap_check_button col-md-6 col-sm-12">
                                <button
                                  className={`check_button ${!this.state.oldEnough && 'active'}`}
                                  onClick={() => this.setState({ oldEnough: false })}
                                >No</button>
                              </div>
                            </div>
                          </div>
                          <div className="wrap_input">
                            <input
                              type="url"
                              required
                              pattern="https?://.+"
                              placeholder="Your Website"
                              value={this.state.url}
                              onChange={(evt) => this.setState({ url: evt.target.value })}
                            />
                          </div>
                          <div className="wrap_label">
                            Upload your artwork (up to 3 pieces max)
                          </div>
                          <div className="wrap_file">
                            <div className="row">
                              <div className="wrap_label_inner_form col-md-4 col-sm-12">
                                <div className="wrap_label">
                                  {this.state.artwork_1 &&
                                    <i className="icon-confirm ion-ios-checkmark" />
                                  }Artwork One
                                </div>
                              </div>
                              <div className="col-md-8 col-sm-12">
                                <div className="wrap_file_inner">
                                  <Dropzone
                                    className="image-upload"
                                    multiple={false}
                                    onDrop={filesToUpload =>
                                      this.handleImageChange(filesToUpload, 'artwork_1')}
                                  >
                                    <button>Upload Photo</button>
                                  </Dropzone>
                                </div>

                              </div>
                            </div>
                          </div>
                          <div className="wrap_file">
                            <div className="row">
                              <div className="wrap_label_inner_form col-md-4 col-sm-12">
                                <div className="wrap_label">
                                  {this.state.artwork_2 &&
                                    <i className="icon-confirm ion-ios-checkmark" />
                                  }Artwork Two
                                </div>
                              </div>
                              <div className="col-md-8 col-sm-12">
                                <div className="wrap_file_inner">
                                  <Dropzone
                                    className="image-upload"
                                    multiple={false}
                                    onDrop={filesToUpload =>
                                      this.handleImageChange(filesToUpload, 'artwork_2')}
                                  >
                                    <button>Upload Photo</button>
                                  </Dropzone>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="wrap_file">
                            <div className="row">
                              <div className="wrap_label_inner_form col-md-4 col-sm-12">
                                <div className="wrap_label">
                                  {this.state.artwork_3 &&
                                    <i className="icon-confirm ion-ios-checkmark" />
                                  }Artwork Three
                                </div>
                              </div>
                              <div className="col-md-8 col-sm-12">
                                <div className="wrap_file_inner">
                                  <Dropzone
                                    className="image-upload"
                                    multiple={false}
                                    onDrop={filesToUpload =>
                                      this.handleImageChange(filesToUpload, 'artwork_3')}
                                  >
                                    <button>Upload Photo</button>
                                  </Dropzone>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="wrap_input">
                            <input
                              type="text"
                              placeholder="Where did you hear about Conception?"
                              value={this.state.referral}
                              onChange={(evt) => this.setState({ referral: evt.target.value })}
                            />
                          </div>
                          <div className="wrap_checkbox">
                            <input
                              type="checkbox"
                              id="checkbox1"
                              checked={this.state.terms}
                              onChange={(evt) => this.setState({ terms: evt.target.checked })}
                            />
                            <label htmlFor="checkbox1">
                              I agree to the <a href="">terms</a> and <a href="">conditions</a>.
                            </label>
                          </div>
                          <div className="wrap_file">
                            <button
                              onClick={this.handleSubmit}
                            >{this.state.processing ? 'Submitting...' : 'Submit'}</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

Register.propTypes = {
  hideFlash: React.PropTypes.func,
  register: React.PropTypes.func,
  flash: React.PropTypes.object,
};

function mapStateToProps(state) {
  return {
    flash: state.flash,
  };
}

export default nextConnect(mapStateToProps, { register, hideFlash })(Register);
