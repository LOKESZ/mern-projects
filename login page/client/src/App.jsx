import React from 'react';
import ReactDOM from 'react-dom';
import RegisterPage from './RegisterPage'
import './style.css'

const root=ReactDOM.createRoot(document.getElementById('root'));
const Body=()=>{
return(
    <>
   <RegisterPage/>
    </>
)
}
root.render(<Body/>)