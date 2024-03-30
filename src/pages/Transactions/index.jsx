import React from 'react'

const Transactions = () => {
  return (
    <section id="transactions" class="mt-4">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="transaction_tab my-3 d-flex justify-content-between">
                        <h5>Transactions</h5>
                        <div class="input_box insert-wallet position-relative">
                            <input type="text" class="form-control f-14" placeholder="Search" id="exampleInputPassword1" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="dash_box p-4 pt-2">
                        <div class="table-responsive">
                            <table id="example" class="display" style={{width:"100%"}}>
                                <thead>
                                    <tr>
                                        <th>SN</th>
                                        <th>TRANX ID</th>
                                        <th>DATE</th>
                                        <th>TOKENS</th>
                                        <th>AMOUNT</th>
                                        <th>BASE AMOUNT</th>
                                        <th>STATUS</th>
                                        <th>ACTION</th>
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
                                        <td><span class="waiting">Waiting</span></td>
                                        <td><button type="submit" class="btn theme_btn f-14">Pay
                                                    Now</button></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>TNX006557</td>
                                        <td>24/03/2024</td>
                                        <td>+14000 RCOF</td>
                                        <td>4953.05 ETH</td>
                                        <td>57.5 USD</td>
                                        <td><span class="pending">pending</span></td>
                                        <td>-</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>TNX006557</td>
                                        <td>24/03/2024</td>
                                        <td>+14000 RCOF</td>
                                        <td>4953.05 ETH</td>
                                        <td>57.5 USD</td>
                                        <td><span class="confirm">Confirm</span></td>
                                        <td>-</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">4</th>
                                        <td>TNX006557</td>
                                        <td>24/03/2024</td>
                                        <td>+14000 RCOF</td>
                                        <td>4953.05 ETH</td>
                                        <td>57.5 USD</td>
                                        <td><span class="pending">pending</span></td>
                                        <td>-</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">5</th>
                                        <td>TNX006557</td>
                                        <td>24/03/2024</td>
                                        <td>+14000 RCOF</td>
                                        <td>4953.05 ETH</td>
                                        <td>57.5 USD</td>
                                        <td><span class="confirm">Confirm</span></td>
                                        <td><a href="#"><button type="submit" class="btn theme_btn f-14">Pay
                                                    Now</button></a></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">6</th>
                                        <td>TNX006557</td>
                                        <td>24/03/2024</td>
                                        <td>+14000 RCOF</td>
                                        <td>4953.05 ETH</td>
                                        <td>57.5 USD</td>
                                        <td><span class="pending">pending</span></td>
                                        <td>-</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">7</th>
                                        <td>TNX006557</td>
                                        <td>24/03/2024</td>
                                        <td>+14000 RCOF</td>
                                        <td>4953.05 ETH</td>
                                        <td>57.5 USD</td>
                                        <td><span class="confirm">Confirm</span></td>
                                        <td><a href="#"><button type="submit" class="btn theme_btn f-14">Pay
                                                    Now</button></a></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">8</th>
                                        <td>TNX006557</td>
                                        <td>24/03/2024</td>
                                        <td>+14000 RCOF</td>
                                        <td>4953.05 ETH</td>
                                        <td>57.5 USD</td>
                                        <td><span class="pending">pending</span></td>
                                        <td>-</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">9</th>
                                        <td>TNX006557</td>
                                        <td>24/03/2024</td>
                                        <td>+14000 RCOF</td>
                                        <td>4953.05 ETH</td>
                                        <td>57.5 USD</td>
                                        <td><span class="confirm">Confirm</span></td>
                                        <td>-</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">10</th>
                                        <td>TNX006557</td>
                                        <td>24/03/2024</td>
                                        <td>+14000 RCOF</td>
                                        <td>4953.05 ETH</td>
                                        <td>57.5 USD</td>
                                        <td><span class="pending">pending</span></td>
                                        <td>-</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">11</th>
                                        <td>TNX006557</td>
                                        <td>24/03/2024</td>
                                        <td>+14000 RCOF</td>
                                        <td>4953.05 ETH</td>
                                        <td>57.5 USD</td>
                                        <td><span class="confirm">Confirm</span></td>
                                        <td><a href="#"><button type="submit" class="btn theme_btn f-14">Pay
                                                    Now</button></a></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">12</th>
                                        <td>TNX006557</td>
                                        <td>24/03/2024</td>
                                        <td>+14000 RCOF</td>
                                        <td>4953.05 ETH</td>
                                        <td>57.5 USD</td>
                                        <td><span class="pending">pending</span></td>
                                        <td>-</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">13</th>
                                        <td>TNX006557</td>
                                        <td>24/03/2024</td>
                                        <td>+14000 RCOF</td>
                                        <td>4953.05 ETH</td>
                                        <td>57.5 USD</td>
                                        <td><span class="confirm">Confirm</span></td>
                                        <td><a href="#"><button type="submit" class="btn theme_btn f-14">Pay
                                                    Now</button></a></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">14</th>
                                        <td>TNX006557</td>
                                        <td>24/03/2024</td>
                                        <td>+14000 RCOF</td>
                                        <td>4953.05 ETH</td>
                                        <td>57.5 USD</td>
                                        <td><span class="pending">pending</span></td>
                                        <td>-</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">15</th>
                                        <td>TNX006557</td>
                                        <td>24/03/2024</td>
                                        <td>+14000 RCOF</td>
                                        <td>4953.05 ETH</td>
                                        <td>57.5 USD</td>
                                        <td><span class="pending">pending</span></td>
                                        <td>-</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">16</th>
                                        <td>TNX006557</td>
                                        <td>24/03/2024</td>
                                        <td>+14000 RCOF</td>
                                        <td>4953.05 ETH</td>
                                        <td>57.5 USD</td>
                                        <td><span class="confirm">Confirm</span></td>
                                        <td><a href="#"><button type="submit" class="btn theme_btn f-14">Pay
                                                    Now</button></a></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">17</th>
                                        <td>TNX006557</td>
                                        <td>24/03/2024</td>
                                        <td>+14000 RCOF</td>
                                        <td>4953.05 ETH</td>
                                        <td>57.5 USD</td>
                                        <td><span class="pending">pending</span></td>
                                        <td>-</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">18</th>
                                        <td>TNX006557</td>
                                        <td>24/03/2024</td>
                                        <td>+14000 RCOF</td>
                                        <td>4953.05 ETH</td>
                                        <td>57.5 USD</td>
                                        <td><span class="confirm">Confirm</span></td>
                                        <td><a href="#"><button type="submit" class="btn theme_btn f-14">Pay
                                                    Now</button></a></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">19</th>
                                        <td>TNX006557</td>
                                        <td>24/03/2024</td>
                                        <td>+14000 RCOF</td>
                                        <td>4953.05 ETH</td>
                                        <td>57.5 USD</td>
                                        <td><span class="pending">pending</span></td>
                                        <td>-</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">20</th>
                                        <td>TNX006557</td>
                                        <td>24/03/2024</td>
                                        <td>+14000 RCOF</td>
                                        <td>4953.05 ETH</td>
                                        <td>57.5 USD</td>
                                        <td><span class="pending">pending</span></td>
                                        <td>-</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">21</th>
                                        <td>TNX006557</td>
                                        <td>24/03/2024</td>
                                        <td>+14000 RCOF</td>
                                        <td>4953.05 ETH</td>
                                        <td>57.5 USD</td>
                                        <td><span class="confirm">Confirm</span></td>
                                        <td><a href="#"><button type="submit" class="btn theme_btn f-14">Pay
                                                    Now</button></a></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">22</th>
                                        <td>TNX006557</td>
                                        <td>24/03/2024</td>
                                        <td>+14000 RCOF</td>
                                        <td>4953.05 ETH</td>
                                        <td>57.5 USD</td>
                                        <td><span class="pending">pending</span></td>
                                        <td>-</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">23</th>
                                        <td>TNX006557</td>
                                        <td>24/03/2024</td>
                                        <td>+14000 RCOF</td>
                                        <td>4953.05 ETH</td>
                                        <td>57.5 USD</td>
                                        <td><span class="confirm">Confirm</span></td>
                                        <td><a href="#"><button type="submit" class="btn theme_btn f-14">Pay
                                                    Now</button></a></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">24</th>
                                        <td>TNX006557</td>
                                        <td>24/03/2024</td>
                                        <td>+14000 RCOF</td>
                                        <td>4953.05 ETH</td>
                                        <td>57.5 USD</td>
                                        <td><span class="pending">pending</span></td>
                                        <td>-</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">25</th>
                                        <td>TNX006557</td>
                                        <td>24/03/2024</td>
                                        <td>+14000 RCOF</td>
                                        <td>4953.05 ETH</td>
                                        <td>57.5 USD</td>
                                        <td><span class="pending">pending</span></td>
                                        <td>-</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">26</th>
                                        <td>TNX006557</td>
                                        <td>24/03/2024</td>
                                        <td>+14000 RCOF</td>
                                        <td>4953.05 ETH</td>
                                        <td>57.5 USD</td>
                                        <td><span class="confirm">Confirm</span></td>
                                        <td><a href="#"><button type="submit" class="btn theme_btn f-14">Pay
                                                    Now</button></a></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">27</th>
                                        <td>TNX006557</td>
                                        <td>24/03/2024</td>
                                        <td>+14000 RCOF</td>
                                        <td>4953.05 ETH</td>
                                        <td>57.5 USD</td>
                                        <td><span class="pending">pending</span></td>
                                        <td>-</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">28</th>
                                        <td>TNX006557</td>
                                        <td>24/03/2024</td>
                                        <td>+14000 RCOF</td>
                                        <td>4953.05 ETH</td>
                                        <td>57.5 USD</td>
                                        <td><span class="confirm">Confirm</span></td>
                                        <td><a href="#"><button type="submit" class="btn theme_btn f-14">Pay
                                                    Now</button></a></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">29</th>
                                        <td>TNX006557</td>
                                        <td>24/03/2024</td>
                                        <td>+14000 RCOF</td>
                                        <td>4953.05 ETH</td>
                                        <td>57.5 USD</td>
                                        <td><span class="pending">pending</span></td>
                                        <td>-</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">30</th>
                                        <td>TNX006557</td>
                                        <td>24/03/2024</td>
                                        <td>+14000 RCOF</td>
                                        <td>4953.05 ETH</td>
                                        <td>57.5 USD</td>
                                        <td><span class="pending">pending</span></td>
                                        <td>-</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Transactions