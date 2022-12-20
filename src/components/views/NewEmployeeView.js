


const NewEmployeeView = (props) => {
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
            New Employee
          </h2>
        </div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <label>First Name: </label>
          <input type="text" name="firstName" onChange ={(e) => handleChange(e)} />
          <br/>
          <br/>

          <label>Last Name: </label>
          <input type="text" name="lastName" onChange={(e) => handleChange(e)} />
          <br/>
          <br/>

          <label>Department: </label>
          <input type="text" name="department" onChange={(e) => handleChange(e)} />
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

export default NewEmployeeView;
