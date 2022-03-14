import React, {Component} from 'react';
import axios from 'axios'

export class Trips extends Component 
{
    constructor(props){
        super(props);
        this.state = {
            trips: [],
            loading: true
        }
    }

    componentDidMount(){
         this.populateTrips();
    }

    populateTrips(){
        axios.get("trip").then(res => {
         const response = res.data;
         this.setState({trips: response, loading: false})    
        })
    };

    renderAllTripsTable(trips){
        return(
            <table className="table table-stripped">
                <thead>
                    <tr>
                        <th> Name </th>
                        <th> Description </th>
                        <th> Date Started </th>
                        <th> Date Completed </th>
                        <th> Action </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>a</td>
                        <td>a</td>
                        <td>a</td>
                        <td>a</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>a</td>
                        <td>a</td>
                        <td>a</td>
                        <td>a</td>
                        <td>-</td>
                    </tr>
                </tbody>
            </table>
        )
    }


    render(){
        let content = this.state.loading ? (
            <p>
                Loading ....
            </p>
        ) : (
            this.renderAllTripsTable(this.state.trips)
        )

        return(
          <div>
          <h1>All trips</h1>
          {content}
          </div> 
        );
    }
}