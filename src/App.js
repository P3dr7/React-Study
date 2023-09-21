import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  state = {
    posts: [
      {id: 1,
      title: 'o titulo 1',
      body: 'corpo 1'
      },
      {id: 2,
        title: 'o titulo 1',
        body: 'corpo 1'
      },
      {id: 3,
      title: 'o titulo 1',
      body: 'corpo 1'
      }
    ]
  };

  render() {
    const { posts } = this.state;

    return (
      <div className="App">
        {posts.map(posts => (
          <div key={posts.id}>
            <h1 >{posts.title}</h1>
            <p>{posts.body}</p>
          </div>
        ))}
      </div>
    );
  }
}
export default App;