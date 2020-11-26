import React from 'react';
import PropTypes from 'prop-types';

class AddTodo extends React.Component {

  state = {
    title: ''
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: '' });
  };

  inputChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
        <input
          type="text"
          name="title"
          placeholder='Add to the list'
          style={{ flex: '10', padding: '5px' }}
          value={this.state.title}
          onChange={this.inputChange}
        />
        <input
          type="submit"
          value="Submit"
          className='btn'
          style={{ flex: '1' }}
        />
      </form>
    )
  }
}

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
}

export default AddTodo;