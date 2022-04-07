import {useEffect, useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {useLocation, useNavigate} from "react-router-dom";
import {Button} from "react-bootstrap";
import axios from "axios";


function OrderRequestPage() {
    const navigate = useNavigate();
    const [custID, setcustID] = useState('')
    const [techID, settechID] = useState('')
    const [email, setemail] = useState('')
    const [techFName, settechFName] = useState('')
    const [techPaymentRate, settechPaymentRate] = useState('')
    const [custFName, setcustFNamel] = useState('')
    const [custAddress, setcustAddress] = useState('')
    const [orderDesc, setorderDesc] = useState('')
    const [orderDate, setorderDate] = useState(new Date());
    const {state} = useLocation();
    console.log(state);

    const handleClick = () => {
        console.log(custAddress);
        console.log(orderDesc);
        console.log(orderDate);
        console.log("Clicked");
        axios.post(`https://hire-tech-support-backend.herokuapp.com/order`, {
            custID: state.customer.id,
            techID: state.technician.techID,
            orderDesc: orderDesc,
            orderStartDate: orderDate,
            orderAddress: custAddress
        }).then(res => {
            navigate(`/order-history`);
        });
    }

    return (
        <div className="m-2 d-flex justify-content-center">
            <div class="form-container">
                <form class="register-form">
                    <h1>Order Request </h1>
                    {/* Uncomment the next line to show the success message */}
                    {/* <div class="success-message">Success! Thank you for registering</div> */}
                    <table STYLE="font-size:20px">
                        <tr>
                            <td>Technician Name :</td>
                            <td>{state.technician.techFName}</td>
                        </tr>
                        <tr>
                            <td>Technician Payment Rate :</td>
                            <td>{state.technician.techPaymentRate}</td>
                        </tr>
                        <tr>
                            <td>Customer Name :</td>
                            <td>{state.customer.custFName}</td>
                        </tr>
                    </table>

                    <span> </span>
                    {/* Uncomment the next line to show the error message */}
                    {/* <span id="last-name-error">Please enter a last name</span> */}
                    <span STYLE="font-size:20px;font-weight:500"> Address of tech support required</span>
                    <input
                        id="custAddress"
                        STYLE="font-size:20px;font-weight:500"
                        class="form-field"
                        type="text"
                        placeholder="Enter your address"
                        name="custFName"
                        value={custAddress}
                        onChange={(e) => setcustAddress(e.target.value)}
                    />
                    <span> </span>
                    <span STYLE="font-size:20px;font-weight:500"> Describe the Technical Issue</span>
                    <input
                        id="orderDesc"
                        STYLE="font-size:20px;font-weight:500"
                        class="form-field"
                        type="text"
                        placeholder="Please Describe the technical issue"
                        name="custAddress"
                        value={orderDesc}
                        onChange={(e) => setorderDesc(e.target.value)}
                    />
                    <span> </span>
                    <span STYLE="font-size:20px;font-weight:500"> Select the date for tech support</span>
                    <input
                        id="orderDate"
                        STYLE="font-size:20px;font-weight:500"
                        className="form-field"
                        type="datetime-local"
                        placeholder="Select the date"
                        name="orderDate"
                        value={orderDate}
                        onChange={(date) => setorderDate(date.target.value)}
                    />

                    {/* Uncomment the next line to show the error message */}
                    {/* <span id="email-error">Please enter an email address</span> */}
                    <Button class="form-field" onClick={handleClick} style={{ backgroundColor: "#6B705C", borderWidth: 0, fontWeight: 600 }}>
                        Place order
                    </Button>
                </form>
            </div>
        </div>

    );

}

export default OrderRequestPage;