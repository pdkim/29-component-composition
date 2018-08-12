import React, { Component, Fragment } from 'react';
import NoteItem from './NoteItem.js';


class NoteList extends Component {
  render() {
    return (
      <ul>
        {this.props.notes.map(note => <NoteItem key={note.id} onUpdate={this.props.onUpdate} delete={this.props.delete} note={note}/>)}
      </ul>
    );
  }
}

export default NoteList;
