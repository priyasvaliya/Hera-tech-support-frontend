import React, {useEffect, useState} from "react";
import axios from "axios";
import {Button, Container, Row, Table} from "react-bootstrap";
import {useNavigate} from "react-router-dom";


function OrderHistory() {
    const navigate = useNavigate();
    const id = localStorage.getItem("id");
    const [orders, setOrders] = useState([]);
    const [searchedOrders, setSearchedOrders] = useState([]);

    useEffect(() => {
        axios.get(`https://hire-tech-support-backend.herokuapp.com/technician/orderhistory/${id}`)
            .then(res => {
                console.log(res.data);
                setOrders(res.data);
                setSearchedOrders(res.data);
            })
    }, []);

    const handleClick = (id) => {
        navigate(`/payment`, {state: {id: id}});
    }

    return (
        <Container className="home-page">

           <Row>
            <h3 className="mt-5 mb-5 d-md-flex justify-content-md-center">Order History</h3>
            <Table striped bordered hover size="sm" className="mt-5 mb-5 text-center" style={{borderColor: "black"}}>
                <thead>
                <tr style={{backgroundColor: "#6b705c", color: "white", fontSize: "20px"}}>
                    <th>Order ID</th>
                    <th>Order Start Date</th>
                    <th>Order End Date</th>
                    <th>Technician First Name</th>
                    <th>Technician Last Name</th>
                    <th>Payment</th>

                </tr>
                </thead>
                <tbody style={{backgroundColor: "white", fontSize: "20px"}}>
                {orders.map((order) => (
                    <tr key={order.orderID}>
                        <td>{order.orderID}</td>
                        <td>{order.orderStartDate}</td>
                        <td>{order.orderEndDate}</td>
                        <td>{order.techFName}</td>
                        <td>{order.techLName}</td>
                        <td>
                            <Button style={{ backgroundColor: "#6B705C", borderWidth: 0, fontWeight: 600}} className={{"visually-hidden": order.completed==="No" }} onClick={() => handleClick(order.orderID)}>
                                Pay
                            </Button>

                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>


            {/*<Row md={2} lg={3}>*/}
            {/*    {orders.map(order =>*/}
            {/*        <Col key={order.orderID}>*/}
            {/*            <div onClick={() => handleClick(order.orderID)}>*/}
            {/*               <Table {order.orderID}{}*/}
            {/*            </div>*/}
            {/*        </Col>)}*/}
            </Row>
        </Container>
    )
}

export default OrderHistory;

