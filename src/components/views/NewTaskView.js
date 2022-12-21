


const NewTaskView = (props) => {
  const {handleChange, handleSubmit } = props;

  return (
    <div className="root">
      <nav class="navMenu">
        <a href="http://localhost:3000/">Home</a>
        <a href="http://localhost:3000/employees">Employees</a>
        <a href="http://localhost:3000/tasks">Tasks</a>
        <div class="dot"></div>
      </nav>
      <div className="formContainer">
        <div className="formTitle">
          <h2>
            New Task
          </h2>
        </div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <label>Description: </label>
          <input type="text" name="description" onChange ={(e) => handleChange(e)} />
          <br/>
          <br/>

          <label>Priority Level: </label>
          <input type="text" name="priorityLevel" onChange={(e) => handleChange(e)} />
          <br/>
          <br/>

          <label>Assign: </label>
          <input type="text" name="employeeId" onChange={(e) => handleChange(e)} />
          <br/>
          <br/>

          <button type="submit">
            Submit
          </button>
          <br/>
          <br/>
        </form>
        </div>
      </div>

  )
}

export default NewTaskView;
