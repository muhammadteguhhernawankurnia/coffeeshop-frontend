import axios from 'axios';
import { useEffect } from 'react';

const SignUp = () => {
  useEffect(() => {
    axios
      .get('http://localhost:5000/api/v1/users')
      .then((result) => {
        console.log('data API', result.data);
      })
      .catch((error) => {
        console.log('error: ', error.response);
      });
  }, []);
  return <>This is SignUP</>;
};

export default SignUp;
