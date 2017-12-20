import React from 'react';
import { Scene, Stack, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 0 }}>
      <Scene hideNavBar>
        <Scene key="root">
          <Scene key="login" component={LoginForm} title="Please Login" />
        </Scene>
        <Scene key="main" hideBackImage={true}>
          <Scene
            key="employeeList"
            component={EmployeeList}
            title="Employees"
            renderBackButton={()=>(null)}
            rightTitle="Add"
            onRight={() => Actions.employeeCreate({ type: 'replace' })}
            initial
            />
          <Scene
            key="employeeCreate"
            component={EmployeeCreate}
            title="Create Employee"
            />
          <Scene
            key="employeeEdit"
            component={EmployeeEdit}
            title="Edit Employee"
            />
        </Scene>
      </Scene>
    </Router>
  );
}

export default RouterComponent;
