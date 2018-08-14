import React from 'react';
import {shallow} from 'enzyme';
import NoteCreateForm from '../components/NoteCreateForm.js';

import 'jest-enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Note Create Form should', () => {

  it('handle changes in form', () => {
    const wrapper = shallow(<NoteCreateForm />);
    const instance = wrapper.instance();
    const event = {
      target: {
        name: 'title',
        value: 'testing',
        type: 'text',
      }
    }

    instance.onChange(event);

    expect(wrapper.state('title')).toBe('testing');
  });


  it('submit a new note', done => {
    const onSubmit = note => {
      expect(note.id).not.toBe('');
      done();
    };

    const wrapper = shallow(<NoteCreateForm onSubmit={onSubmit}/>);
    const event = {
      preventDefault: () => {}
    };

    wrapper.instance().onSubmit(event);
  });
});

