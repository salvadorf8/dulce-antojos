import { MDBMask, MDBRow, MDBCol, MDBIcon, MDBContainer, MDBAnimation } from 'mdbreact';
import VanillaTilt from 'vanilla-tilt';

import './ImageList.css';

VanillaTilt.init(document.querySelector('#card-custom'), {
    startX: 45,
    startY: 45,
    reset: false
});

//It also supports NodeList
VanillaTilt.init(document.querySelectorAll('#card-custom'));
// {/* <ImageShow image={image} /> */}

const Content = () => {
    const images = [
        { id: '2', description: null, src: require(`../assets/img/web/20200429_160625.jpg`), width: 3, height: 4 },
        { id: '3', description: null, src: require(`../assets/img/web/20200506_192118.jpg`), width: 3, height: 4 },
        { id: '4', description: null, src: require(`../assets/img/web/20200523_111440.jpg`), width: 3, height: 2 },
        { id: '5', description: null, src: require(`../assets/img/web/20200523_135756.jpg`), width: 3, height: 3 },
        { id: '7', description: null, src: require(`../assets/img/web/20200530_150658.jpg`), width: 3, height: 2 },
        { id: '8', description: null, src: require(`../assets/img/web/20200530_165941.jpg`), width: 3, height: 3 },
        { id: '9', description: null, src: require(`../assets/img/web/20200520_143415.jpg`), width: 3, height: 4 },
        { id: '10', description: null, src: require(`../assets/img/web/20200516_112358.jpg`), width: 3, height: 4 },
        { id: '11', description: null, src: require(`../assets/img/web/20200428_132720.jpg`), width: 4, height: 3 }
    ];

    const ImageList = ({ images }) => {
        const renderedImages = images.map((image) => {
            return (
                <div key={image.id}>
                    <div>
                        <img src={image.src} alt={image.description} />
                    </div>
                </div>
            );
        });

        return <div className='image-list'>{renderedImages}</div>;
    };

    return (
        <div>
            <MDBMask className='d-flex justify-content-center align-items-center gradient'>
                <MDBContainer style={{ height: '100%', width: '100%', paddingTop: '10rem' }}>
                    <MDBRow>
                        <MDBCol md='7' className='black-text text-center text-md-left mt-xl-5 mb-5'>
                            <MDBAnimation type='fadeInLeft' delay='.5s'>
                                <h2 className='display-6 mb-4 font-weight-bold'>CAKES - CUPCAKES - DESSERTS</h2>
                                <hr className='hr-light' />
                                <h4 className=' font-weight-normal'>Custom Homemade Latin Inspired Desserts</h4>
                                <h4 className='mb-4 font-weight-normal'>by Sophia Renee</h4>
                                <h6>
                                    call for a quote
                                    <a href='tel: 817-691-8211'>
                                        <MDBIcon icon='headset' size='2x' className=' icon2'>
                                            <span className='px-2 center icon-text'></span>
                                        </MDBIcon>
                                    </a>
                                    follow my social media
                                    <a href='https://www.facebook.com/dulceantojosdfw'>
                                        <MDBIcon fab icon='facebook' size='2x' className='icon2' />
                                    </a>
                                    <a href='https://www.instagram.com/dulceantojosdfw/'>
                                        <MDBIcon fab icon='instagram' size='2x' className='icon2 ' />
                                    </a>
                                </h6>
                                <p></p>
                            </MDBAnimation>
                        </MDBCol>
                        <MDBCol md='4' lg='4' className='d-none d-md-block'>
                            <MDBAnimation type='fadeInRight' delay='.5s'>
                                <img id='card-custom' className='img-fluid' src='https://res.cloudinary.com/dtxzobw6b/image/upload/v1677125005/dulce_antojos/logo_eqi5li.png' alt='' />
                            </MDBAnimation>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </MDBMask>

            <MDBContainer className='gallery' fluid>
                <MDBRow>
                    <MDBCol>
                        <ImageList images={images} />
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    );
};

export default Content;
