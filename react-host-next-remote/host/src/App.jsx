import React from 'react';
import NextjsRemoteComponent from 'remote/nextjs-remote-component';
import NextjsRemotePage from 'remote/nextjs-remote-page';
import NextjsChampionsComponent from 'remote/nextjs-champions-component';
// import styles from './app.module.css';

function App() {
  const myStyles = {
    display : 'flex',
    flexDirection : 'column',
    justifyContent : 'center',
    fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
    alignItems : 'center'
    // Other styles can be added here
  };
  return (
    <>
      <div style={myStyles}>
        <div>This is the React container App hosted at localhost:8080</div>
        <NextjsChampionsComponent />
        <NextjsRemoteComponent />
        {/* <NextjsRemotePage /> */}
      </div>
      
    </>
  );
}

export default App;
