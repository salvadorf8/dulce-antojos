import './mainview.css';

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { MDBMask, MDBRow, MDBCol, MDBView, MDBContainer, MDBAnimation } from 'mdbreact';
import Gallery from 'react-photo-gallery';
import Navigationbar from './NavigationBar';

// import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Footer from './FooterPage';
import Navbar from './NavigationBar';

class App extends React.Component {
    state = {
        images: [
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

    render() {
        return (
            <div id='apppage'>
                <Navigationbar />
                <MDBView>
                    <MDBMask className='d-flex justify-content-center align-items-center gradient'>
                        <MDBContainer>
                            <MDBRow>
                                <MDBCol md='6' className='black-text text-center text-md-left mt-xl-5 mb-5'>
                                    <MDBAnimation type='fadeInLeft' delay='.5s'>
                                        <h1 className='h1-responsive font-weight-bold mt-sm-5'>Sophia's Signature </h1>
                                        <hr className='hr-light' />
                                        <h6 className='mb-4'>Contact me for a freshly made pastry on your next event or any evening really. All ingredients used are of high quality to ensure you receive the best unique cake experience with your family.</h6>
                                    </MDBAnimation>
                                </MDBCol>
                                <MDBCol md='6' lg='5' className='d-none d-md-block'>
                                    <MDBAnimation type='fadeInRight' delay='.5s'>
                                        <img src='https://res.cloudinary.com/dtxzobw6b/image/upload/c_scale,w_600/v1591750298/dulce_antojos/20200531_150509_uvbyph.png' alt='' className='img-fluid ' />
                                    </MDBAnimation>
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                    </MDBMask>
                </MDBView>
                <MDBContainer className='gallery' fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
                    <MDBRow>
                        <MDBCol>
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
