import React from 'react';
import { CssBaseline, MuiThemeProvider } from '@material-ui/core';
import Workspace from './Workspace/Workspace';
import ThemeBuilder from './config/theme-builder';

function App() {
  return (
    <MuiThemeProvider theme={ThemeBuilder()}>
      <CssBaseline />
      <div
        style={{
          overflow: 'hidden',
          height: '100%',
          width: '100%',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          position: 'absolute',
        }}
      >
        <Workspace />
      </div>
    </MuiThemeProvider>
  );
}

export default App;
