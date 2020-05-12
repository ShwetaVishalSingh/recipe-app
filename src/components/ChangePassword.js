import React, {useState} from 'react';
import showNotification from "../utilis/Notifications";
import {postData} from "../services/Ajax";

const ChangePassword = (props) => {
    const [data, setData] = useState({id: props.match.params.userId, oldPassword: "", newPassword: "", confirmPassword:""});

    const handlePostData = async (event) => {
        event.preventDefault();
        const response = await postData("/api/user/changePassword", data);
        if (response.status === 200) {
            const result = await response.json();
            props.history.push("/");
            showNotification("Success", result.message, "success");
        } else {
            const result = await response.json();

            showNotification("Error!", result.errorMessage, "danger");
        }
    };

    const handleInputChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        data[name] = value
        setData(data)
        return true;
    };


    return (
        <div id="signIn" className="banner full-screen-mode parallax">
            <div className="gallery-main pad-top-100 pad-bottom-100">
                <div className="container">
                    <div className="row">
                        <div className="form-reservations-box">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="wow fadeIn" data-wow-duration="1s" data-wow-delay="0.1s">
                                    <h2 className="block-title text-center">
                                        CHANGE PASSWORD
                                    </h2>
                                </div>

                                <p>PLEASE FILL OUT ALL REQUIRED* FIELDS. THANKS!</p>

                                <form onSubmit={handlePostData} className="reservations-box"
                                      name="changePassword">

                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <div className="form-box">
                                            <input type="password" onChange={handleInputChange} name="oldPassword"
                                                   id="password" placeholder="Please enter current password"
                                                   required="required" data-error="Password is required."/>
                                        </div>

                                </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <div className="form-box">
                                            <input type="password" onChange={handleInputChange} name="newPassword"
                                                   id="password" placeholder="Please enter new password"
                                                   required="required" data-error="newPassword is required."/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <div className="form-box">
                                            <input type="password" name="confirmPassword" id="form_name"
                                                   placeholder="Please enter password again"
                                                   onChange={handleInputChange}
                                                   required="required" data-error="Confirm Password is required."/>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div className="reserve-book-btn text-center">
                                            <button className="hvr-underline-from-center" type="submit" id="register">SUBMIT
                                            </button>

                                        </div>
                                    </div>


                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default ChangePassword

