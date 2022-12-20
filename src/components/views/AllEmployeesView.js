import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AllEmployeesView = (props) => {
  let {allEmployees ,deleteEmployee} = props;

  if (!allEmployees.length) {
    return (
      <div>
        <p>There are no employees.</p>
        <Link to={`/newemployee`}>
          <button>Add New Employee</button>
        </Link>
      </div>);
  }

  return (
    <div>
      <nav class="navMenu">
        <a href="http://localhost:3000/">Home</a>
        <a href="http://localhost:3000/employees">Employees</a>
        <a href="http://localhost:3000/tasks">Tasks</a>
        <div class="dot"></div>
      </nav>
      {allEmployees.map((employee) => {
        let name = employee.firstName + " " + employee.lastName;
        return (
          <div class = "width">
            <blockquote>
              <div key={employee.id}>
                <Link to={`/employee/${employee.id}`}>
                  <h3>{name}</h3>
                </Link>
                <p>{employee.department}</p>
                <button onClick={() => deleteEmployee(employee.id)}>Delete</button>
              </div>
            </blockquote>
          </div>
        );

      })}
      <Link to={`/newemployee`}>
        <button>Add New Employee</button>
      </Link>
    </div>
  );
};

AllEmployeesView.propTypes = {
  allEmployees: PropTypes.array.isRequired,
};

export default AllEmployeesView;
