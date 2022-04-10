import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {getAllTrips} from '../../actions/tripAction.js'

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
         this.props.getAllTrips();
    }

    componentDidUpdate(prevProps){
        if(prevProps.trips.data !== this.props.trips.data)
        {
            this.setState({trips: this.props.trips.data})
        }
    }

    handleUpdate(id){
        const {history} = this.props;
        history.push("update/"+ id);
    }

    handleDelete(id){
        const { history } = this.props;
        history.push("delete/" + id);
    }
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
        let content = this.props.trips.loading ?
        (
            <p> Loading ...</p>
        ) : (
            this.state.trips.length && this.renderAllTripsTable(this.state.trips)
        );
        return(
          <div>
          <h1>All trips</h1>
          {content}
          </div> 
        );
    }
}

const mapStateToProps = ({trips}) => ({
    trips
});

export default connect(mapStateToProps, { getAllTrips})(Trips);