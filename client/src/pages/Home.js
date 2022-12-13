import React from 'react';
import Auth from '../utils/auth';

const Home = () => {

  const loggedIn = Auth.loggedIn();

  return (
    // Page Container
    <section className="container mx-auto p-6 bg-pcTan">
      {/* Divide the container into columns */}
      <div className="flex flex-col md:flex-row justify-between " >

        {/* left column */}
        <div className="flex justify-center md:h-screen md:items-center shrink-0">
          {/* Card */}
          <div className="rounded-2xl shadow-lg max-w-sm bg-white">
            {/* Image */}
            <div >
              <img className="rounded-t-xl object-fill h-60 w-96 ..."
                alt="Sample"
                src="https://picsum.photos/300/200"
              />
            </div>
            {/* Card Info below image */}
            <div className="p-6">
              <p className="text-xl font-medium text-center mb-2">
                Card title
              </p>
              <p
                className="mb-2 text-muted text-center"
              >
                Card subtitle
              </p>
              <p className="text-center leading-5 tracking-wide">
                Some quick example text to build on the card title and make up the bulk of the card‘s content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
