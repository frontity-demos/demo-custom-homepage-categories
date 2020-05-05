import React from "react";
import { connect, Global, css } from "frontity";
import Home from './Home'

import { ThemeProvider } from 'emotion-theming'
import theme from './styles/theme'

const Root = ({ state }) => {

  const data = state.source.get(state.router.link)
  return (
    <>
      <Global
        styles={css`
          body {
            padding: 0;
            margin: 0;
          }
        `}
      />
      
      <ThemeProvider theme={theme}>
        {data.isHome && <Home />}
        {!data.isHome && <p>You're at <pre>{state.router.link}</pre></p>}
      </ThemeProvider>
    </>
  );
};

export default connect(Root);