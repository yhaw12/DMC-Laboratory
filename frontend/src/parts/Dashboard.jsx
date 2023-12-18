import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import LineCharts from '../components/charts/LineCharts';
import DataTable from 'react-data-table-component';
import { useEffect, useState } from 'react';
import axios from 'axios';
// import Pies from '../components/charts/Pies';
// import { useEffect, useState } from 'react';
// import axios from 'axios';


function Dashboard() {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#ff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    const columns =[
      {
        name: 'ID',
        selector: row=>row.id
      },
      {
        name: 'NAME',
        selector: row=>row.name
      },
      {
        name: 'EMAIL',
        selector: row=>row.email
      },
      {
        name: 'CITY',
        selector: row=>row.address.city
      }
     ]

     const [records, setRecords] = useState([])
    
    //  PULL CLIENTS DATA
      useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            setRecords(res.data);
        })
        .catch(err => console.log(err))
    }, []);
    


  return (
    <div className='w-full h-screen flex items-center justify-between px-10 '>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Item className='h-32 flex flex-col items-center justify-center'>
                    <div className='text-2xl font-extrabold'>Total Clients</div>
                    <div className='text-xl'>678</div>               
                  </Item>
                </Grid>
                <Grid item xs={6}>
                  <Item className='h-32 flex flex-col items-center justify-center'>
                    <div  className='text-2xl font-extrabold'>Pathology</div>
                    <div className='text-xl'>455</div>
                  </Item>
                </Grid>
                <Grid item xs={6}>
                  <Item className='h-32 flex flex-col items-center justify-center'>
                    <div  className='text-2xl font-extrabold'>Radiology</div>
                    <div className='text-xl'>769</div>
                  </Item>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <LineCharts/>
              </Item>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Item>
              <DataTable
                columns={columns} 
                data={records.slice(0,5)}
                // paginationServerSide
              >
              </DataTable>
            </Item>    
          </Grid>
        </Box>
    </div>
   )
}

export default Dashboard



