import React, {useState} from 'react';
import {TextField, Button, Alert} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './App.css'
export const Home = () =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [pgVersion, setPgVersion] = useState(false);
    const navigate = useNavigate();
      async function getPgVersion() {
        const response = await fetch('http://localhost:3001/api/pg-version');
          const data = await response.json();
          data?.version?.map((e)=>{
            e?.mailid == email && e?.password == password?navigate('/new-screen'):setPgVersion(true);
          })
      }
    return (
      <>
      <div className='mbthree'>Tracker EXten</div>
      <div className='container'>
      <div className='half left'>
      <div className='d-flex align-center justify-center'>Welcome to Tracker EXtern</div>
      {pgVersion && <Alert severity="error">Email or password is incorrect</Alert>}
      <div className='d-flex mtthreecent align-center justify-center'>Sign in to continue access</div>
      </div>
      <div className='half right'>
        <div className='mttwocent'>
        <div className='d-flex align-center justify-center'>Sign in</div>
        <div className='d-flex align-center justify-center'><TextField onChange={(event) => setEmail(event.target.value)}
       value={email}
       id='email'
       label='Email'
       type='email'
       size='small'
       variant='outlined'
       margin='normal'
       required
       align='center' /></div>
        <div className='d-flex align-center justify-center'><TextField
       onBlur={(event) => (event)}
       value={password}
       onChange={(event) => setPassword(event.target.value)}
       name='password'
       size='small'
       id='password'
       label='Password'
       type='password'
       variant='outlined'
       margin='normal'
       align='center'
       required/></div>
        <div className='d-flex align-center justify-center'><Button
       type='submit'
       align='center'
       variant='contained'
       color='primary'
       onClick={getPgVersion}>LogIn
     </Button></div>
      </div>
      </div>
      </div>
      </>
    );
  };