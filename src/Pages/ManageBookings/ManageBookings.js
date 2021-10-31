import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import BookedPackage from '../BookedPackage/BookedPackage';

const ManageBookings = () => {
    const [bookedPackages, setBookedPackages] = useState([])
    useEffect(() => {
        fetch('https://macabre-broomstick-87381.herokuapp.com/bookedPackages')
            .then(res => res.json())
            .then(data => setBookedPackages(data))
    }, [])

    return (
        <div className="mt-5 pt-5">
            <h1 className="text-primary">Manage All Users Packages</h1>
            <div>
                <Row lg={7} className="fw-bold text-primary">
                    <Col><h3>Package_key</h3></Col>
                    <Col><h3>Name</h3></Col>
                    <Col><h3>Email</h3></Col>
                    <Col><h3>Duration</h3></Col>
                    <Col><h3>Price</h3></Col>
                    <Col><h3>Status</h3></Col>
                    <Col><h3>Action</h3></Col>
                </Row>
            </div>
            <div>
                {
                    bookedPackages.map(packageBook => <BookedPackage
                        key={packageBook._id}
                        packageBook={packageBook}
                    ></BookedPackage>)
                }

            </div>
        </div>
    );
};

export default ManageBookings;