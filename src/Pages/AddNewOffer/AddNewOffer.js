import axios from 'axios';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const AddNewOffer = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post("https://macabre-broomstick-87381.herokuapp.com/offers", data)
            .then(res => {
                if (res.data.insertedId) {
                    alert("Offer Added Successfully");
                    reset();
                }
            })
    }
    return (
        <div className="mt-5 pt-5 mx-auto  w-50">
            <h1 className="text-primary">Please Add Offer</h1>
            <form onSubmit={handleSubmit(onSubmit)}>


                <div className="form-floating mb-3">
                    <input {...register("name")} type="text" className="form-control" id="floatingName" placeholder="Location" />
                    <label htmlfor="floatingName">Location</label>
                </div>
                <div className="form-floating mb-3">
                    <input {...register("description")} type="text" className="form-control" id="floatingDescription" placeholder="Address" />
                    <label htmlfor="floatingDescription">Description</label>
                </div>
                <div className="form-floating mb-3">
                    <input {...register("img")} type="text" className="form-control" id="floatingImageUrl" placeholder="Image Url" />
                    <label htmlfor="floatingImageUrl">Image Url</label>
                </div>
                <Row lg={2}>
                    <Col className="form-floating mb-3">
                        <input {...register("duration")} type="text" className="form-control" id="floatingDuration" placeholder="Duration" />
                        <label htmlfor="floatingDuration">Duration</label>
                    </Col>
                    <Col className="form-floating mb-3">
                        <input {...register("price")} type="text" className="form-control" id="floatingPrice" placeholder="Price" />
                        <label htmlfor="floatingPrice">Price</label>
                    </Col>
                </Row>
                <input type="submit" className="btn btn-primary form-control" value="Add Offer" />
            </form>
        </div>
    );
};

export default AddNewOffer;