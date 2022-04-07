import './App.css';
import OrderRequestPage from './OrderRequestPage';
import RateTechPage from './RateTechPage';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CustomerHomePage from "./CustomerHomePage";
import NavigationBar from "./NavBar";
import RegisterPage from "./RegisterPage";
import LoginPage from "./LoginPage";
import PaymentPage from "./PaymentPage";
import TechHomePage from "./TechHomePage";
import OrderHistory from "./OrderHistory";


function App() {
    return (
        <div className="app-home">
            <NavigationBar/>
            <BrowserRouter>
                <div>
                    <Routes>
                        <Route path="/" element={<LoginPage/>}/>
                        <Route path="/customer-home" element={<CustomerHomePage/>}/>
                        <Route path="/tech-home" element={<TechHomePage/>}/>
                        <Route path="/register" element={<RegisterPage/>}/>
                        <Route path="/login" element={<LoginPage/>}/>
                        <Route path="/payment" element={<PaymentPage/>}/>
                        <Route path="/orderrequest" element={<OrderRequestPage />} />
                        <Route path="/ratetech" element={<RateTechPage />} />
                        <Route path="/order-history" element={<OrderHistory/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
