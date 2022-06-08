import React from 'react';
import { Amplify } from 'aws-amplify';
//import { API, Storage} from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import './App.css';
import NavBar from './Components/NavBar';
import Gallery from './Components/Gallery';
import awsExports from './aws-exports';
Amplify.configure(awsExports);

export default function App() {

  return (
    <Authenticator loginMechanisms={['username']}>
    {({ signOut, user }) => (
      <main>
        <NavBar />
        <h1>Hello {user.username}</h1>
        <p>Test text</p>
        <Gallery />
        <button onClick={signOut}>Sign out</button>
      </main>
    )}
    </Authenticator>
  );
}