import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import './Login.css'
const Login = () => {
    const { googleSignIn, setIsLoading } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || './home';
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                history.push(redirect_uri);
            })
            .finally(() => setIsLoading(false))
    }
    return (
        <div className="mt-5 pt-5" style={{ minHeight: "50vh" }}>
            <Row lg={2} xs={1} className="mx-auto">
                <Col className="photo">
                    <img src="https://i.ibb.co/xzHVhp4/photo-1551523891-51d1aaadfec8.jpg" alt="" />
                </Col>
                <Col className="d-flex justify-content-center align-items-center">
                    <span><h1 className="text-primary">Please Sign in</h1>
                        <button onClick={handleGoogleSignIn} className="btn btn-danger form-control"><i class="fab fa-google-plus-g"></i> Google</button></span>
                </Col>


            </Row>
        </div>
    );
};

export default Login;