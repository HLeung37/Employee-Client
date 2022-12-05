import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { fetchTaskThunk, editTaskThunk } from '../../store/thunks';


class EditTaskContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
          description: "",
          priorityLevel: 0,
          employeeId: null,
          redirect: false,
          redirectId: null
        };
    }

    componentDidMount() {
        //getting task ID from url
        this.props.fetchTask(this.props.match.params.id);
        this.setState({
            description: this.state.description,
            priorityLevel: this.state.priorityLevel,
            employeeId: this.state.employeeId,
        });
      }

    handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    }

    handleSubmit = event => {
        event.preventDefault();
        //get new info for task from form input
        let task = {
            id: this.props.task.id,
            description: this.state.description,
            priorityLevel: this.state.priorityLevel,
            employeeId: this.state.employeeId,
        };

        this.props.editTask(task);

        this.setState({
          redirect: true,
          redirectId: this.props.task.id
        });

    }

    componentWillUnmount() {
        this.setState({redirect: false, redirectId: null});
    }

    render() {
      //go to single task view of the edited task
        if(this.state.redirect) {
          return (<Redirect to={`/task/${this.state.redirectId}`}/>)
        }

        return (
            <form style={{textAlign: 'center'}} onSubmit={(e) => this.handleSubmit(e)}>
            <label style= {{color:'#11153e', fontWeight: 'bold'}}>Description: </label>
            <input type="text" name="description" value={this.state.description} onChange ={(e) => this.handleChange(e)}/>
            <br/>

            <label style={{color:'#11153e', fontWeight: 'bold'}}>Priority Level: </label>
            <input type="text" name="priorityLevel" value={this.state.priorityLevel} onChange={(e) => this.handleChange(e)}/>
            <br/>

            <label style={{color:'#11153e', fontWeight: 'bold'}}>Assign: </label>
            <input type="text" name="employeeId" value={this.state.employeeId} onChange={(e) => this.handleChange(e)} />
            <br/>

            <button type="submit">
              Submit
            </button>

          </form>
        )
    }
}

// map state to props
const mapState = (state) => {
    return {
      task: state.task,
    };
  };

const mapDispatch = (dispatch) => {
    return({
        editTask: (task) => dispatch(editTaskThunk(task)),
        fetchTask: (id) => dispatch(fetchTaskThunk(id)),

    })
}

export default connect(mapState, mapDispatch)(EditTaskContainer);
