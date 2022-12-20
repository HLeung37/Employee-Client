

import { Link } from 'react-router-dom';



const HomePageView = () => {
  return (
    <div>
      <h2>Final Project</h2>
      <Link to={'/employees'} > All Employees </Link>
      <br /><br />
      <Link to={'/tasks'} > All Tasks </Link>

    </div>
  );
}




export default HomePageView;
