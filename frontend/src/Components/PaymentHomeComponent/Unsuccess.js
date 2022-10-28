import React, {Component} from "react";

console.log("Hiii iam here")
export default class Success extends Component {
    render() {
        return (
            <div>
                <div className="container">

                    <div className="alert alert-success">
                        <strong> Payment Success!</strong> Thanks for Using <a href="#" className="alert-link">PayGo</a>.
                    </div>
                </div>
            </div>
        );
    }
}