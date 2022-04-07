import {useState} from "react";
import axios from "axios";
import './Login.css';
import register from './register.png';
import {Button, Modal} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import st from "react-datepicker";

function LoginPage() {

	const navigateToHome = useNavigate();
	const navigateToRegister = useNavigate();
	const navigate = useNavigate();

	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');
	const [identity, setIdentity] = useState(0);
	const [passwordVerify, setPasswordVerify] = useState(true);
	const [empty, setEmpty] = useState(false);

	function loginInfo(e) {
		e.preventDefault();
		const info = {identity, userName, password};
		if (userName == '' || password == '') {
			setEmpty(true);
		}
		console.log(info);
		axios.post("https://hire-tech-support-backend.herokuapp.com/login", info)
			.then((response) => {
				setPasswordVerify(response.data!=null);
				if (identity === '0' && response.data!=null) {
					navigateToHome("/customer-home", {state: {customer: response.data}});
					localStorage.setItem("id", response.data.id);
				} else if (identity === '1' && response.data!=null) {
					navigateToHome("/tech-home", {state: {technician: response.data}});
				}	
			})
	}

	function handleClick() {
		navigateToRegister("/register");
	} 

	function handleClose() {
        setPasswordVerify(true);
        navigate("/login");
	}
	
	function handleEmpty() {
        setEmpty(false);
        navigate("/login");
    }

	return (
		<div className="Login">
			<Modal className="text-center" show={!passwordVerify} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>HERA</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Password wrong.</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button style={{ backgroundColor: "#6B705C", borderWidth: 0, fontWeight: 600 }} onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
			<Modal className="text-center" show={empty} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>HERA</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Username or password cannot be empty.</p>
                </Modal.Body>

				<Modal.Footer>
                    <Button style={{ backgroundColor: "#6B705C", borderWidth: 0, fontWeight: 600 }} onClick={handleEmpty}>Close</Button>
                </Modal.Footer>
            </Modal>
			<div className="Login-body">
			<h3>LOGIN</h3>
				<img src={register} className="Register-logo" alt="register" />
				<div className="Login1">
					<form>
						Username: <input className="input" type="text" name="UserName" value={userName} onChange={(e) => setUserName(e.target.value)}></input>
						<br></br>
						Password: &nbsp;<input className="input" type="password" name="Password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
						<br></br>
						Identity: &nbsp;<input className="radio" type="radio" name="identity" id="customer" value={0} onChange={(e) => setIdentity(e.target.value)}></input>
						<label for="customer">Customer</label>&nbsp;&nbsp;
						<input className="radio" type="radio" name="identity" id="technician" value={1} onChange={(e) => setIdentity(e.target.value)}></input>
						<label for="technician">Technician</label>
						<br></br>
						<Button className="m-2" style={{ backgroundColor: "#6B705C", borderWidth: 0, fontWeight: 600 }} type="submit" onClick = {(e) => loginInfo(e)}>LOG IN</Button>
					</form>
					<a className="Login-link">Forgot Password?</a>
					<a className="Login-link" onClick={() => handleClick()}>Don't have an account? Sign up.</a>
				</div>
			</div>
		</div>
		
	)
}

export default LoginPage;