import  { useEffect, useState } from 'react';
import { Table } from '@windicss/react';

function Attendance() {
  const [attendances, setAttendances] = useState([]);

  useEffect(() => {
    fetch('/api/attendances')
      .then(response => response.json())
      .then(data => setAttendances(data));
  }, []);

  return (
    <div
 
className="container-fluid">

      
<div
 
className="row">

        
<div
 
className="col-12">

          
<div
 
className="page-title-box">

            
<h4
 
className="page-title">Attendance List</h4>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-body">
          <h4 className="text-center">All Attendance List</h4>

          <Table striped responsive>
            <thead>

              
<tr>

                
<th>S/N</th>

                
<th>Employees Name</th>
                {/* <th>Employees ID</th> */}
                <th>Enter Date & Time</th>

                
<th>Exit Date & Time</th>
                {/* <th>Activity</th> */}
              </tr>

            
</thead>

            
<tbody>
              {attendances.map((attendance, index) => (
                <tr key={attendance.id}>
                  <td>{index + 1}</td>
                  <td>{attendance.user_name}</td>
                  {/* <td>{attendance.employeesid}</td> */}
                  <td>{attendance.enters_time}</td>
                  <td>{attendance.exits_time}</td>
                  {/* <td>{attendance.activity}</td> */}
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default Attendance;