import React from 'react';
import { Col, Row } from 'react-bootstrap';

const MyBookedPackage = (props) => {
    const { id, _id, name, email, duration, price, status } = props.myBookedPackage;
 
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
                    <button onClick={() => props.handleDeleteOrder(_id)} className="btn btn-danger">Delete</button>
                </Col>

            </Row>
        </div>
    );
};

export default MyBookedPackage;