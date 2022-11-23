import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_THOUGHT } from '../../utils/mutations';
import { QUERY_THOUGHTS, QUERY_ME } from '../../utils/queries';
import BlogImage from '../BlogImage';

const ThoughtForm = () => {

  const [thoughtText, setThoughtText] = useState('');
  const [thoughtTitle, setThoughtTitle] = useState('');
  const [thoughtImage, setThoughtImage] = useState('');

  const handleImage = savedURL => {
    setThoughtImage(savedURL);
  }

  const [addThought, { error }] = useMutation(ADD_THOUGHT, {
    update(cache, { data: { addThought } }) {

      // could potentially not exist yet, so wrap in a try/catch
      try {
        // update me array's cache
        const { me } = cache.readQuery({ query: QUERY_ME });
        cache.writeQuery({
          query: QUERY_ME,
          data: { me: { ...me, thoughts: [...me.thoughts, addThought] } },
        });
      } catch (e) {
        console.warn("First thought insertion by user!")
      }

      // update thought array's cache
      const { thoughts } = cache.readQuery({ query: QUERY_THOUGHTS });
      cache.writeQuery({
        query: QUERY_THOUGHTS,
        data: { thoughts: [addThought, ...thoughts] },
      });
    }
  });

  const handleChange = event => {
    // if (event.target.value.length <= 280) {
    setThoughtText(event.target.value);
    // setCharacterCount(event.target.value.length);
    // }
  };

  const handleChangeTitle = event => {
    // if (event.target.value.length <= 280) {
    setThoughtTitle(event.target.value);
    // setCharacterCount(event.target.value.length);
    // }
  };

  const handleFormSubmit = async event => {
    event.preventDefault();

    try {
      // add thought to database
      await addThought({
        variables: { thoughtTitle, thoughtImage, thoughtText }
      });

      // clear form value
      setThoughtText('');
      setThoughtTitle('');
      setThoughtImage('');
      // setCharacterCount(0);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="max-w-sm w-full lg:max-w-full lg:flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg mb-3 p-3 w-full">
      <form className="p-3"
        onSubmit={handleFormSubmit}
      >
        
        <div className="row">
          {/* This is the image selector */}
          <div className="col py-3 px-6 border-b border-gray-300" md="auto">
            <div className="form-group mb-6">
              <BlogImage handleImage={handleImage} />
            </div>
          </div>
          {/* This is the blog title */}
          <div classname="row">
            <div className="form-group mb-6">
              <input
                id="thoughtTitle"
                name="title1"
                placeholder="Blog title - if desired (yes?)"
                onChange={handleChangeTitle}
              />
            </div>

          </div>
          {/* This is the blog text */}
          <div classname="row">
            <div className="form-group mb-6">
              <textarea className="form-control block      
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
                id="thoughtText"
                rows="5"
                placeholder="Blog Text..."
                name="text"
                onChange={handleChange}
              />
            </div>
          </div>
          {/* This is the submit button */}
          <div class="grid grid-cols-2 gap-4">
            <button className="px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out" type="submit">
              Submit
            </button>
          </div>
        </div>

      </form>
    </div >
  );
};

export default ThoughtForm;