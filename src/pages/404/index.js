import { Link } from 'react-router-dom';

function NoMatch() {
  return (
    <div>
      <img
        src={require('../../assets/images/page-not-found/page-not-found-images.jpg')}
        alt='page-not-found'
      />
      <h2>Nothing to see here!</h2>
      <p>
        <Link to='/'>Go to home page</Link>
      </p>
    </div>
  );
}

export default NoMatch;
