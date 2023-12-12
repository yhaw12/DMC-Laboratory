import { useEffect, useState } from 'react';
import { Table } from '@windicss/react';

function ActivitiesList() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch('/api/activities')
      .then(response => response.json())
      .then(data => setActivities(data));
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="page-title-box">
            <h4 className="page-title">Activities List</h4>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-body">
          <h4 className="text-center">All Activities List</h4>

          <Table striped responsive>
            <thead>
              <tr>
                <th>S/N</th>
                <th>Date</th>
                <th>Employees Name</th>
                {/* <th>Employees ID</th> */}
                <th>Activity</th>
              </tr>
            </thead>
            <tbody>
              {activities.map((activity, index) => (
                <tr key={activity.id}>
                  <td>{index + 1}</td>
                  <td>{activity.date}</td>
                  <td>{activity.user_name}</td>
                  {/* <td>{activity.employeesid}</td> */}
                  <td>{activity.activity}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default ActivitiesList;