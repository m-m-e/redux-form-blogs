import React, { Component } from 'react';
import { connect } from 'react-redux';
import BlogList from './components/BlogList';
import BlogForm from './components/BlogForm/index';
import { addBlog } from './redux/actionCreators';

class App extends Component {
  submit = blogDetails => {
    console.log(blogDetails);

    const { addBlog, blogs } = this.props;
    const newId = blogs.length;
    const newBlog = {...blogDetails, id: newId};
    addBlog(newBlog);
  }
  render() {
    const { blogs } = this.props;
    return (
      <div className="App">
        <BlogList blogs={blogs}/>
        <div className="form-container">
          <BlogForm onSubmit={this.submit}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  blogs: Object.values(state.blogs.blogs)
});

export default connect(
  mapStateToProps,
  { addBlog },
)(App);
