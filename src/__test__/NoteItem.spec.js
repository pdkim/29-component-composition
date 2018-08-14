import React from 'react';
import { shallow } from 'enzyme';
import NoteList from '../components/NoteList.js';
import NoteItem from '../components/NoteItem.js';

import 'jest-enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

xdescribe('Note item should', () => {

  xit('remove note from the list', done => {
    const onRemove = id => {
      expect(id).toBe('1234');
      done();
    };

    const notes = [];
    notes.push({
      id: '1234',
      title: 'omg',
      content: 'this is so confusing!',
      editing: false,
      completes: false,
    });

    const wrapper = shallow(<NoteList notes={notes} onRemove={onRemove} />);
    expect(wrapper.find(NoteItem).length).toBe(1);
    const noteItem = wrapper.find(NoteItem).first();

    const noteItemId = noteItem.prop('note').id;

    const removeHandler = noteItem.prop("onRemove");

    removeHandler(noteItemId);

  });


})