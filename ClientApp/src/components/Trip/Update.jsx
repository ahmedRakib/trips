import React, {Component} from 'react';
import axios from 'axios'

export class Update extends Component{
    constructor(props){
        super(props);

        this.onChangeName = this.onChangeName.bind(this); 
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDateStarted = this.onChangeDateStarted.bind(this);
        this.onChangeDateCompleted = this.onChangeDateCompleted.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state={
            name: '',
            description: '',
            dateStarted: null,
            dateCompleted: null,
        }
    }

    componentDidMount(){
        const  {id} = this.props.match.params;
        console.log("id" + id);

        if(id){
            axios.get("api/trip/" + id).then( res => {
                const response = res.data;
                this.setState({
                    name: response.name,
                    description: response.description,
                    dateStarted: response.dateStarted,
                    dateCompleted: response.dateCompleted
                })
         
            })
        }
    }

    onChangeName(e){
        this.setState({name : e.target.value})
    }

    onChangeDescription(e){
        this.setState({description : e.target.value})
    }

    onChangeDateStarted(e){
        this.setState({dateStarted : e.target.value})
    }

    onChangeDateCompleted(e){
        this.setState({dateCompleted : e.target.value})
    }

    onSubmit(e){
        e.preventDefault();
        const { history } = this.props;
        const  {id} = this.props.match.params;

        const tripObj = {
            Id: Math.floor(Math.random()*1000),
            name: this.state.name,
            description: this.state.description,
            dateStarted: this.state.dateStarted,
            dateCompleted: this.state.dateCompleted
        }

        axios.put("api/trip/" + id, tripObj).then( result => {
            history.push("/trips")
        })
    }

    render(){
        return(
            <div className="trip-form" >
                <h3>Add new trip</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Trip name:  </label>
                        <input 
                          type="text" 
                          className="form-control" 
                          value = {this.state.name}
                          onChange={this.onChangeName}
                         />
                    </div>
                    <div className="form-group">
                        <label>Trip description: </label>
                        <textarea 
                        type="text"  
                        className="form-control"
                        value = {this.state.description}
                        onChange={this.onChangeDescription}
                        />
                    </div>
                    <div className="row">
                        <div className="col col-md-6 col-sm-6 col-xs-12">
                            <div className="form-group">
                                <label>Date of start:  </label>
                                <input 
                                  type="date" 
                                  className="form-control" 
                                  value = {this.state.dateStarted}
                                  onChange={this.onChangeDateStarted}
                                />
                            </div>
                        </div>
                        <div className="col col-md-6 col-sm-6 col-xs-12">
                          <div className="form-group">
                            <label>Date of completion:  </label>
                            <input 
                                type="date" 
                                className="form-control" 
                                value = {this.state.dateCompleted}
                                onChange={this.onChangeDateCompleted}
                            />
                            </div>
                        </div>
                    </div>
                    
                    <br />
                    <div className="form-group">
                        <input type="submit" value="Update trip" className="btn btn-primary"/>
                        {/* <input type="submit" value="Add trip" className="btn btn-primary"/> */}
                    </div>
                </form>
            </div>
        );
    }

}