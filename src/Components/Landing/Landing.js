import React, { Component } from "react";

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

                        <div className="number_desktop">1-855-931-1230</div>

                        <button type='' className='number_mobile'>
                            <a
                                data-replaceable-phone-dialable=""
                                className="footer_number"
                                href="tel:1-855-931-1230"
                            >
                                <span className="">1-855-931-1230</span>
                            </a>
                        </button>
                    </div>
                    <div className="cta">
                        <img className="shield" src="https://i.imgur.com/BJgdGv5.png" alt="shied icon" />
                        <h1>Make Sure You're Protected</h1>
                    </div>
                </div>
            </div>
        );
    }
}
