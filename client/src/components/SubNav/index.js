import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers'

// function categorySelected(name) {
//   console.log(`${name} clicked`)
// }

export default function SubNav(props) {
  const {
    categories = [],
    setCurrentCategory,
    currentCategory,
    contactSelected,
    setContactSelected
  } = props;

  useEffect(() => {
    document.title = (currentCategory.name);
  }, [currentCategory]);

  return (
    <div className="w-full mx-auto px-6 py-2 flex items-center justify-around md:py-4 bg-pcTan text-stone-800 ">
      {/* one button for All Items */}
      {/* This just won't work with directories */}
      {/* <button className="hover:text-pcCoral hover:border-b hover:border-pcCoral"
        onClick={() => {
          setCurrentCategory('*');
          setContactSelected(false);
        }}
      >
        All Rooms
      </button> */}
      {/* map to get the categories for the navbar */}
      {categories.map((category) => (
        <button
          className={`hover:text-pcCoral hover:border-b hover:border-pcCoral ${currentCategory.name === category.name && !contactSelected && `navActive`
            }`}
          key={category.name}
        >
          <span onClick={() => {
            setCurrentCategory(category);
            setContactSelected(false);
          }}
          >
            {capitalizeFirstLetter(category.name)}
          </span>
        </button>
      ))}
    </div>
  );
}