import React, { Component } from 'react';
import NoteCreateForm from './components/NoteCreateForm.js';
import NoteList from './components/NoteList';
import {BrowserRouter, Route} from 'react-router-dom';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      notes: [],
    }

    this.addNote = this.addNote.bind(this);
    this.updateNote = this.updateNote.bind(this);
    this.removeNote = this.removeNote.bind(this);
  }


  addNote(note) {
    this.setState({
      notes: [...this.state.notes, note],
    })
  }

  updateNote(note) {
    const notes = this.state.notes.filter(n => n.id !== note.id);
    notes.push(note);
    this.setState({ notes });
  }

  removeNote(note) {
    let array = this.state.notes.slice();

    for (let i = 0; i < array.length; i++) {
      if (array[i].id === note) {
        array.splice(i, 1);
      }
    }

    this.setState({notes: array});
  }


  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NoteCreateForm onSubmit={this.addNote} />
          <NoteList notes={this.state.notes} onUpdate={this.updateNote} delete={this.removeNote}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
