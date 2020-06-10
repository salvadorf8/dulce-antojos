import './mainview.css';

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBIcon, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBMask, MDBRow, MDBCol, MDBBtn, MDBView, MDBContainer, MDBFormInline, MDBAnimation } from 'mdbreact';
import Gallery from 'react-photo-gallery';

import Footer from './FooterPage';
import Navbar from './NavigationBar';

class App extends React.Component {
    state = {
        collapsed: false,
        images: [
            { id: '1', description: null, src: require(`../assets/img/web/20200428_132720.jpg`), width: 3, height: 2 },
            { id: '2', description: null, src: require(`../assets/img/web/20200429_160625.jpg`), width: 3, height: 4 },
            { id: '3', description: null, src: require(`../assets/img/web/20200506_192118.jpg`), width: 3, height: 4 },
            { id: '4', description: null, src: require(`../assets/img/web/20200523_111440.jpg`), width: 3, height: 2 },
            { id: '5', description: null, src: require(`../assets/img/web/20200523_135756.jpg`), width: 3, height: 3 },
            { id: '7', description: null, src: require(`../assets/img/web/20200530_150658.jpg`), width: 3, height: 2 },
            { id: '9', description: null, src: require(`../assets/img/web/20200530_165941.jpg`), width: 3, height: 3 },
            { id: '9', description: null, src: require(`../assets/img/web/20200520_143415.jpg`), width: 3, height: 4 },
            { id: '9', description: null, src: require(`../assets/img/web/20200516_112358.jpg`), width: 3, height: 4 }
        ]
    };

    handleTogglerClick = () => {
        this.setState({
            collapsed: !this.state.collapsed
        });
    };

    render() {
        const overlay = <div id='sidenav-overlay' style={{ backgroundColor: 'transparent' }} onClick={this.handleTogglerClick} />;
        return (
            <div id='apppage'>
                <Router>
                    <div>
                        <MDBNavbar dark expand='md' fixed='top' scrolling transparent>
                            <MDBContainer>
                                <MDBNavbarBrand>
                                    <strong className='white-text'>Dulce Antojos</strong>
                                </MDBNavbarBrand>
                                <MDBNavbarToggler onClick={this.handleTogglerClick} />
                                <MDBCollapse isOpen={this.state.collapsed} navbar>
                                    <MDBNavbarNav right>
                                        <MDBNavItem>
                                            <MDBNavLink className='waves-effect waves-light' to='#!'>
                                                <MDBIcon fab icon='facebook' />
                                            </MDBNavLink>
                                        </MDBNavItem>
                                        <MDBNavItem>
                                            <MDBNavLink className='waves-effect waves-light' to='#!'>
                                                <MDBIcon fab icon='instagram' />
                                            </MDBNavLink>
                                        </MDBNavItem>
                                    </MDBNavbarNav>
                                </MDBCollapse>
                            </MDBContainer>
                        </MDBNavbar>
                        {this.state.collapsed && overlay}
                    </div>
                </Router>

                <MDBView>
                    <MDBMask className='d-flex justify-content-center align-items-center gradient'>
                        <MDBContainer>
                            <MDBRow>
                                <MDBCol md='6' className='white-text text-center text-md-left mt-xl-5 mb-5'>
                                    <MDBAnimation type='fadeInLeft' delay='.5s'>
                                        <h1 className='h1-responsive font-weight-bold mt-sm-5'>Dulce Antojos</h1>
                                        <hr className='hr-light' />
                                        <h6 className='mb-4'>Call and order your fresh homecooked cake. something, something, more something more text... this and that and more, need more information to fill in this area or I can remove it</h6>
                                        <MDBBtn outline color='white'>
                                            817 691 8221
                                        </MDBBtn>
                                    </MDBAnimation>
                                </MDBCol>

                                <MDBCol md='6' xl='5' className='mt-xl-5'>
                                    <MDBAnimation type='fadeInRight' delay='.5s'>
                                        <img src='https://res.cloudinary.com/dtxzobw6b/image/upload/c_scale,w_600/v1591750298/dulce_antojos/20200531_150509_uvbyph.png' alt='' className='img-fluid' />
                                    </MDBAnimation>
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                    </MDBMask>
                </MDBView>
                <MDBContainer fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
                    <MDBRow style={{ marginLeft: 0, marginRight: 0 }}>
                        <MDBCol style={{ paddingLeft: 0, paddingRight: 0 }}>
                            <Gallery photos={this.state.images} onClick={this.openLightbox} />
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <Footer />
            </div>
        );
    }
}

export default App;
