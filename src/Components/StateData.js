import React, { Component } from 'react';
import Axios from 'axios';
import {Accordion, Card, Button} from 'react-bootstrap';
export default class State extends Component {
    constructor(){
        super();
        this.state={
            stateData:{}
        }
    }

    componentDidMount(){
        Axios.get("https://api.covid19india.org/state_district_wise.json").then(response=>{
      console.log(response.data)
        this.setState({stateData:response.data})
        })
    }
    render() {
        let key=Object.keys(this.state.stateData)
        
        return (
            <div>
            <br></br>
                <h3> LIST OF STATES IN INDIA</h3>
                
                {
                    key.map((itm,ky)=>{
                        
                        let districts=this.state.stateData[itm].districtData;

                        let district_key=Object.keys(districts)
                        let total_active=0;
                        let total_confirmed=0;
                        let total_migratedother=0;
                        let total_deceased=0;
                        let total_recovered=0;
                        
                        let districts_lists=[];
                        for (let x in districts){
                        
                        total_active=+districts[x].active;
                        total_confirmed=+districts[x].confirmed;
                        total_migratedother=+districts[x].migratedother;
                        total_deceased=+districts[x].deceased;
                        total_recovered=+districts[x].recovered;
                        let ob=districts[x];
                        ob["district_name"]=x;
                        districts_lists.push(ob);
                        }
                        
                        
                        return(
<Accordion defaultActiveKey="0">
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="{ky}">
      <span>{itm}</span>
      <span className="bg-info text-dark">{total_confirmed}</span>&nbsp;
      <span className="bg-warning text-dark">{ total_active}</span>&nbsp;
      <span className="bg-danger text-dark">{ total_deceased}</span>&nbsp;
      <span className="bg-success text-dark">{total_recovered}</span>
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="{ky}">
      <Card.Body>
      <table>
  <tr>
    <th>DISTRICT</th>
    <th>ACTIVE</th>
    <th>CONFIRMED</th>
    <th>MIGRATED OTHERS</th>
    <th>DECEASED</th>
    <th>RECOVERED</th>
  </tr>

{
  districts_lists.map((itm,ky)=>{
    return(
      <tr>
    <td>{itm.district_name}</td>
    <td>{itm.active}</td>
    <td>{itm.confirmed}</td>
    <td>{itm.migratedother}</td>
    <td>{itm.deceased}</td>
    <td>{itm.recovered}</td>
  </tr>
    )
  })
}
 
    




 
</table>
      
      
      </Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
                            
                        )

                        
                    })
                }

              
            </div>
        )
    }
}
