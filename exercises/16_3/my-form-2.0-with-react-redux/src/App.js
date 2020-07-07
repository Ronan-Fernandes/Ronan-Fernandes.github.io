import React from 'react';
import JobData from './components/JobData';
import PersonalData from './components/PersonalData';
import Form from './components/Form';


class App extends React.Component {
  render() {
    return (
      <div>
        <PersonalData />
        <JobData />
        <Form />
      </div>
    );
  }
}

export default App;
