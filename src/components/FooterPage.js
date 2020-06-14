import './mainview.css';
import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from 'mdbreact';

const FooterPage = () => {
    return (
        <MDBFooter className='font-small  black-text footer'>
            <MDBContainer fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
                <MDBRow>
                    <MDBCol md='7 action-left'>
                        <img src='https://res.cloudinary.com/dtxzobw6b/image/upload/c_scale,w_693/v1592108700/dulce_antojos/cake_logo_0613_fc5to9.png' alt='' className='img-fluid ' />
                    </MDBCol>
                    <MDBCol md='5'>
                        <MDBRow className='py-5 action-right'>
                            <MDBCol>Facebook</MDBCol>
                        </MDBRow>
                        <MDBRow className='py-5 action-right'>
                            <MDBCol>Instagram</MDBCol>
                        </MDBRow>
                        <MDBRow className='py-5 action-right'>
                            <MDBCol>Phone</MDBCol>
                        </MDBRow>
                    </MDBCol>
                </MDBRow>
                <div className='footer-copyright text-center py-3 black-text pt-4'>
                    <MDBContainer fluid>&copy; {new Date().getFullYear()} Copyright: designed by: LazySal</MDBContainer>
                </div>
            </MDBContainer>
        </MDBFooter>
    );
};

export default FooterPage;
