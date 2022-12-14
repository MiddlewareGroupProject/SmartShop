import React, { Component } from "react";

export default class Payed extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="alert alert-success">
            <strong> Payment Success!</strong> Thanks for Using{" "}
            <a href="#" className="alert-link">
              PayGo
            </a>
            .
          </div>
          <div class="alert alert-success" role="alert">
            <h4 class="alert-heading">Confirmation</h4>
            <hr />
            <p>
              A Confirmation Email Is Sent To Your Email Address And Message Is
              Sent To Your Mobile.
            </p>
            <hr />
          </div>
        </div>
      </div>
    );
  }
}
