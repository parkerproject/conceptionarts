import React, { Component } from 'react';
import Link from 'next/link';
import Head from 'next/head';

import Footer from '../components/Footer';

class Register extends Component {
  render() {
    return (
      <div className="login_body">
        <Head>
          <title>Submit your work - Conception Arts</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
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
                            <input type="text" placeholder="Name" />
                          </div>
                          <div className="wrap_input">
                            <input type="text" placeholder="Email" />
                          </div>
                          <div className="wrap_file">
                            <div className="row">
                              <div className="col-md-4 col-sm-12">
                                <div className="wrap_photo">
                                  Photo
                                </div>
                              </div>
                              <div className="col-md-8 col-sm-12">
                                <div className="wrap_file_inner">
                                  <input type="file" id="order_file" />
                                  <button>Upload Photo</button>
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
                                <button className="check_button active">Yes</button>
                              </div>
                              <div className="wrap_check_button col-md-6 col-sm-12">
                                <button className="check_button">No</button>
                              </div>
                            </div>
                          </div>
                          <div className="wrap_label">
                            Upload your artwork (up to 3 pieces max)
                          </div>
                          <div className="wrap_input">
                            <input type="text" placeholder="URL of artwork (must begin with http)" />
                          </div>
                          <div className="wrap_file">
                            <div className="row">
                              <div className="wrap_label_inner_form col-md-4 col-sm-12">
                                <div className="wrap_label">
                                  Artwork One:
                                </div>
                              </div>
                              <div className="col-md-8 col-sm-12">
                                <div className="wrap_file_inner">
                                  <input type="file" />
                                  <button>Upload Photo</button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="wrap_file">
                            <div className="row">
                              <div className="wrap_label_inner_form col-md-4 col-sm-12">
                                <div className="wrap_label">
                                  Artwork Two:
                                </div>
                              </div>
                              <div className="col-md-8 col-sm-12">
                                <div className="wrap_file_inner">
                                  <input type="file" />
                                  <button>Upload Photo</button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="wrap_file">
                            <div className="row">
                              <div className="wrap_label_inner_form col-md-4 col-sm-12">
                                <div className="wrap_label">
                                  Artwork Three:
                                </div>
                              </div>
                              <div className="col-md-8 col-sm-12">
                                <div className="wrap_file_inner">
                                  <input type="file" />
                                  <button>Upload Photo</button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="wrap_input">
                            <input type="text" placeholder="Where did you hear about Conception?" />
                          </div>
                          <div className="wrap_checkbox">
                            <input type="checkbox" id="checkbox1" checked="checked" value="1" />
                            <label htmlFor="checkbox1">
                              I agree to the <a href="">terms</a> and <a href="">conditions</a>.
                            </label>
                          </div>
                          <div className="wrap_checkbox">
                            <input type="checkbox" id="checkbox1" checked="checked" value="1" />
                            <label htmlFor="checkbox1">
                              I authorize Conception to have permission to email me.
                            </label>
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

export default Register;
