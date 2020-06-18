import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBIcon } from 'mdbreact';

const FooterPage = () => {
    return (
        <MDBFooter className='font-small  black-text footer'>
            <MDBContainer fluid className='text-center text-md-left'>
                <MDBRow>
                    <MDBCol md='5' className='order-md-1'>
                        <MDBRow className='py-5 action-right'>
                            <MDBCol>
                                <a href='https://www.facebook.com/dulceantojosdfw'>
                                    <MDBIcon fab icon='facebook' size='2x' className='icon '>
                                        <span className='px-2 center icon-text'>Facebook</span>
                                    </MDBIcon>
                                </a>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow className='py-5 action-right'>
                            <MDBCol>
                                <a href='https://www.instagram.com/dulceantojosdfw/'>
                                    <MDBIcon fab icon='instagram' size='2x' className='icon'>
                                        <span className='px-2 center icon-text'>Instagram</span>
                                    </MDBIcon>
                                </a>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow className='py-5 action-right'>
                            <MDBCol>
                                <a href='tel: 817-691-8211'>
                                    <MDBIcon icon='headset' size='2x' className='pr-2 icon '>
                                        <span className='px-2 center icon-text'>click here to call me</span>
                                    </MDBIcon>
                                </a>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                    <MDBCol md='7 ' className='action-left'>
                        <img src='https://res.cloudinary.com/dtxzobw6b/image/upload/c_scale,w_693/v1592108700/dulce_antojos/cake_logo_0613_fc5to9.png' alt='' className='img-fluid ' />
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <div className='footer-copyright text-center py-3 black-text pt-4'>
                <MDBContainer fluid>&copy; {new Date().getFullYear()} Copyright: designed by: LazySal</MDBContainer>
            </div>
        </MDBFooter>
    );
};

export default FooterPage;

// style={{ paddingLeft: 0, paddingRight: 0 }}
