import React from 'react'
import Cross from "@image/cross.png"

const Security = () => {
  return (
    <section class="security-section">
        <div class="container">
            <div class="security-content">
                <div class="heading">
                    <h2 class="title">Security Settings</h2>
                </div>
                <div class="security-detail">
                    <div class="row">
                        <div class="col-12 col-md-12 col-lg-6">
                            <div class="security-item">
                                <div class="general-option">
                                    <h2 class="subtitle">General Security Options</h2>
                                    <div class="form-check form-switch d-flex align-items-center">
                                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                                        <label class="form-check-label" for="flexSwitchCheckDefault">Save my Activities
                                            Log.</label>
                                    </div>
                                    <div class="form-check form-switch d-flex align-items-center">
                                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault1" />
                                        <label class="form-check-label" for="flexSwitchCheckDefault1">Alert me by email
                                            for unusual activity</label>
                                    </div>
                                </div>
                                <div class="manage-noti">
                                    <h2 class="subtitle">Manage Notification</h2>
                                    <div class="form-check form-switch d-flex align-items-center">
                                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault3" />
                                        <label class="form-check-label" for="flexSwitchCheckDefault3">Alert me by email
                                            for unusual activity</label>
                                    </div>
                                    <div class="security-button">
                                        <a href="#" class="btn btn-primary">Update</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-12 col-lg-6">
                            <div class="security-item">
                                <div class="factor">
                                    <div class="factor-title">
                                        <span class="disabled">Current Status: <b> Disabled </b></span>
                                    </div>
                                    <div class="factor-detail">
                                        <div class="factor-img">
                                            <img src={Cross} alt="" class="img-fluid" />
                                        </div>
                                        <h2 class="subtitle">Two-Factor Verification</h2>
                                        <p class="description">Two-factor authentication is a method for protection your
                                            web account. When it is activated, please enter your password and your
                                            special code. You can receive this code inside your mobile app. Even if a
                                            third-person establishes your password, access won’t be granted unless they
                                            also have access to your special code. </p>
                                        <div class="factor-button text-center">
                                            <a href="#" class="btn btn-primary" data-bs-toggle="modal"
                                                data-bs-target="#staticBackdrop">Enable 2FA</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Security;