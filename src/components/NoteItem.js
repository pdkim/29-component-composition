import React, { Component, Fragment } from 'react';
import NoteUpdateForm from './NoteUpdateForm.js';

class NoteItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mode: 'default'
    };
  }

  editMode = () => {
    this.setState({ mode: 'edit' });
  }

  defaultMode = () => {
    this.setState({ mode: 'default' });
  }

  render() {

    if (this.state.mode === 'default') {

      return (
        <li onDoubleClick={this.editMode}>
          {this.props.note.title}
          <p>{this.props.note.content}</p>
          <button onClick={() => this.props.delete(this.props.note.id)}>Completed</button>
        </li>
      );
    } else {
      return (
        <NoteUpdateForm
          note={this.props.note}
          onCancel={this.defaultMode}
          onDone={this.defaultMode}
          onUpdate={this.props.onUpdate}
        />
      )
    }
  }
}

export default NoteItem;