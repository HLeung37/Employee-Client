import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import NewTaskView from '../views/NewTaskView';
import { addTaskThunk } from '../../store/thunks';


class NewTaskContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
          description: "",
          priorityLevel: 0,
          employeeId: null,
          status: false,
          redirect: false,
          redirectId: null
        };
    }

    handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    }

    handleSubmit = async event => {
        event.preventDefault();
        //dont need ID because the task has not been created yet
        let task = {
            description: this.state.description,
            priorityLevel: this.state.priorityLevel,
            employeeId: this.state.employeeId,
            status: false,
        };

        let newTask = await this.props.addTask(task);

        this.setState({
          description: "",
          priorityLevel: 0,
          employeeId: null,
          status: false,
          redirect: true,
          redirectId: newTask.id
        });
    }

    componentWillUnmount() {
        this.setState({redirect: false, redirectId: null});
    }

    render() {
      //go to single task view of newly created task
        if(this.state.redirect) {
          return (<Redirect to={`/task/${this.state.redirectId}`}/>)
        }
        return (
          <NewTaskView
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        );
    }
}

const mapDispatch = (dispatch) => {
    return({
        addTask: (task) => dispatch(addTaskThunk(task)),
    })
}

export default connect(null, mapDispatch)(NewTaskContainer);
