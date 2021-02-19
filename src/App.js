import React from 'react';
import Button from './components/Button';
import Container from './components/Container';
import liftData from './data';
import Lift from './components/Lift';
import './App.scss';

const App = () => {

  return (
    <div className="flex">
      <div className="main-space">
      <h1 style={{color: "red", justifycontent: 'center'}}>Elevator-Problem</h1>
        <div className="btn-holder">
          {
            liftData.map((lift, idx) => (
              <Button key={idx} name={lift.name} value={lift.name} />
            ))
          }
        </div>
        <div className="ctn-holder">
          {
            liftData.map((container, idx) => (
              <Container key={idx}  value={container.name}/>
            ))
          }
          <Lift />
        </div>
      </div>
    </div>
  )
}

export default App;
