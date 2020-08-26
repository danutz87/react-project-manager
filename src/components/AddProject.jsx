import React, { Component } from 'react';
import uuid from 'uuid';

class AddProject extends Component {
  static defaultProps = {
    categories: ['Web Design', 'Web Dev', 'Mobile Dev']
  }

  constructor(props) {
    super(props);
    this.state = {
      newProject: {}
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.refs.title.value === '') {
      alert('Title required');
    } else {
      this.setState({
        newProject: {
          id: uuid.v4(),
          title: this.refs.title.value,
          category: this.refs.category.value
        }
      }, () => {
        this.props.addProject(this.state.newProject);
      });
    }
  }

  render() {
    const categoryOptions = this.props.categories.map((category) => {
      return <option key={category} value={category}>{category}</option>
    });

    return (
      <div>
      <h3>Add Project</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Title</label><br />
              <input type="text" ref="title"/>
          </div>
          <div>
            <label>Category</label>
            <br />
            <select ref="category">
              {categoryOptions}
            </select>
          </div>
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

export default AddProject;
