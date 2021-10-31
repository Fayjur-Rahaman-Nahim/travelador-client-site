import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './AboutUs.css'

const AboutUs = () => {
    return (
        <div className="mt-3">
            <h1 className="text-primary mb-5">About Us</h1>
            <Row xs={1} md={1} lg={2} className="d-flex md:pt-5 pb-5 mx-0">
                <Col className="col-lg-6 p-5 mt-5">
                    <h1 className="text-primary fw-bold">CEO Message</h1>
                    <h5 className="d-flex align-items-center ">Words cannot describe what you mean to me.So I’ll just tell you “I love you” – and see you again when you return to me soon.I know you haven’t left yet but I already miss you so please just go and come back safe really soon.Okay thanks.</h5>

                </Col>
                <Col className="col-lg-6 photo sm:mt-5">
                    <img src="https://i.ibb.co/30yfNG6/photo-1565523925028-812f891b0e8c.jpg" alt="" />
                </Col>
            </Row>

        </div>
    );
};

export default AboutUs;