import React from 'react';
import { Col, Row } from 'react-bootstrap';

const OverView = () => {
    return (
        <div className="mt-4">
            <h1 className="text-primary mb-5">Overview</h1>
            <Row xs={1} md={2} lg={3} className="mx-auto">

                <Col>
                    <Col><h1><i style={{ fontSize: '80px' }} className="fab fa-codepen text-primary"></i></h1></Col>
                    <Col xs><h3>20</h3></Col>
                    <Col xs><h3>Years of Experience</h3></Col>

                </Col>
                <Col>
                    <Col><h1><i style={{ fontSize: '80px' }} className="fas fa-suitcase-rolling text-primary"></i></h1></Col>

                    <Col xs><h3>70000+</h3></Col>

                    <Col xs><h3>Happy Travellers</h3></Col>

                </Col>
                <Col>
                    <Col><h1><i style={{ fontSize: '80px' }} className="far fa-clone text-primary"></i></h1></Col>
                    <Col xs><h3>120</h3></Col>
                    <Col xs><h3>Certificates</h3></Col>

                </Col>

            </Row>
        </div>
    );
};

export default OverView;