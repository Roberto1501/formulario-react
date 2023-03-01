import React from 'react';
import Input from './components/Input';
import "./App.css"
import Button from './components/Button';






function App() {
  const logar = ()=> {
    console.log("clicou")
  }
  return (

    <React.Fragment>
      <div className='container'>
        <div className='form'>
          <Input type='text' placeholder='digite seu e-mail' />
          <Input type='password' placeholder='digite sua senha' />
          <Button  text='login' onClick={logar} />
        </div>
       
          
            
          
       
      





      </div>



    </React.Fragment>
  );
};

export default App;

