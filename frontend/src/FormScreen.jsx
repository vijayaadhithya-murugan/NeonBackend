import React, {useState} from 'react';
import {TextField, Button} from '@mui/material';
import './App.css'
export const FormScreen = () =>{
    const [studentDetails, setStudentDetails] = useState({studentName: '', class: '', age: 0, aadhar: '', marks: 0, gender: ''});
    async function getPgVersion(studentDetails) {
        const response = await fetch('http://localhost:3001/api/postStudentDetails',{method: 'POST', // Specify the HTTP method
            headers: {
              'Content-Type': 'application/json', // Indicate that the request body is JSON
            },
            body: JSON.stringify(studentDetails)});
          const data = await response.json();
      }
    return (<>
    <div className='d-flex align-center justify-center'>
    <TextField onChange={(event) => setStudentDetails({...studentDetails, studentName: event.target.value})}
     value={studentDetails?.studentName}
     id='email'
     label='Student Name'
     type='email'
     size='small'
     variant='outlined'
     margin='normal'
     required
     align='center' />
     <TextField onChange={(event) => setStudentDetails({...studentDetails, class: event.target.value})}
     value={studentDetails?.class}
     id='email'
     label='Class'
     type='email'
     size='small'
     variant='outlined'
     margin='normal'
     required
     align='center' />
     <TextField onChange={(event) => setStudentDetails({...studentDetails, age: event.target.value})}
     value={studentDetails?.age}
     id='email'
     label='Age'
     type='email'
     size='small'
     variant='outlined'
     margin='normal'
     required
     align='center' />
     <TextField onChange={(event) => setStudentDetails({...studentDetails, aadhar: event.target.value})}
     value={studentDetails?.aadhar}
     id='email'
     label='Aadhar No'
     type='email'
     size='small'
     variant='outlined'
     margin='normal'
     required
     align='center' />
     <TextField onChange={(event) => setStudentDetails({...studentDetails, marks: event.target.value})}
     value={studentDetails?.marks}
     id='email'
     label='Marks'
     type='email'
     size='small'
     variant='outlined'
     margin='normal'
     required
     align='center' />
     <TextField onChange={(event) => setStudentDetails({...studentDetails, gender: event.target.value})}
     value={studentDetails?.gender}
     id='email'
     label='Gender'
     type='email'
     size='small'
     variant='outlined'
     margin='normal'
     required
     align='center' />
    </div>
    <div className='d-flex align-center justify-center'><Button
       type='submit'
       align='center'
       variant='contained'
       color='primary'
       onClick={()=>{getPgVersion(studentDetails)}}>Apply
     </Button></div>
    </>);
};