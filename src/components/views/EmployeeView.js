import { Link } from "react-router-dom";

const EmployeeView = (props) => {
  const {employee, editTask, allTasks} = props;
  let assignedTasks = allTasks.filter(task => task.employeeId===employee.id);
  let availableTasks = allTasks.filter(task => task.employeeId!==employee.id);

  return (
    <div>
      <nav class="navMenu">
        <a href="http://localhost:3000/">Home</a>
        <a href="http://localhost:3000/employees">Employees</a>
        <a href="http://localhost:3000/tasks">Tasks</a>
        <div class="dot"></div>
      </nav>

      <h1 class = "dynamic-text-shadow">{employee.firstName + " " + employee.lastName}</h1>
      <h3 class = "dynamic-text-shadow">{employee.department}</h3>
      <div style={{display: "flex", flexDirection: "row", justifyContent: "space-evenly"}}>
        <div><h3>Assigned tasks:</h3>
        {assignedTasks.map( task => {
          return (
            <blockquote>
              <div key={task.id}>
              <Link to={`/task/${task.id}`}>
                <h4>{task.description}</h4>
              </Link>
              <br/>
              <button onClick={() => editTask({id:task.id, employeeId: null})}>Remove from</button>
              </div>
            </blockquote>
          );
        })}</div>
        <div><h3>Available tasks:</h3>
        {availableTasks.map( task => {
          return (
            <blockquote>
              <div key={task.id}>
              <Link to={`/task/${task.id}`}>
                <h4>{task.description}</h4>
              </Link>
              <br/>
              <button onClick={() => editTask({id:task.id, employeeId: employee.id})}>Add To</button>
              </div>
            </blockquote>
          );
        })}</div>

      </div>
      <div>
        <Link to={`/editemployee/${employee.id}`}>Edit employee information</Link>
      </div>
    </div>
  );

};

export default EmployeeView;
