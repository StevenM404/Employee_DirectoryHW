import React from 'react';
import logo from './logo.svg';
import './App.css';
import employees from './employees.json'

class App extends React.Component {
  state = {
    employeeChart: employees,
    sortOrder: ""
  }
  sortName = () => {
    const nameSort = this.state.employeeChart.sort((a,b) => {
      var nameA = a.name.toUpperCase();
      var nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      return 0;
    })
  }
  render() {
    return (
      <div>
        <div class="jumbotron jumbotron-fluid">
          <div class="container">
            <h1 class="display-4">Employee Directory</h1>
            <p class="lead">Find your employees by name, email, or ID.</p>
          </div>
        </div>
        <div>
          <table class="table">
            <thead class="thead-dark">
              <tr>
                <th scope="col">ID</th>
                <th scope="col" onClick = {() => this.sortName()}>Name</th>
                <th scope="col">email</th>
              </tr>
            </thead>
            <tbody>
              {this.state.employeeChart.map(employee => (
                <tr>
                  <th scope="row">{employee.id}</th>
                  <td>{employee.name}</td>
                  <td>{employee.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
