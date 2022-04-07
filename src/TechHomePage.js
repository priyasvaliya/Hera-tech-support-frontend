import {useEffect, useState} from "react";
import axios from "axios";
import {Button, Col, Container, Form, FormControl, Modal, Navbar, Row, Table} from "react-bootstrap";
import {useLocation, useNavigate} from "react-router-dom";


function TechHomePage() {
    const navigate = useNavigate();
    const {state} = useLocation();
    const technician = state.technician;
    const [success, setSuccess] = useState(false);
    const [complete, setComplete] = useState("No");
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        axios.get(`https://hire-tech-support-backend.herokuapp.com/technician/orders/${technician.id}`)
            .then(res => {
                console.log(res.data);
                setOrders(res.data);
            })
    }, []);


    const handleClick = (id) => {
        axios.post(`https://hire-tech-support-backend.herokuapp.com/order/complete/${id}`)
            .then(res => {
                setSuccess(true);
            })
    }

    const onClose= () => {
        setSuccess(false);
        setComplete("Yes");
    }

    return (

        <Container className="home-page">
            <Modal className="text-center" show={success} onHide={onClose}>
                <Modal.Header closeButton>
                    <Modal.Title>HERA</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>The order has been marked as complete.</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button style={{ backgroundColor: "#6B705C", borderWidth: 0, fontWeight: 600 }} onClick={onClose}>Close</Button>
                </Modal.Footer>
            </Modal>

                 <Row>
                    <h3 className="mt-5 mb-5 d-md-flex justify-content-md-center">Upcoming Orders</h3>
                    <Table striped bordered hover size="sm" className="mt-5 mb-5 text-center" style={{borderColor: "black"}}>
                        <thead>
                        <tr style={{backgroundColor: "#6b705c", color: "white", fontSize: "20px"}}>
                            <th>Order ID</th>
                            <th>Customer First Name</th>
                            <th>Customer Last Name</th>
                            <th>Customer Address</th>
                            <th>Order Start Date</th>
                            <th>Order Complete</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody style={{backgroundColor: "white", fontSize: "20px"}}>
                        {orders.map((dule) => (
                            <tr key={dule.orderID}>
                                <td>{dule.orderID}</td>
                                <td>{dule.custFName}</td>
                                <td>{dule.custLName}</td>
                                <td>{dule.custAddress}</td>
                                <td>{dule.orderStartDate}</td>
                                <td>{dule.completed}</td>
                                <td>
                                    <Button className={{"visually-hidden": dule.completed=='Yes'}} style={{ backgroundColor: "#6B705C", borderWidth: 0, fontWeight: 600 }} onClick={() => handleClick(dule.orderID)}>
                                        Mark as complete
                                    </Button>

                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </Row>

        </Container>
    )
}

export default TechHomePage;

