import {useEffect, useState} from "react";
import {Col, Container, Form, FormControl, Row} from "react-bootstrap";
import ProfileCard from "./ProfileCard";
import {useLocation, useNavigate} from "react-router-dom";
import "./CustomerHome.css";
import axios from "axios";

function CustomerHomePage() {
    const navigate = useNavigate();
    const customerId = localStorage.getItem("id");
    const [customer, setCustomer] = useState({});
    const [technicianList, setTechnicianList] = useState([]);
    const [searchedTechnicians, setSearchedTechnicians] = useState([]);

    useEffect(() => {
        axios.get("https://hire-tech-support-backend.herokuapp.com/technician")
            .then(res => {
                console.log(res.data);
                setTechnicianList(res.data);
                setSearchedTechnicians(res.data);
            });
        axios.get(`https://hire-tech-support-backend.herokuapp.com/login/${customerId}`)
            .then(res => {
                console.log(res.data);
                setCustomer(res.data);
            });
    }, []);

    function contains(technician, value) {
        return technician.techFName.toLowerCase().includes(value.toLowerCase())
            || technician.techLName.toLowerCase().includes(value.toLowerCase());
    }

    function filterUsers(event) {
        if (event.target.value.length > 2) {
            const filteredProfiles = technicianList.filter(profile => contains(profile, event.target.value));
            setSearchedTechnicians(filteredProfiles);
        } else {
            setSearchedTechnicians(technicianList);
        }
    }

    const handleClick = (technician) => {
        navigate(`/orderrequest`, {state: {
            technician: technician,
                customer: customer
            }});
    }

    return (
        <Container className="home-page">
            <Row>
                <h3 className="text-center mt-5">Choose a Technician</h3>
            </Row>
            <Row>
                <Form className="mt-3 d-flex">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                        onChange={filterUsers}
                    />
                </Form>
            </Row>
            <Row md={2} lg={3}>
                {searchedTechnicians.map(technician =>
                    <Col key={technician.techID}>
                        <div className="tech-card" onClick={() => handleClick(technician)}>
                            <ProfileCard technician={technician}></ProfileCard>
                        </div>
                    </Col>)}
            </Row>
        </Container>
    )
}

export default CustomerHomePage;

