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
    <div class="container mx-auto px-4">
      <div className="grid grid-cols-4 gap-4" >
        <div className="..." md="auto">
          {/* Info card on the left side */}
          <div className="flex justify-center">
            <div className="rounded-lg shadow-lg bg-white max-w-sm">
              <a href="#!">
                <img className="rounded-t-lg"
                  alt="Sample"
                  src="https://picsum.photos/300/200"
                />
              </a>
              <div className="p-6">
                <h2 className="text-gray-900 text-xl font-medium mb-2 text-sky-500">
                  Card title
                </h2>
                <h4
                  className="mb-2 text-muted"
                >
                  Card subtitle
                </h4>
                <p>
                  Some quick example text to build on the card title and make up the bulk of the card‘s content.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-3 ...">
          {/* Column for blog posts */}
          <div className="flex-row justify-space-between">
            {loggedIn && (
              <div className="mb-3">
                {/* Place for a new thought for a logged in user. This will not show for an unlogged in user */}
                <ThoughtForm />
              </div>
            )}
            {/* Blog articles. */}
            <div className={`mb-3 ${loggedIn}`}>
              {loading ? (
                <div>Loading...</div>
              ) : (
                <ThoughtList thoughts={thoughts} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
