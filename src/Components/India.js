import React, { Component } from 'react';
import Axios from 'axios';
import IndWor from './IndWor.css';
import {Card} from 'react-bootstrap';
import StateData from './StateData';
export default class India extends Component {
  constructor(){
    super();
    this.state={
        active:0,
        deaths:0,
        recovered:0,
        todayCases:0
      }
}

componentDidMount(){
    Axios.get("https://coronavirus-19-api.herokuapp.com/countries/india").then(response=>{
  
    this.setState({active:response.data.active})
    this.setState({deaths:response.data.deaths})
    this.setState({recovered:response.data.recovered})
    this.setState({todayCases:response.data.todayCases})
    })
}
  render() {
        return (
            <div className="row ml-5" >
            <div className="col-md-12 ">
            <img src="https://www.countryflags.io/in/shiny/64.png"></img>
                <h3>INDIA</h3>
                </div>
  <div className="col-md-3">
  
<Card  className="bg-info">
  <Card.Body  className="text-center" >
    <Card.Title>Total cases</Card.Title>
    <h3>{this.state.todayCases}</h3>
        <Card.Text>

        </Card.Text>
</Card.Body>
</Card>
</div>
  <div className="col-md-3 ">
<Card  className="bg-warning">
<Card.Body  className="text-center" >
    <Card.Title>Active cases</Card.Title>
    <h3>{this.state.active}</h3>
        <Card.Text>

        </Card.Text>
</Card.Body>
</Card>
</div>
  <div className="col-md-3 ">
<Card  className="bg-success">
<Card.Body  className="text-center" >
    <Card.Title>Recoverd</Card.Title>
    <h3>{this.state.recovered}</h3>
        <Card.Text>

        </Card.Text>
</Card.Body>
</Card>
</div>
  <div className="col-md-3 ">
<Card  className="bg-danger">
  <Card.Body  className="text-center" >
    <Card.Title>Death</Card.Title>
    <h3>{this.state.deaths}</h3>
        <Card.Text>

        </Card.Text>
</Card.Body>
</Card>
</div>
             <div className="col-md-12 ">
                <StateData/>
                </div>


            </div>
        )
    }
}
