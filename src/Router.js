import React from 'react';
import { Scene, Stack, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 0 }}>
      <Stack key="root">
        <Scene key="login" component={LoginForm} title="Please Login" initial />
        <Scene
          key="employeeList"
          component={EmployeeList}
          title="Employees"
          hideBackImage
          rightTitle="Add"
          onRight={() => Actions.employeeCreate()}
        />
        <Scene
          key="employeeCreate"
          component={EmployeeCreate}
          title="Create Employee"
        />
      </Stack>
    </Router>
  );
}

export default RouterComponent;
