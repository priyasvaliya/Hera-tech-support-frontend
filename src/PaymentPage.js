import {useEffect, useState} from "react";
import {Button, Card, Col, Container, Form, Modal, Row} from "react-bootstrap";
import "./PaymentPage.css";
import {useLocation, useNavigate} from "react-router-dom";
import axios from "axios";

function PaymentPage() {
    const navigate = useNavigate();
    const {state} = useLocation();
    const id = state.id;
    const [order, setOrder] = useState({});
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        axios.get(`https://hire-tech-support-backend.herokuapp.com/order/${id}`)
            .then(res => {
                setOrder(res.data);
            })
    }, []);

    function handleSubmit() {
        axios.post(`https://hire-tech-support-backend.herokuapp.com/order/${id}`)
            .then(res => {
                setSuccess(true);
            })
    }

    function handleClose() {
        setSuccess(false);
        navigate("/customer-home", {state: {id: state.id}});
    }

    return (
        <Container>
            <Modal className="text-center" show={success} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>HERA</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>You have successfully made the payment.</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button style={{ backgroundColor: "#6B705C", borderWidth: 0, fontWeight: 600 }} onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
            <Row className="m-3">
                <Col className="payment" md={7}>
                    <Card className="p-4 mt-4 payment-card">
                        <h5 className="mt-4 mx-3">Enter your Payment Details</h5>
                        <hr/>
                        <div className="d-flex justify-content-center">
                            <img className="payment-image"
                                 src="https://dropazz.com/wp-content/uploads/2021/05/How-To-Increase-Your-Store-Conversation-Rates.jpg"/>
                        </div>
                        <Form className="mt-5">
                            <Form.Group className="mb-3 d-flex" as={Row}>
                                <Form.Label className="mx-3 my-2 w-3" column sm={3}>Card details:</Form.Label>
                                <Col sm={8}>
                                    <Form.Control className="mx-3 my-2 w-5" type="text"/>
                                </Col>
                            </Form.Group>
                            <Form.Group className="mb-4 d-flex field" as={Row}>
                                <Form.Label className="mx-3 my-2 w-3" column sm={3}>Expiration date:</Form.Label>
                                <Col sm={8}>
                                    <Form.Control className="mx-3 my-2 w-5" type="text"/>
                                </Col>
                            </Form.Group>
                            <Form.Group className="mb-4 d-flex field" as={Row}>
                                <Form.Label className="mx-3 my-2 w-3" column sm={3}>Security Code:</Form.Label>
                                <Col sm={8}>
                                    <Form.Control className="mx-3 my-2 w-5" type="text"/>
                                </Col>
                            </Form.Group>
                        </Form>

                        <h5 className="mt-1 mx-3">Cardholder details</h5>
                        <hr/>

                        <Form>
                            <Form.Group className="mb-4 d-flex" as={Row} controlId="formBasicEmail">
                                <Form.Label className="mx-3 my-2 w-3" column sm={3}>Full name:</Form.Label>
                                <Col sm={8}>
                                    <Form.Control className="mx-3 my-2 w-5" type="text"/>
                                </Col>
                            </Form.Group>
                            <Form.Group className="mb-4 d-flex field" as={Row}>
                                <Form.Label className="mx-3 my-2 w-3" column sm={3}>Email Address:</Form.Label>
                                <Col sm={8}>
                                    <Form.Control className="mx-3 my-2 w-5" type="text" name="emailAddress"/>
                                </Col>
                            </Form.Group>
                        </Form>
                        <Button type="submit" onClick={handleSubmit}  style={{ backgroundColor: "#6B705C", borderWidth: 0, fontWeight: 600 }}>
                            Submit
                        </Button>

                    </Card>
                </Col>
                <Col className="mt-4">
                    <Card className="p-5 payment-card" style={{fontSize:"20px", gap:"6px"}}>
                        <h5 className="mt-3">Order Information</h5>
                        <hr/>
                        <Row>
                            <Col className="">Order Description: </Col>
                        </Row>
                        <Row>
                            <Col>{order.orderDesc}</Col>
                        </Row>
                        <Row>
                            <Col className="">Number of hours: </Col><Col>{order.hours}</Col>
                        </Row>
                        <Row>
                            <Col className="">Rate of payment: </Col><Col>{order.paymentRate}</Col>
                        </Row>
                        <Row>
                            <Col className="">Taxes and services: </Col><Col>{order.taxableAmount}</Col>
                        </Row>
                        <hr/>
                        <Row>
                            <Col className="fw-bold">Total amount payable: </Col><Col>{order.amountToPay}</Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default PaymentPage;