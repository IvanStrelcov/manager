import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { employeeCreate } from '../actions';
import { CardSection, Card, Button, Spinner } from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {
  onSubmit() {
    const { name, phone, shift } = this.props;
    this.props.employeeCreate({ name, phone, shift });
  }

  renderError() {
    if (this.props.error) {
      return (
        <View style={{ backgroundColor: 'white' }}>
          <Text style={styles.errorTextStyle}>
            {this.props.error}
          </Text>
        </View>
      );
    }
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />
    };
    return (
      <Button onPress={this.onSubmit.bind(this)}>
        Create
      </Button>
    );
  }

  render() {
    console.log(this.props.employee)
    return (
      <Card>
        <EmployeeForm {...this.props} />
        {this.renderError()}

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeCreate })(EmployeeCreate);
