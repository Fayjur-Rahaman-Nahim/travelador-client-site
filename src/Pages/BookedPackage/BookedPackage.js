import React from 'react';
import { Col, Row } from 'react-bootstrap';

const BookedPackage = ({ packageBook }) => {
    const { id, name, email, duration, price, status } = packageBook;
    return (
        <div>

            <Row lg={7}>
                <Col>{id}</Col>


                <Col>{name}</Col>

                <Col>{email}</Col>

                <Col>{duration}</Col>

                <Col>{price}</Col>

                <Col>{status}</Col>


                <Col>
                    <Row lg={2}>
                        <Col>{status == 'pending' ?
                            <button className="btn btn-secondary">Approve</button> : <button className="fw-bold btn btn-primary" disabled>Confirmed</button>
                        }
                        </Col>
                        <Col><button className="btn btn-danger">Delete</button></Col>
                    </Row>
                </Col>

            </Row>
        </div>
    );
};

export default BookedPackage;