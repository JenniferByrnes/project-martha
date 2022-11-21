import React, { useState } from 'react';
import { Card, Col, Row, Form, FormGroup, Input } from 'reactstrap';
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
    <Card className="my-3" >
      <Form className="p-3"
        onSubmit={handleFormSubmit}
      >
        <Row>
          <Col md="auto">
            <FormGroup>
              <BlogImage handleImage={handleImage} />
            </FormGroup>
          </Col>
          <Col>
            <button className="btn" type="submit">
              Submit
            </button>
          </Col>
        </Row>
        <Row>
          <FormGroup>
            <Input
              id="thoughtTitle"
              name="title1"
              placeholder="Blog title - if desired (yes?)"
              onChange={handleChangeTitle}
            />
          </FormGroup>

        </Row>
        <Row>
        <FormGroup>
          <Input
            id="thoughtText"
            placeholder="Blog Text."
            name="text"
            type="textarea"
            onChange={handleChange}
          />
        </FormGroup>
        </Row>
      </Form>
    </Card >
  );
};

export default ThoughtForm;