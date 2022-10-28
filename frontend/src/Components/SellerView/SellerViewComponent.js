import React, { Component } from "react";
import axios from "axios";

import CardView from "../CardViewComponent/cardView";

class SellerViewComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addedItems: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/itemDetails")
      .then((res) => {
        console.log(res);
        this.setState({ addedItems: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { addedItems } = this.state;
    return (
      <div className="container">
        <div className="cardViewDiv">
          {addedItems.map((item) => (
            <div className="cardViewSubHome" key={item._id}>
              <CardView
                title={item.title}
                price={item.price}
                id={item._id}
                imgLoc={item.image}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default SellerViewComponent;
