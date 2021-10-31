import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Offer from '../Offer/Offer';

const MainOffer = () => {
    const [offers, setOffers] = useState([])
    useEffect(() => {
        fetch('https://macabre-broomstick-87381.herokuapp.com/offers')
            .then(res => res.json())
            .then(data => setOffers(data))
    }, [])
    return (
        <div className="mt-5">
            <h1 className="text-primary mb-3">Our Main Offers</h1>
            <Row xs={1} md={2} lg={3} className="g-4 mx-auto">
                {
                    offers.map(offer => <Offer
                        key={offer._id}
                        offer={offer}></Offer>)
                }
            </Row>
        </div>
    );
};

export default MainOffer;