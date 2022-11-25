import React from 'react';
import { Link } from 'react-router-dom';

const ThoughtList = ({ thoughts, title }) => {
  if (!thoughts.length) {
    return <h3>No Blogs Yet</h3>;
  }

  return (
    // Container for the right side - all blog posts
    <>
      {/* if there are blog posts, map through them */}
      {thoughts &&
        thoughts.map(thought => (
          // Flexbox for all thoughts
          <div key={thought._id} className="flex justify-center m-3 p-3 ">
            {/* Card */}
            <div className="min-w-full rounded-2xl bg-white shadow-lg p-3 m-3">
              {/* Card links to expanded blog post */}
              <Link className="group flex flex-col  md:flex-row md:max-w-xl"
                to={`/thought/${thought._id}`}
                style={{
                  textDecoration: 'none'
                }}
              >
                {/* Optional Image */}
                <img className=" w-full md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
                  alt="Sample"
                  src={thought.thoughtImage}
                  width='96px'
                  height='96px'
                />
                {/* Blog post text */}
                <div class="group-hover:text-blue-500 p-6 flex flex-col justify-start">
                  {/* Blog post title */}
                  <h5 class="group-hover:text-blue-500 text-gray-900 text-xl font-medium mb-2">
                    {thought.thoughtTitle}
                  </h5>
                  {/* Blog post body */}
                  <p className="group-hover:text-blue-500 text-gray-700 text-base mb-4">{thought.thoughtText}</p>

                  {/* Blog post footer */}
                  <p className="group-hover:text-blue-500 text-gray-600 text-xs">
                    {thought.createdAt}
                  </p>
                </div>
              </Link>
            </div>
          </div>
        ))}
    </>
  );
};

export default ThoughtList;