import React, { Component } from 'react';
import TableRow from './TableRow';

class UserList extends Component {

      renderTable(){
        if(this.props.data){
          return this.props.data.map((object, i) => {
              return <TableRow obj={object} key={i} />;
          })
        }
      }
      render() {
        return (
            <div className="container">
            <table className="table table-striped">
              <thead>
                <tr>
                  <td>ID</td>
                  <td>Name</td>
                </tr>
              </thead>
              <tbody>
                {this.renderTable()}
              </tbody>
            </table>
        </div>
        );
      }
}
export default UserList;