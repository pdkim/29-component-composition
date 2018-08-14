import React from 'react';
import { shallow } from 'enzyme';
import NoteUpdateForm from '../components/NoteUpdateForm.js';

import 'jest-enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

xdescribe('Note Update form should', () => {

  xit('update an existing note with new content', done => {

    const onSubmit = note => {
      expect(note.id).toBe('1234');
      done();
    };

    const wrapper = shallow(<NoteUpdateForm onSubmit={onSubmit} />);

    wrapper.setState({
      id: '1234',
      title: 'Old',
      content: 'stuff in here',
      editing: false,
      completed: false,
    });

    const event = {
      target: {
        name: 'You did it!',
        value: 'I am updated!',
        type: 'text',
      }
    };

    wrapper.instance().onSubmit(event);

    expect(wrapper.state('content')).toBe('I am updated!');
  })
})