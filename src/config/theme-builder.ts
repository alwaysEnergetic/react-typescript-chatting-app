import { unstable_createMuiStrictModeTheme as createMuiTheme } from '@material-ui/core';
import React from 'react';
import { Shadows } from '@material-ui/core/styles/shadows';

const ogdBlue = '#0086D6';

export default function ThemeBuilder() {

  return React.useMemo(
    () =>
      createMuiTheme({
        // Disable all box-shadows
        shadows: Array(25).fill('none') as Shadows,

        props: {
          MuiList: {
            disablePadding: true,
          },
          // Disable ripple effect
          MuiButtonBase: {
            color: 'inherit',
            // disableRipple: true
          },
        },

        palette: {
          type: 'light',
          primary: {
            // light: will be calculated from palette.primary.main,
            main: ogdBlue,
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main,
          },
          secondary: {
            // light: will be calculated from palette.primary.main,
            main: ogdBlue,
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main,
          },
          warning: {
            // light: will be calculated from palette.primary.main,
            main: '#d50000',
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main,
          },
          contrastThreshold: 3,
          tonalOffset: 0.2,
        },

      }),
    [  ]
  );
}
