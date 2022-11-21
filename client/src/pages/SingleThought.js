import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_THOUGHT } from '../utils/queries';

import Auth from '../utils/auth';

const SingleThought = props => {

  const { id: thoughtId } = useParams();

  const { loading, data } = useQuery(QUERY_THOUGHT, {
    variables: { id: thoughtId }
  });

  const thought = data?.thought || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="card mb-3">
        <p className="card-header">
          {thought.createdAt}
        </p>
        <img
          alt="Sample"
          src={thought.thoughtImage}
        />
        <div className="card-body">
          <p>{thought.thoughtTitle}</p>
        </div>
        <div className="card-body">
          <p>{thought.thoughtText}</p>
        </div>
      </div>
      {Auth.loggedIn()}
    </div>
  );
};

export default SingleThought;
