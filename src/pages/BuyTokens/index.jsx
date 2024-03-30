import React from 'react'
import Token from '@image/token-img.png'
import RightArrow from '@image/right-arrow.png'
import useCountdown from '../../hooks/useCountdown'

const BuyTokens = () => {
    const [days, hours, minutes, seconds] = useCountdown( new Date(1711823400000) )

    return (
        <section class="security-section profile-section rcof">
            <div class="container">
                <div class="security-content">
                    <div class="heading">
                        <h2 class="title">Buy RCOF</h2>
                        <div class="warn">
                            <p>Add your wallet address before you buy the RCOF token</p>
                            <span><a href="#">
                                <img src={RightArrow} alt="" class="img-fluid" />
                            </a></span>
                        </div>
                    </div>
                    <div class="security-detail">
                        <div class="row">
                            <div class="col-12 col-md-12 col-lg-8">
                                <div class="profile-password security-item rcof-item">
                                    <div class="tab-content" id="myTabContent">
                                        <div class="rcof-heading">
                                            <h2>Choose currency and calculate RCOF token price</h2>
                                            <p>You can buy our RCOF token using the currency choices stated below to become
                                                a part of our project. </p>
                                        </div>
                                        <div class="tab-details">
                                            <form action="" class="form">
                                                <div class="row">
                                                    <div class="col-12 col-md-6 col-lg-6">
                                                        <div class="mb-3">
                                                            <label for="fname" class="form-label">Select
                                                                cryptocurrency</label>
                                                            <select name="" id="" class="form-select">
                                                                <option>Choose cryptocurrency </option>
                                                                <option>Bitcoin</option>
                                                                <option>Ethereum</option>
                                                                <option>BNB</option>
                                                                <option>Solana</option>
                                                                <option>XRP</option>
                                                                <option>Dogecoin</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div class="col-12 col-md-6 col-lg-6">
                                                        <div class="mb-3">
                                                            <label for="amount" class="form-label">Enter amount in
                                                                USD</label>
                                                            <input type="number" class="form-control" id="amount"
                                                                placeholder="Amount (USD)" />
                                                        </div>
                                                    </div>
                                                    <div class="col-12 col-md-6 col-lg-6">
                                                        <div class="mb-3">
                                                            <label for="amount" class="form-label">Crypto amount</label>
                                                            <input type="number" class="form-control" id="amount"
                                                                placeholder="Enter amount" />
                                                        </div>
                                                    </div>
                                                    <div class="col-12 col-md-6 col-lg-6">
                                                        <div class="mb-3">
                                                            <label for="mno" class="form-label">Mobile Number</label>
                                                            <input type="tel" class="form-control" id="mno"
                                                                value="12345 15234" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="form-check d-flex justify-content-center">
                                                    <input class="form-check-input" type="checkbox" value=""
                                                        id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        I read and agree to RCOF <a href="#">token purchase agreement</a>
                                                        and <a href="#"> privacy policy. </a>
                                                    </label>
                                                </div>
                                                <div class="rcof-button">
                                                    <a href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                                        Make purchase 
                                                    </a>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-md-12 col-lg-4">
                                <div class="security-item">
                                    <div class="token-balance">
                                        <div class="token-img">
                                            <img src={Token} alt="" class="img-fluid" />
                                        </div>
                                        <div class="token-detail">
                                            <h2 class="title">Token balance</h2>
                                            <p class="description">0.00 RCOF</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="security-item">
                                    <div class="sales-item">
                                        <div class="sales-heading">
                                            <p>Sales End in</p>
                                            <p>Stage 1 <span>RUNNING</span></p>
                                        </div>
                                        <div class="clock-container d-flex align-items-center justify-content-between">
                                            <div class="clock-col text-center">
                                                <div class="clock-days clock-timer">{days}</div>
                                                <div class="clock-label label-days">
                                                    Days
                                                </div>
                                            </div>
                                            <div class="clock-col text-center">
                                                <div class="clock-hours clock-timer">{hours}</div>
                                                <div class="clock-label label-hour">
                                                    Hours
                                                </div>
                                            </div>
                                            <div class="clock-col text-center">
                                                <div class="clock-minutes clock-timer">{minutes}</div>
                                                <div class="clock-label label-minutes">
                                                    Minutes
                                                </div>
                                            </div>
                                            <div class="clock-col text-center">
                                                <div class="clock-seconds clock-timer">{seconds}</div>
                                                <div class="clock-label label-seconds">
                                                    Seconds
                                                </div>
                                            </div>
                                        </div>
                                        <div class="sales-progress">
                                            <h2>1 RCOF = 0.00 USD</h2>
                                            <p>1 USD = 0.00 RCOF</p>
                                        </div>
                                        <div class="sales-progressbar">
                                            <h2 class="title">Token sale progress</h2>
                                            <div class="d-flex align-items-center justify-content-between">
                                                <div class="raised">
                                                    <p>raised amount</p>
                                                    <span>0.00 RCOF</span>
                                                </div>
                                                <div class="raised">
                                                    <p>raised amount</p>
                                                    <span>0.00 RCOF</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="progressbar-item">
                                            {/* <div id="price-display">$50</div> */}
                                            <div id="progress-bar">
                                                <input type="range" id="price-slider" min="0" max="100" value="50" step="1" oninput="adjustPrice(this.value)" />
                                                <div id="progress"></div>
                                                <div id="thumb"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* </div> */}
        </section>
    )
}

export default BuyTokens