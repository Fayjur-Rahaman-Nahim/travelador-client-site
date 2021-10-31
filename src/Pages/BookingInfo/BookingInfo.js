import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const BookingInfo = () => {
    const { user } = useAuth();
    const { id } = useParams();

    const [offer, setOffer] = useState([]);
    useEffect(() => {
        fetch(`https://macabre-broomstick-87381.herokuapp.com/offers/${id}`)
            .then(res => res.json())
            .then(data => setOffer(data))
    }, []);

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const id = offer._id;
        const duration = offer.duration;
        const price = offer.price;

        const bookedInfo = {
            ...data,
            id: id,
            status: 'pending',
            duration: duration,
            price: price
        }
        axios.post("https://macabre-broomstick-87381.herokuapp.com/bookedPackages", bookedInfo)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Booking Confirmed');
                    reset();
                }
            })
    };
    return (
        <div className="mt-5 pt-5">
            <Row lg={2} xs={1} className="mx-auto">
                <Col >
                    <Card >
                        <Card.Img variant="top" src={offer.img} className="img" />
                        <Card.Body className="text-start">
                            <Card.Title><h4 className="fw-bold">{offer.name}</h4></Card.Title>
                            <Card.Text>
                                <h6 className="text-dark">{offer.description}</h6>
                                <Row lg={2} xs={1} className="text-dark text-center fw-bold">
                                    <Col style={{ fontSize: "20px" }}><i className="fas fa-calendar-week"></i> {offer.duration}</Col>
                                    <Col style={{ fontSize: "20px" }}><i className="fas fa-dollar-sign"></i> {offer.price}</Col>
                                </Row>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="px-5">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h1 className="text-primary">Booking Confirmation</h1>
                        <div className="form-floating mb-3">
                            <input defaultValue={user.displayName} {...register("name")} type="name" className="form-control" id="floatingInput" readOnly />
                            <label htmlfor="floatingInput">Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input defaultValue={user.email} {...register("email")} type="email" className="form-control" id="floatingEmail" readOnly />
                            <label htmlfor="floatingEmail">Email</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input {...register("address")} type="text" className="form-control" id="floatingAddress" placeholder="Address" />
                            <label htmlfor="floatingAddress">Address</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input {...register("number")} type="text" className="form-control" id="floatingPhone" placeholder="Phone Number" />
                            <label htmlfor="floatingPhone">Phone Number</label>
                        </div>
                        <input type="submit" className="btn btn-primary form-control" value="Confirm Booking" />
                    </form>
                </Col>
            </Row>
        </div >
    );
};

export default BookingInfo;