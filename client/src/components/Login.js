import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import * as yup from 'yup';
import { Auth } from 'aws-amplify';
import { useHistory } from 'react-router-dom';

const loginSchema = yup.object().shape({
  email: yup.string().email('Valid email is required').required('Email is required'),
  password: yup.string().required('Password is required'),
});

const useStyles = makeStyles({
  input: {
    display: 'block',
    boxSizing: 'border-box',
    width: '100%',
    borderRadius: '4px',
    border: '1px solid gray',
    padding: '10px 15px',
    marginBottom: 20,
    fontSize: '12px',
  },
  btn: {
    background: '#000000',
    border: 0,
    borderRadius: '4px',
    color: 'white',
    fontFamily: ['Montserrat', 'sans-serif'].join(''),
    height: 40,
    width: '100%',
    marginTop: 10,
    marginBottom: '5px',
    '&:hover': {
      opacity: '70%',
    },
  },
  err: {
    color: 'red',
    fontWeight: 'bold',
  },
  text: {
    textDecoration: 'none',
  },
});

const LoginInfo = () => {
  let history = useHistory();
  const [formData, setFormData] = useState([]);
  const [loginErr, setloginErr] = useState('');
  // const [redirect, setRedirectState] = useState(null);
  const { register, handleSubmit, errors } = useForm({
    reValidateMode: 'onSubmit',
    validationSchema: loginSchema,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (data) => {
    const { email, password } = data;
    console.log(email, password);
    try {
      const user = await Auth.signIn(email, password);
      console.log(user);
      // setRedirectState(() => '/');
      // history.go(0);
      // history.push('/add');
      // return <Redirect to="/" />;
      const check = await Auth.currentAuthenticatedUser();
      console.log(check);
    } catch (err) {
      console.log(err);
      setloginErr(err.message);
    }
  };

  const checkUserAuthentication = async () => {
    await Auth.currentAuthenticatedUser()
      .then((user) => {
        console.log(user);
        setloginErr('user Authenticated');
      })
      .catch((err) => {
        console.log(err);
        setloginErr('User not authenticated');
      });
  };
  // useEffect(() => {
  //   checkUserAuthentication();
  // });

  const classes = useStyles();
  return (
    <div data-testid="login">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid item xs={12} md={12}>
          <div>
            <p style={{ color: 'red' }}>{loginErr}</p>
            <label htmlFor="email">
              {' '}
              Email *
              <input
                type="text"
                className={classes.input}
                name="email"
                placeholder="Email"
                ref={register}
                onChange={(e) => handleChange(e)}
              />
              {errors.email && (
                <small className={classes.err}>{errors.email.message}</small>
              )}
            </label>
          </div>
        </Grid>
        <Grid item xs={12} md={12}>
          <div>
            <label htmlFor="password">
              {' '}
              Password *
              <input
                type="password"
                className={classes.input}
                name="password"
                placeholder="Password"
                ref={register}
                onChange={(e) => handleChange(e)}
              />
              {errors.password && (
                <small className={classes.err}>{errors.password.message}</small>
              )}
            </label>
          </div>
        </Grid>
        <Grid item xs={12} md={12}>
          {' '}
          <button type="submit" className={classes.btn} data-testid="loginBtn">
            LOGIN
          </button>
        </Grid>
      </form>
    </div>
  );
};

export default LoginInfo;
