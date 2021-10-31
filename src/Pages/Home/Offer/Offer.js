import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

import { Link } from 'react-router-dom';
import './Offer.css'

const Offer = ({ offer }) => {
    const { img, _id, name, description, duration, price } = offer;
    return (
        <div>
            <Col >
                <Card >
                    <Card.Img variant="top" src={img} className="img" />
                    <Card.Body className="text-start size">
                        <Card.Title><h4 className=" fw-bold">{name}</h4></Card.Title>
                        <Card.Text>
                            <h6 className="text-dark">{description}</h6>
                            <Row lg={2} xs={1} className="text-dark text-center fw-bold">
                                <Col style={{ fontSize: "20px" }}><i className="fas fa-calendar-week"></i> {duration}</Col>
                                <Col style={{ fontSize: "20px" }}><i class="fas fa-dollar-sign"></i> {price}</Col>
                            </Row>
                            <br />
                            <Link to={`/offerBooking/${_id}`}> <button className="btn btn-primary form-control">Book Now</button> </Link>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Offer;