import React, { Component } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import randtoken from 'rand-token';
import Dropzone from 'react-dropzone';

import Footer from '../components/Footer';
import { dataURItoBlob } from '../helpers';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      oldEnough: false,
      name: '',
      email: '',
      photo: null,
      artwork_1: null,
      artwork_2: null,
      artwork_3: null,
      terms: '',
      permission: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const keys = Object.keys(this.state);
    const data = { user_token: randtoken.generate(5) };
    const formData = new FormData();
    formData.append('user_token', randtoken.generate(5));

    console.log(this.state);

    // if (this.state.photo) {
    //   const filename = this.state.photo || `${randtoken.generate(20)}.jpg`;
    //   const blob = dataURItoBlob(this.state.photo);
    //   formData.append('photo', blob, filename);
    // }

    // if (this.state.changes) {
    //   forEach(keys, (key) => {
    //     if (this.state.changes[key] && this.state[key]) {
    //       data[key] = this.state[key];
    //     }
    //   });
    //   console.log(data);
    // }
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
                              onChange={evt => this.setState({ name: evt.target.value })}
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
                          <div className="wrap_label">
                            Upload your artwork (up to 3 pieces max)
                          </div>
                          <div className="wrap_input">
                            <input
                              type="url"
                              required
                              pattern="https?://.+"
                              placeholder="Your Website"
                            />
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
                            <input type="text" placeholder="Where did you hear about Conception?" />
                          </div>
                          <div className="wrap_checkbox">
                            <input
                              type="checkbox"
                              id="checkbox1"
                              value={this.state.terms}
                              onChange={(evt) => this.setState({ terms: evt.target.value })}
                            />
                            <label htmlFor="checkbox1">
                              I agree to the <a href="">terms</a> and <a href="">conditions</a>.
                            </label>
                          </div>
                          <div className="wrap_checkbox">
                            <input
                              type="checkbox"
                              id="checkbox2"
                              value={this.state.permission}
                              onChange={(evt) => this.setState({ permission: evt.target.value })}
                            />
                            <label htmlFor="checkbox1">
                              I authorize Conception to have permission to email me.
                            </label>
                          </div>
                          <div className="wrap_file"><button onClick={this.handleSubmit}>Submit</button></div>
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

export default Register;
