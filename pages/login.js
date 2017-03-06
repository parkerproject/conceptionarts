import React, { Component } from 'react';
import Link from 'next/link';
import Head from 'next/head';

import Footer from '../components/Footer';

class Login extends Component {
  render() {
    return (
      <div className="login_body">
        <Head>
          <title>Artist Login - Conception Arts</title>
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
                      Login
                    </div>
                    <div className="login_form_inner_inner_register">
                      Not a member of this community? <a href="">Register Here</a>
                    </div>
                    <div className="login_form_inner_inner_inputs">
                      <div className="wrap_inputs row">
                        <div className="col-md-8 col-sm-12">
                          <div className="wrap_input">
                            <input type="text" placeholder="Email" />
                          </div>
                          <div className="wrap_input">
                            <input type="password" placeholder="Password" />
                          </div>
                        </div>
                        <div className="wrap_button col-md-4 col-sm-12">
                          <input type="submit" value="Login" />
                        </div>
                      </div>
                    </div>
                    <div className="forgot_and_password">
                      <a href="">Forgot password?</a>
                      <a href="">Support</a>
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

export default Login;
