import { Link } from "react-router-dom";

const TaskView = (props) => {
  const { task } = props;
  console.log(task);
  return (
    <div>
      <nav class="navMenu">
        <a href="http://localhost:3000/">Home</a>
        <a href="http://localhost:3000/employees">Employees</a>
        <a href="http://localhost:3000/tasks">Tasks</a>
        <div class="dot"></div>
      </nav>
      <h1>{task.description}</h1>
      <h3>{task.employee ? <Link to = {`/employee/${task.employee.id}`}>{"Employee: " + task.employee.firstName + " " + task.employee.lastName}</Link>: "Unassigned"}</h3>
      <br/><br/>
      <Link to={`/edittask/${task.id}`}>Edit task information</Link>
      <br/><br/>
      <Link to={`/tasks`}>View all tasks</Link>
    </div>
  );

};

export default TaskView;
