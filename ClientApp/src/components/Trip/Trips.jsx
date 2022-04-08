import React, {Component} from 'react';
import axios from 'axios'

export class Trips extends Component 
{
    constructor(props){
        super(props);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleDelete = this.handleDelete.bind(this);

        this.state = {
            trips: [],
            loading: false
        }
    }

    componentDidMount(){
         this.populateTrips();
    }

    handleUpdate(id){
        const {history} = this.props;
        history.push("update/"+ id);
    }

    handleDelete(id){
        const { history } = this.props;
        history.push("delete/" + id);
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
                        <td>
                            <div className="form-group">
                                <button onClick= {() => {this.handleUpdate(1)}} className="btn btn-success"> Edit </button>
                            </div>
                            <div className="form-group">
                                <button onClick= {() => {this.handleDelete(1)}} className="btn btn-danger"> Delete </button>
                            </div>
                        </td>
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