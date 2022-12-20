import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { fetchEmployeeThunk, editEmployeeThunk } from '../../store/thunks';


class EditEmployeeContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
          firstName: "",
          lastName: "",
          department: "",
          redirect: false,
          redirectId: null
        };
    }

    componentDidMount() {
        //getting employee ID from url
        this.props.fetchEmployee(this.props.match.params.id);
        this.setState({
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          department: this.state.department,
        });
      }

    handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    }

    handleSubmit = event => {
        event.preventDefault();
        //get new info for employee from form input
        let employee = {
            id: this.props.employee.id,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            department: this.state.department,
        };
        this.props.editEmployee(employee);

        this.setState({
          redirect: true,
          redirectId: this.props.employee.id
        });

    }

    componentWillUnmount() {
        this.setState({redirect: false, redirectId: null});
    }

    render() {
      //go to single employee view of the edited employee
        if(this.state.redirect) {
          return (<Redirect to={`/employee/${this.state.redirectId}`}/>)
        }

        return (
          <div>
            <nav class="navMenu">
              <a href="http://localhost:3000/">Home</a>
              <a href="http://localhost:3000/employees">Employees</a>
              <a href="http://localhost:3000/tasks">Tasks</a>
              <div class="dot"></div>
            </nav>
            <br></br><br></br>
            <form onSubmit={(e) => this.handleSubmit(e)}>
            <label>First Name: </label>
            <input type="text" name="firstName" value={this.state.firstName} onChange ={(e) => this.handleChange(e)}/>
            <br/>

            <label>Last Name: </label>
            <input type="text" name="lastName" value={this.state.lastName} onChange={(e) => this.handleChange(e)}/>
            <br/>

            <label>Department: </label>
            <input type="text" name="department" value={this.state.department} onChange={(e) => this.handleChange(e)} />
            <br/>

            <button type="submit">
              Submit
            </button>

          </form>
        </div>
        )
    }
}

// map state to props
const mapState = (state) => {
    return {
      employee: state.employee,
    };
  };

const mapDispatch = (dispatch) => {
    return({
        editEmployee: (employee) => dispatch(editEmployeeThunk(employee)),
        fetchEmployee: (id) => dispatch(fetchEmployeeThunk(id)),

    })
}

export default connect(mapState, mapDispatch)(EditEmployeeContainer);
