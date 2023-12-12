import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import LineCharts from '../components/charts/LineCharts';
import CustomerDataTable from '../components/datatable/CustomerDataTable';
// import Pies from '../components/charts/Pies';
// import { useEffect, useState } from 'react';
// import axios from 'axios';


function Dashboard() {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fdf',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
      

    //   const[userData, setUserData] = useState(0)
    //   useEffect(() => {
    //     axios.get('https://jsonplaceholder.typicode.com/users')
    //     .then(res => {
    //         const clients = res.data.reduce((count, name) =>count +1, 0);
    //         console.log(clients)
    //         setUserData(clients);
    //     })
    //     .catch(err => console.log(err))
    // }, []);
    


  return (
    <div className='w-full h-screen flex items-center justify-between px-10'>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Item>
              <div>Users</div>
              {/* <div>{userData}</div> */}
              <div>678</div>               
            </Item>
          </Grid>
          <Grid item xs={4}>
          <Item>
              <div>Cultures</div>
              <div>455</div>
            </Item>
          </Grid>
          <Grid item xs={4}>
          <Item className='h-20'>
                <div>Month</div>
                <div>769</div>
            </Item>
          </Grid>
          <Grid item xs={6}>
          <Item>
                <LineCharts/>
          </Item>
          </Grid>
          {/* <Grid item xs={6}>
          <Item>
                <div>Orders</div>
                <Pies/>
          </Item>
          </Grid> */}
        </Grid>
        <Grid>
            <CustomerDataTable/>
        </Grid>
      </Box>  

    </div>
   )
}

export default Dashboard



