import React, { Component } from 'react';
import Axios from 'axios';
import {Accordion, Card, Button} from 'react-bootstrap';
export default class ContryData extends Component {
    constructor(){
        super();
        this.state={
            contryData:[{}]
        };
    }

    componentDidMount(){
        Axios.get("https://coronavirus-19-api.herokuapp.com/countries").then(response=>{
          console.log(response.data)
        this.setState({contryData:response.data});

        })
    }
    render() {
      let key=Object.keys(this.state.contryData)
      
        return (
            <div>

           
                <Accordion defaultActiveKey="0">
  <Card>
    
    <Accordion.Collapse eventKey="0">
      <Card.Body>
      <table>
  <tr>
    <th>ID</th>
    <th>COUNTRY</th>
    <th>ACTIVE</th>
    <th>CASES</th>
    <th>DEATHS</th>
    <th>RECOVERED</th>
    <th>TOTAL CASES</th>
    <th>TODAYS DEATHS</th>
    <th>TOTAL TESTS</th>
  </tr>
  {
                       this.state.contryData.map((itm,k)=>
                   {
                   return <tr>
   <td>{k}</td>
    <td>{itm.country}</td>
    <td>{itm.active}</td>
    <td>{itm.cases}</td>
    <td>{itm.deaths}</td>
    <td>{itm.recovered}</td>
    <td>{itm.todayCases}</td>
    <td>{itm.todayDeaths}</td>
    <td>{itm.totalTests}</td>
  </tr>
                   })
                   
                   }
      
      
      
      



 
</table>
      
      
      </Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
            </div>
        )
    }
}
