import React from 'react';
import { Button, Container } from 'reactstrap';
import InputField from "../../../../custom-field/InputField";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';

const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'redirect',
    // We will display Google and Facebook as auth providers.
    signInSuccessUrl:'/posts',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],
    
  };
  

const Login = () => {
    return (
        <Container>
            {/* <InputField name="username"/>
            <InputField name="password" type="password"/> */}
            <Button type="submit">Login</Button>
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
        </Container>
    );
};

export default Login;