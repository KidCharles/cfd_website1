import React, { Component } from "react";

import "./Landing.css";

export default class Form extends Component {
    state = {
    };
    render() {
        return (
            <div className="landing">
                <div className="landingWrapper">
                    <div className="leftContent">
                        <h1 className="title">Medicare & Health Insurance is Stressful</h1>
                        <h2 className="subtitle">It doesn't have to be</h2>
                        <p className="body" >For a more CareFree experience, call to have a FREE & EASY health care benefit review with a Licensed Benefits Advisor</p>

                        <div className="number_desktop">555-555-5555</div>

                        <button type='' className='number_mobile'>555-555-5555</button>
                    </div>
                    <div className="rightContent">
                        <img className="shield" src="https://i.imgur.com/BJgdGv5.png" alt="shied icon" />
                        <h1 className="cta">Make Sure You're Protected</h1>
                    </div>
                </div>
                <div>
                    <p className="disclaimer">
                        We are not part of CMS or medicare.govMedicare has neither
                        reviewed nor endorsed the information on this page By contacting
                        us you consent to be contacted via automatic telephone dialing
                        system, by artificial voice and/or pre-recorded message, or by
                        text message at the telephone number you provided above and
                        receive email at the email address you provided above from or on
                        behalf of CareFree Direct, insurance carriers or their agents, and
                        partner companies. You are under no obligation to purchase any
                        goods or services as a result of this action. You understand that
                        consent is not a condition of purchase and you may also receive a
                        quote by contacting us via phone. You may revoke consent at any
                        time. CareFree Direct does not charge you for sending or receiving
                        text messages. Your carrier's message and data rates may apply. By
                        using this form you agree to the terms of our Privacy Policy.
            </p>
                </div>
            </div>
        );
    }
}
