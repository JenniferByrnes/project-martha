import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_THOUGHTS } from '../utils/queries';
import ThoughtList from '../components/ThoughtList';
import Auth from '../utils/auth';
import ThoughtForm from '../components/ThoughtForm';

const Home = () => {
  // use useQuery hook to make query request
  const { loading, data } = useQuery(QUERY_THOUGHTS);

  const thoughts = data?.thoughts || [];
  console.log(thoughts);

  const loggedIn = Auth.loggedIn();

  return (
    // Page Container
    <>
      {/* Divide the container into columns */}
      <div className="grid grid-cols-4 gap-4" >
        <div className="..." md="auto">
          {/* left column */}
          <div className="flex justify-center h-screen items-center ">
            {/* Card */}
            <div className="rounded-2xl shadow-lg max-w-sm bg-white">
              {/* Image */}
              <a href="#!">
                <img className="rounded-t-xl"
                  alt="Sample"
                  src="https://picsum.photos/300/200"
                />
              </a>
              {/* Card Info below image */}
              <div className="p-6">
                <h2 className="text-gray-900 text-xl font-medium text-center mb-2">
                  Card title
                </h2>
                <h4
                  className="mb-2 text-muted text-center"
                >
                  Card subtitle
                </h4>
                <p className="text-center leading-5 tracking-wide">
                  Some quick example text to build on the card title and make up the bulk of the card‘s content.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Right section of container */}
        <div className="col-span-3 bg-zinc-700 ...">
          {/* Column for blog posts */}
          <div className="flex-row justify-space-between">
            {loggedIn && (
              <div className="mb-3 bg-zinc-500">
                {/* Place for a new thought for a logged in user. This will not show for an unlogged in user */}
                <ThoughtForm />
              </div>
            )}
            {/* Blog articles. */}
            <div className={`mb-3 min-w-full ${loggedIn}`}>
              {loading ? (
                <div>Loading...</div>
              ) : (
                <ThoughtList thoughts={thoughts} />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
