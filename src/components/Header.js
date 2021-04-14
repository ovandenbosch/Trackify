import React from "react";
import PropTypes from "prop-types";
import Button from './Button'

const Header = ({ title }) => {
  const onClick = () => {
    console.log('click')
  }

  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button color="black" text="Add" onClick={onClick}/>
    </header>
  );
};

Header.defaultProps = {
  title: "Trackify",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

// CSS IN JS
// const headingStyle = {
//   color: "red",
//   backgroundColor: "black",
// };

export default Header;