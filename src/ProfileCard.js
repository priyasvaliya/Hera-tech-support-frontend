import {Button, Card, Row} from "react-bootstrap";
import "./ProfileCard.css";
import StarFilled from "./icons/StarFilled";
import StarHalfFilled from "./icons/StarHalfFilled";
import StarEmpty from "./icons/StarEmpty";

function ProfileCard({technician}) {
    const emptyStars = 5 - technician.techRating;

    const url = "https://banglarshiksha.gov.in/assets/frontend/images/login_placeholder.jpg";

    return (
        <Card className="p-4 mb-3 mt-3 profile-card">
            <Row>
                <div className="d-flex justify-content-center">
                    <img className="profile-picture" src={url} alt={technician.techFName}/>
                </div>
                <div className="text-capitalize mt-1 justify-content-md-center d-flex">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-person-fill" viewBox="0 0 16 16">
                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                        </svg>
                    </div><div className="px-2 text-muted ">{technician.techFName} {technician.techLName}</div>
                </div>
                <div className="mt-1 text-center justify-content-md-center d-flex">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                            <path
                                d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                        </svg>
                    </div><div className="px-2 text-muted">{technician.techAddress}</div>
                </div>
                <div className="mt-1 text-center justify-content-md-center d-flex">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-currency-exchange" viewBox="0 0 16 16">
                            <path
                                d="M0 5a5.002 5.002 0 0 0 4.027 4.905 6.46 6.46 0 0 1 .544-2.073C3.695 7.536 3.132 6.864 3 5.91h-.5v-.426h.466V5.05c0-.046 0-.093.004-.135H2.5v-.427h.511C3.236 3.24 4.213 2.5 5.681 2.5c.316 0 .59.031.819.085v.733a3.46 3.46 0 0 0-.815-.082c-.919 0-1.538.466-1.734 1.252h1.917v.427h-1.98c-.003.046-.003.097-.003.147v.422h1.983v.427H3.93c.118.602.468 1.03 1.005 1.229a6.5 6.5 0 0 1 4.97-3.113A5.002 5.002 0 0 0 0 5zm16 5.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0zm-7.75 1.322c.069.835.746 1.485 1.964 1.562V14h.54v-.62c1.259-.086 1.996-.74 1.996-1.69 0-.865-.563-1.31-1.57-1.54l-.426-.1V8.374c.54.06.884.347.966.745h.948c-.07-.804-.779-1.433-1.914-1.502V7h-.54v.629c-1.076.103-1.808.732-1.808 1.622 0 .787.544 1.288 1.45 1.493l.358.085v1.78c-.554-.08-.92-.376-1.003-.787H8.25zm1.96-1.895c-.532-.12-.82-.364-.82-.732 0-.41.311-.719.824-.809v1.54h-.005zm.622 1.044c.645.145.943.38.943.796 0 .474-.37.8-1.02.86v-1.674l.077.018z"/>
                        </svg>
                    </div><div className="px-2 text-muted">{technician.techPaymentRate}</div>
                </div>
                <div className="mt-1 text-center justify-content-md-center d-flex">
                    <div className="profile-card-icon-rating">
                        {technician.techRating > 0 && [...Array(technician.techRating).keys()].map(value => <StarFilled/>)}
                        {emptyStars > 0 && [...Array(emptyStars).keys()].map(value => <StarEmpty/>)}
                    </div>
                </div>
                <div className="profile-button d-flex justify-content-md-center mt-2">
                    <Button variant="outline-secondary">Book appointment</Button>
                </div>
            </Row>
        </Card>
    );

}

export default ProfileCard;