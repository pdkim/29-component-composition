import React, { Component } from 'react';


class NoteUpdateForm extends Component {

  state = {
    id: this.props.note.id,
    editing: this.props.note.editing,
    completed: this.props.note.completed,
    content: this.props.note.content,
    title: this.props.note.title,
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.onDone();
    this.props.onUpdate({ ...this.state });
    this.setState({
      title: '',
      content: ''
    });
  };

  onChange = event => {
    const val =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;

    const changedBit = {
      [event.target.name]: val
    };
    this.setState(changedBit);
  };

  onCancel = () => this.props.onCancel();

  render() {
    return (
      <form onSubmit={this.onSubmit} onChange={this.onChange}>
        <input name="title" placeholder="title" value={this.state.title} />
        <textarea
          name="content"
          placeholder="content"
          value={this.state.content}
        />
        <label>
          <span>editing</span>
          <input name="editing" type="checkbox" checked={this.state.editing} />
        </label>
        <label>
          <span>completed</span>
          <input
            name="completed"
            type="checkbox"
            checked={this.state.completed}
          />
        </label>
        <button>Update Note</button>
        <button type="button" onClick={this.onCancel}>
          cancel
        </button>
      </form>
    );
  };
}

export default NoteUpdateForm;
