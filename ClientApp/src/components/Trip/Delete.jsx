import React, { Component } from "react";
import axios from "axios";

export  class Delete extends Component {
  constructor(props) {
    super(props);

    this.onCancel = this.onCancel.bind(this);
    this.onConfirmation = this.onConfirmation.bind(this);

    this.state = {
      name: "",
      description: "",
      dateStarted: null,
      dateCompleted: null,
    };
  }

  //

  componentDidMount() {
    const { id } = this.props.match.params;

    axios.get("api/trip/" + id).then((trip) => {
      const response = trip.data;

      this.setState({
        name: response.name,
        description: response.description,
        dateStarted: new Date(response.dateStarted).toISOString().slice(0, 10),
        dateCompleted: this.state.dateCompleted
          ? new Date(this.state.dateCompleted).toISOString()
          : null,
      });
    });
  }

  onConfirmation(e) {
    e.preventDefault();
    const { id } = this.props.match.params;
    const { history } = this.props;
    axios.delete("trip/api/" + id).then((res) => {
      history.push("/trips");
    });
  }

  onCancel(e){
    e.preventDefault();
    const {history} = this.props;
    history.push('/trips');
  }

  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h2>Delete trip confirmation</h2>
        <div class="card">
          <div class="card-body">
            <h4 class="card-title"> {this.state.name} </h4>
            <p class="card-text"> {this.state.description} </p>
            <button onClick={this.onCancel} class="btn btn-default">
              Cancel
            </button>
            <button onClick={this.onConfirmation} class="btn btn-danger">
              Confirm
            </button>
          </div>
        </div>
      </div>
    );
  }
}
