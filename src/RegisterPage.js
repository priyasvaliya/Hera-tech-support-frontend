import {useState} from "react";
import axios from "axios";
import './Register.css';
import register from './register.png';
import {Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

function RegisterPage() {

	const navigate = useNavigate();

	const [userName, setUserName] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [address, setAddress] = useState('');
	const [payment, setPayment] = useState('');
	const [password, setPassword] = useState('');
	const [identity, setIdentity] = useState(0);
	
	function addCustomer(e) {
		e.preventDefault();
		const customer = {identity, userName, firstName, lastName, payment, address, password};
		axios.post("https://hire-tech-support-backend.herokuapp.com/register", customer)
			.then((response) => {
				console.log(response.data);
			})
		navigate("/login");
	}

	function handleClick() {
		navigate("/login");
	} 

	return (
		<div className="Register">
			<div className="Register-body mx-auto mt-3">
				<h3>Sign Up</h3>
				<img src={register} className="Register-logo" alt="register" />
				<div className="Register1">
					<form>
						UserName:&nbsp;<input className="input" type="text" name="UserName" value={userName} onChange={(e) => setUserName(e.target.value)}></input>
						FirstName: <input className="input" type="text" name="FirstName" value={firstName} onChange={(e) => setFirstName(e.target.value)}></input>
						<br></br>
						LastName:&nbsp;<input className="input" type="text" name="LastName" value={lastName} onChange={(e) => setLastName(e.target.value)}></input>
						Address: &nbsp;&nbsp;&nbsp;&nbsp;<input className="input" type="text" name="Address" value={address} onChange={(e) => setAddress(e.target.value)}></input>
						<br></br>
						Payment: &nbsp;&nbsp;&nbsp;<input className="input" type="text" name="Payment" value={payment} onChange={(e) => setPayment(e.target.value)}></input>
						Password: &nbsp;<input className="input" type="password" name="Password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
						<br></br>
						Identity: &nbsp;<input className="radio" type="radio" name="identity" id="customer" value={0} onChange={(e) => setIdentity(e.target.value)}></input>
						<label for="customer">Customer</label>&nbsp;&nbsp;
						<input className="radio" type="radio" name="identity" id="technician" value={1} onChange={(e) => setIdentity(e.target.value)}></input>
						<label for="technician">Technician</label>
						<br></br>
						<Button className="m-2" style={{ backgroundColor: "#6B705C", borderWidth: 0, fontWeight: 600 }} type="submit" onClick = {(e) => addCustomer(e)}>Confirm</Button>
						<br></br>
						<a className="Register-link" onClick={() => handleClick()}>Already have an account? Login in.</a>
					</form>
				</div>
			</div>
		</div>
	)

}

export default RegisterPage;