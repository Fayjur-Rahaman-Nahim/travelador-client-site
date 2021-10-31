import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import MyBookedPackage from '../MyBookedPackage/MyBookedPackage';

const MyBooking = () => {
    const { user } = useAuth();
    console.log(user.email)

    const [myBookedPackages, setMyBookedPackages] = useState([])
    useEffect(() => {

        if (user.email) {
            fetch("https://macabre-broomstick-87381.herokuapp.com/bookedPackages/byEmail", {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ email: user.email })
            })
                .then(res => res.json())
                .then(data => {
                    setMyBookedPackages(data);

                })
        }
    }, [user.email])

    const handleDeleteOrder = id => {

        fetch(`https://macabre-broomstick-87381.herokuapp.com/bookedPackages/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('Deleted Successfully');
                    const remainingOrders = myBookedPackages.filter(bookedPackage => bookedPackage._id !== id);
                    setMyBookedPackages(remainingOrders);
                }
            })
    }


    return (
        <div className="mt-5 pt-5" style={{ minHeight: '50vh' }}>
            <h1 className="text-primary">My Bookings</h1>

            <div>
                <Row lg={7}>
                    <Col>Package_key</Col>
                    <Col>Name</Col>
                    <Col>Email</Col>
                    <Col>Duration</Col>
                    <Col>Price</Col>
                    <Col>Status</Col>
                    <Col>Action</Col>
                </Row>
            </div>
            <div>
                {
                    myBookedPackages.map(myBookedPackage => <MyBookedPackage
                        key={myBookedPackage._id}
                        myBookedPackage={myBookedPackage}
                        handleDeleteOrder={handleDeleteOrder}>

                    </MyBookedPackage>)
                }
            </div>
        </div>
    );
};

export default MyBooking;