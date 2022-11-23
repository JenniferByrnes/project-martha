import React from 'react';
import { Link } from 'react-router-dom';

const ThoughtList = ({ thoughts, title }) => {
  if (!thoughts.length) {
    return <h3>No Blogs Yet</h3>;
  }

  return (
    <div className="w-full">
      {/* Leftover from code with multiple users */}
      <h3>{title}</h3>
      {thoughts &&
        thoughts.map(thought => (
          // Flexbox for all thoughts
          <div key={thought._id} className="flex justify-center mb-3 p-3">
            {/* Card */}
            <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg mb-3 p-3">
              <img className=" w-full md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
                alt="Sample"
                src={thought.thoughtImage}
                width='96px'
                height='96px'
              />

              <div class="p-6 flex flex-col justify-start">
                <h5 class="text-gray-900 text-xl font-medium mb-2">
                  {thought.thoughtTitle}
                </h5>

                <p className="text-gray-700 text-base mb-4">
                  <Link
                    to={`/thought/${thought._id}`}
                    style={{
                      textDecoration: 'none'
                    }}
                  >
                    <p className="text-gray-700 text-base mb-4">{thought.thoughtText}</p>
                  </Link>
                </p>
                <p className="text-gray-600 text-xs">
                  {thought.createdAt}
                </p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ThoughtList;