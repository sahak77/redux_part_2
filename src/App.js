import React from 'react';
import FetchedPosts from './components/FetchPosts';
import Posts from './components/Posts';
import PostForm from './components/PostForm'

function App() {
  return (
    <div className="container pt-3">
      <div className='row'>
        <div className='col'>
          <PostForm />
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <h2>sync posts</h2>
          <Posts /> 
        </div>
        <div className='col'>
          <h2>async posts</h2>
          <FetchedPosts />
        </div>
      </div>
    </div>
  );
}

export default App;





