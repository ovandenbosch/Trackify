import { Link } from 'react-router-dom'

const About = () => {
    return (
      <div>
        <h4>Version 1.0.0</h4>
        <p>

          <Link to="https://github.com/ovandenbosch/Trackify">Github Repository for this project</Link>
          <br/>
          <a href="https://ovdb.tech">My Website</a>
        </p>
        <br/>
        <br/>
        <Link to="/">Go Back</Link>
      </div>
    );
}

export default About
