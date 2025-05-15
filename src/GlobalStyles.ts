import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  // Apply background and text color based on the current theme
  body {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    transition: background-color 0.3s, color 0.3s;
  }

  #root {
    width: 100%;
    height: 5817px;
    top: -1283px;  /* Offset to match Figma */
    left: 672px;   /* Offset to match Figma */
    background-color: ${(props) => props.theme.body};  /* Dynamic background based on theme */
    display: flex;
    flex-direction: column;
    gap: 0; /* No gap between sections */
    opacity: 1;
    transition: background-color 0.3s;  /* Smooth background-color transition */
  }

  /* Styling for the App container */
  .App {
    margin-top: 46px;  /* This is your offset for the app */
  }
`;

export default GlobalStyles;
