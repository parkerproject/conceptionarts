import React, { Component } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Router from 'next/router';
import { authUser } from '../actions';
import { nextConnect } from '../store';
import Footer from '../components/Footer';
import AuthService from '../components/Auth/auth-service';

const auth = new AuthService();

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      newPassword: '',
      newPassword2: '',
      resetPassword: false,
      error: false,
      errMessage: '',
      show: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePasswordSubmit = this.handlePasswordSubmit.bind(this);
  }

  componentDidMount() {
    // if (auth.loggedIn()) {
    //   Router.push('/dashboard');
    // }
    // auth.logout();
  }

  async handleSubmit(e) {
    const { email, password } = this.state;
    e.preventDefault();

    this.setState({ show: true });

    if (email === '' || password === '') {
      return this.setState({ error: true, errMessage: 'All fields required.' });
    }

    const res = await auth.login(email, password);

    if (res === 0) {
      return this.setState({ resetPassword: true, errMessage: 'Password mismatch.' });
    }

    if (res.error) {
      return this.setState({ error: true, errMessage: res.message });
    }
    this.props.authUser(true);
    return Router.push('/dashboard');
  }

  async handlePasswordSubmit(e) {
    const { email, newPassword, newPassword2 } = this.state;
    e.preventDefault();

    if ((newPassword !== newPassword2) || newPassword === '') {
      this.setState({ error: true });
      return false;
    }

    this.setState({ error: false });
    const response = await auth.resetPassword(email, newPassword);
    if (response) {
      this.props.authUser(true);
      return Router.push('/dashboard');
    }
    return false;
  }


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
                    {this.state.show && <div className="processing">Processing...</div>}
                    <div className="login_form_inner_inner_title">
                      {!this.state.resetPassword ? 'Login' : 'Change Password'}
                    </div>
                    {!this.state.resetPassword && <div className="login_form_inner_inner_register">
                      Not a member of this community? <a href="">Register Here</a>
                    </div>}
                    <div className="login_form_inner_inner_inputs">
                      <form
                        onSubmit={!this.state.resetPassword ?
                        this.handleSubmit : this.handlePasswordSubmit}
                      >
                        <div className="wrap_inputs row">
                          <div className="col-md-8 col-sm-12">
                            {!this.state.resetPassword && <div>
                              <div className="wrap_input">
                                <input
                                  type="text"
                                  placeholder="Email"
                                  value={this.state.email}
                                  onChange={evt => this.setState({ email: evt.target.value })}
                                />
                              </div>
                              <div className="wrap_input">
                                <input
                                  type="password"
                                  placeholder="Password"
                                  value={this.state.password}
                                  onChange={evt => this.setState({ password: evt.target.value })}
                                />
                              </div>
                            </div>}

                            {this.state.resetPassword &&
                              <div>
                                <div className="wrap_input">
                                  <input
                                    type="password"
                                    placeholder="New Password"
                                    value={this.state.newPassword}
                                    onChange={evt => this.setState({
                                      newPassword: evt.target.value,
                                    })}
                                  />
                                </div>
                                <div className="wrap_input">
                                  <input
                                    type="password"
                                    placeholder="Confirm Password"
                                    value={this.state.newPassword2}
                                    onChange={evt => this.setState({
                                      newPassword2: evt.target.value,
                                    })}
                                  />
                                </div>
                              </div>
                            }

                          </div>
                          <div className="wrap_button col-md-4 col-sm-12">
                            <input
                              type="submit"
                              value={!this.state.resetPassword ? 'Login' : 'Reset'}
                            />
                          </div>
                        </div>
                      </form>
                    </div>
                    {!this.state.resetPassword && <div className="forgot_and_password">
                      <a href="">Forgot password?</a>
                      <a href="">Support</a>
                    </div>}
                    {this.state.error && <div className="alert alert-danger">
                      <strong>Error!</strong> {this.state.errMessage}
                    </div>}

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

Login.propTypes = {
  authUser: React.PropTypes.func,
};

export default nextConnect(null, { authUser })(Login);
