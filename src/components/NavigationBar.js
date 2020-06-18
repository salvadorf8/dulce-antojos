import './NavigationBar.css';
import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBCollapse, MDBNavItem, MDBIcon, MDBContainer } from 'mdbreact';

class NavigationBar extends Component {
    render() {
        return (
            <MDBNavbar className='header' color='brown lighten-4' dark expand='md' fixed='top' scrolling transparent>
                <MDBContainer>
                    <MDBNavbarBrand>
                        <img src='https://res.cloudinary.com/dtxzobw6b/image/upload/c_scale,w_209/v1592120559/dulce_antojos/cake_logo_name_qddflk.png' alt='' className='img-fluid' />
                    </MDBNavbarBrand>
                    <MDBCollapse navbar>
                        <MDBNavbarNav right>
                            <MDBNavItem>
                                <a href='https://www.facebook.com/dulceantojosdfw'>
                                    <MDBIcon fab icon='facebook' size='2x' className='icon ' />
                                </a>
                            </MDBNavItem>
                            <MDBNavItem>
                                <a href='https://www.instagram.com/dulceantojosdfw/'>
                                    <MDBIcon fab icon='instagram' size='2x' className='icon' />
                                </a>
                            </MDBNavItem>
                            <MDBNavItem>
                                <a href='tel: 817-691-8211'>
                                    <MDBIcon icon='headset' size='2x' className='pr-2 icon '>
                                        <span className='px-2 center icon-text'>817 691 8211 </span>
                                    </MDBIcon>
                                </a>
                            </MDBNavItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
        );
    }
}

export default NavigationBar;
