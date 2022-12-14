import React, { Component } from 'react';
import Button from '../PaymentSubcomponents/button';
import {Link, Redirect} from "react-router-dom";

class home extends Component {

  constructor(props){
    super(props);
    this.state = {
      payMethod:'',
      total : ''
    }
  }

  componentDidMount(){
    alert(this.props.match.params.price);
    this.setState({total : this.props.match.params.price});
  }


  changeValue = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }
  onSubmit = (e) => {
    e.preventDefault();
    alert(this.state.payMethod);

      return <Redirect to='./Success'/>

  }

  render() {
    return (
        <div className="container">
         <h1>Please selectYour payment option</h1>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="payMethod" id="flexRadioDefault1"  onChange={this.changeValue} value="mobile"/>
            <label className="form-check-label"  htmlFor="flexRadioDefault1">
            Mobile
          </label></div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="payMethod" id="flexRadioDefault2"onChange={this.changeValue} value="card" />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
            Credit Card
            </label></div>
          <div>


             <Link to ={`/Success/${this.state.payMethod}/${this.state.total}`}> <Button
                  id ={"proceed"}
                  value = {"Proceed"}
                  classname = {"btn btn-outline-info btn-lg"}
                  type = {"submit"}
              /></Link>


          </div>
        </div>

    )
  }
}
export default home;