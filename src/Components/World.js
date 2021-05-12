import React, { Component } from 'react';
import IndWor from './IndWor.css';
import {Card} from 'react-bootstrap';
import Axios from 'axios';
import ContryData from './ContryData'
export default class World extends Component {
    constructor(){
        super();
        this.state={
            cases:0,
            deaths:0,
            recovered:0
        }
    }

    componentDidMount(){
        Axios.get("https://coronavirus-19-api.herokuapp.com/all").then(response=>{
      
        this.setState({cases:response.data.cases})
        this.setState({deaths:response.data.deaths})
        this.setState({recovered:response.data.recovered})
        })
    }
    render() {
        return (
            
            <div className="row ml-5" >
<div className="col-md-4">
<br></br>
<Card  className="bg-info">
  <Card.Body  className="text-center" >
    <Card.Title>Total cases</Card.Title>
    <h3>{this.state.cases}</h3>
        <Card.Text>

        </Card.Text>
</Card.Body>
</Card>
</div>
<div className="col-md-4">
<br></br>
<Card  className="bg-danger">
  <Card.Body  className="text-center" >
    <Card.Title>Deaths</Card.Title>
    <h3>{this.state.deaths}</h3>
        <Card.Text>

        </Card.Text>
</Card.Body>
</Card>
</div>
<div className="col-md-4">
<br></br>
<Card  className="bg-success">
  <Card.Body  className="text-center" >
    <Card.Title>Recovered</Card.Title>
    <h3>{this.state.recovered}</h3>
        <Card.Text>

        </Card.Text>
</Card.Body>
</Card>
</div>
<div>
<br></br>

<h3>LIST OF COUNTRYS IN WORLD</h3>
                <ContryData/>
                </div>       </div>
        )
    }
}
