import React from "react";
import Coin1 from "@/assets/image/coin_1.png"
import Group344 from "@/assets/image/Group-344.png"
import Group366 from "@/assets/image/Group-366.png"
import Eth from "@/assets/image/Crypto_ethereum-1.png"
import Eth1 from "@/assets/image/Crypto_ethereum-1-(1).png"
import Eth2 from "@/assets/image/Crypto_ethereum-1-(2).png"
import { Icon } from "@iconify/react";

const Dashboard = () => {
  return (<>
    <section id="dashboard" class="mt-4">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2 class="dash-title">Dashboard</h2>
                </div>
                <div class="col-12 col-md-12 col-lg-3">
                    <div class="dash_box p-3 mb-4">
                        <div class="token_balance_box text-center ">
                            <img src={Coin1} alt="" />
                            <span class="mt-3">Token balance</span>
                            <p class="token_balance mb-0">0.00 RCOF</p>
                        </div>
                    </div>
                    <div class="dash_box p-3">
                        <div class="account_status_box text-center ">
                            <img src={Group344} alt="" />
                            <p>Your account status</p>
                            <button type="submit" class="btn theme_btn f-14">Email verified</button>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-12 col-lg-5">
                    <div class="dash_box p-3 h-100">
                        <div class="buy_token_box">
                            <p class="buy_head text-center ">Buy RCOF Tokens</p>
                            <div class="buy_token_box_form">
                                <form>
                                    <div class="input_box">
                                        <label for="exampleInputEmail1" class="form-label f-14">Select
                                            cryptocurrency</label>
                                        <input type="text" class="form-control f-14" placeholder="Choose cryptocurrency"
                                            id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                    <div class="input_box">
                                        <label for="exampleInputPassword1" class="form-label f-14">Enter amount in
                                            USD</label>
                                        <input type="number" class="form-control f-14" placeholder="Amount (USD)"
                                            id="exampleInputPassword1" />
                                    </div>
                                    <div class="input_box">
                                        <label for="exampleInputEmail1" class="form-label f-14">Crypto amount</label>
                                        <input type="number" class="form-control f-14" placeholder="Enter amount"
                                            id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                    <div class="input_box">
                                        <label for="exampleInputPassword1" class="form-label f-14">Total RCOF tokens you
                                            wil
                                            recive</label>
                                        <input type="number" class="form-control f-14" placeholder="RCOF tokens"
                                            id="exampleInputPassword1" />
                                    </div>
                                    <div class="form-check mt-4 mb-4">
                                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                        <label class="form-check-label f-14" for="exampleCheck1">I read and agree
                                            to RCOF <a href="">token purchase agreement</a> and <a href="">privacy
                                                policy.</a></label>
                                    </div>
                                    <button type="submit" class="btn theme_btn f-14 w-100 ">Purchase Token Now
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-12 col-lg-4">
                    <div class="dash_box p-3 h-100">
                        <div class="stage mb-2 d-flex alien-item-center justify-content-end ">
                            <p class="f-14">STAGE 1</p>
                            <span>RUNNING</span>
                        </div>
                        <div id="countdown" class="mb-5">
                            <div id='tiles'></div>
                            <div class="labels ">
                                <li>Days</li>
                                <li>Hours</li>
                                <li>Mins</li>
                                <li>Secs</li>
                            </div>
                        </div>
                        <div class="stage_con mb-4">
                            <h2 class="mb-1">1 RCOF = 0.00 USD</h2>
                            <p class="f-14">1 USD = 0.00 RCOF</p>
                        </div>
                        <div class="sale_progress pt-2">
                            <h4 class="text-uppercase mb-3 f-14">Token sale progress</h4>
                            <div class="sale_progress_amount mb-2 d-flex justify-content-between">
                                <div class="text-uppercase">
                                    <p class="mb-1">raised amount</p>
                                    <span>0.00 RCOF</span>
                                </div>
                                <div class="text-uppercase text-end">
                                    <p class="mb-1">raised amount</p>
                                    <span>0.00 RCOF</span>
                                </div>
                            </div>
                            <div id="progress-bar">
                                <input type="range" id="price-slider" min="0" max="100" value="50" step="1" oninput="adjustPrice(this.value)" />
                                <div id="progress"></div>
                                <div id="thumb"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-12 col-md-12 col-lg-8">
                    <div class="dash_box d-flex">
                        <div class="referal-link-box d-flex align-items-center p-4">
                            <img src={Group366} alt="" />
                            <p class="mb-0 ms-3">Your Referral Link</p>
                        </div>
                        <div class="referal-link-box-link d-flex align-items-center justify-content-between p-4">
                            <p class="mb-0 f-14"><a href=""> </a></p>
                            <button class="btn theme_btn f-14">Copy</button>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-12 col-lg-4">
                    <div class="dash_box h-100 p-4 d-flex align-items-center">
                        <div class="w-100">
                            <div class="input_box insert-wallet position-relative">
                                <input type="text" class="form-control f-14" placeholder="Insert ERC20 Wallet"
                                    id="exampleInputPassword1" />
                                <button type="submit" class="btn">
                                    <Icon icon="ep:right" width={20} />
                                    {/* <i class="fa-solid fa-arrow-right"></i> */}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="contribution" class="my-4">
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-6 col-lg-3">
                    <div class="dash_box p-4  d-flex align-items-center justify-content-center">
                        <p class="contri mb-0">Your Contribution In</p>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-3">
                    <div class="dash_box p-4 ">
                        <div class="crypto_box d-flex align-items-center">
                            <div class="crypto_box_img">
                                <img src={Eth} alt="" class="me-1" />
                            </div>
                            <div class="crypto_boc_con ms-3">
                                <p class="f-14 mb-1 crypto_box_name">ETH</p>
                                <h4 id="eth">0.00</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-3">
                    <div class="dash_box p-4 ">
                        <div class="crypto_box d-flex align-items-center">
                            <div class="crypto_box_img">
                                <img src={Eth1} alt="" class="me-1" />
                            </div>
                            <div class="crypto_boc_con ms-3">
                                <p class="f-14 mb-1 crypto_box_name">USDT</p>
                                <h4 id="usdt">0.00</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-3">
                    <div class="dash_box p-4 ">
                        <div class="crypto_box d-flex align-items-center">
                            <div class="crypto_box_img">
                                <img src={Eth2} alt="" class="me-1" />
                            </div>
                            <div class="crypto_boc_con ms-3">
                                <p class="f-14 mb-1 crypto_box_name">BTC</p>
                                <h4 id="btc">0.00</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>



    <section id="transactions" class="mb-5">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="dash_box p-4">
                        <div class="transaction_tab d-flex justify-content-between">
                            <h5>Transactions</h5>
                            <a href="transaction.html">
                            <div class="view_all d-flex align-items-center">
                                <span class="f-14 me-3 text-light">View All</span>
                                <button type="submit" class="btn text-light">
                                    <Icon icon="ep:right" width={20} />
                                </button>
                            </div>
                        </a>
                        </div>
                        <div class="table-responsive">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">SN</th>
                                        <th scope="col">Tranx ID</th>
                                        <th scope="col">Date</th>
                                        <th scope="col">Tokens</th>
                                        <th scope="col">AMOUNT</th>
                                        <th scope="col">BASE AMOUNT</th>
                                        <th scope="col">STATUS</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>TNX006557</td>
                                        <td>24/03/2024</td>
                                        <td>+14000 RCOF</td>
                                        <td>4953.05 ETH</td>
                                        <td>57.5 USD</td>
                                        <td><span class="confirm">Confirm</span></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>TNX006557</td>
                                        <td>24/03/2024</td>
                                        <td>+14000 RCOF</td>
                                        <td>4953.05 ETH</td>
                                        <td>57.5 USD</td>
                                        <td><span class="pending">pending</span></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>TNX006557</td>
                                        <td>24/03/2024</td>
                                        <td>+14000 RCOF</td>
                                        <td>4953.05 ETH</td>
                                        <td>57.5 USD</td>
                                        <td><span class="confirm">Confirm</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

  </>);
};

export default Dashboard;
