import React, { Component } from 'react';
import './App.css';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const GET_SHORTCUTS = gql`
  {
    allShortcuts {
      id
      title
      url
    }
  }
`;

class App extends Component {
  render() {
    return (
      <Query query={GET_SHORTCUTS}>
        {({ loading, error, data }) => {
          if (loading) return 'Loading...';
          if (error) return `Error! ${error.message}`;

          return (
            <div>
              {data.allShortcuts.map(shortcut => (
                <div>{shortcut.title}</div>
              ))}
            </div>
          );
        }}
      </Query>
    );
  }
}

export default App;
