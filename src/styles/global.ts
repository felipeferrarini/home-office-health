import { createGlobalStyle } from 'styled-components';

export const GlobalStye = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  :root {
    --white: #fff;
    --background: #f2f3f5;
    --gray-line: #DCDDE0;
    --gray: #6666;
    --text: #666666;
    --text-highlight: #B3B9FF;
    --title: #2E384D;
    --red: #E83F5B;
    --red-light: #FFF5F5;
    --green: #4CD62B;
    --green-light: #F7FFF5;
    --blue: #5965E0;
    --blue-transparent: #5965E090;
    --blue-dark: #4953B8;
    --blue-light: #F5FCFF;
    --blue-twitter: #2AA9E0;
    --blue-facebook: #3b5998;
  }

  @media(max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media(max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  @media(max-width: 720px) {
    html {
      font-size: 76%;
    }
  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
  }

  body, input, textarea, button {
    font: 400 1rem "Inter", sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }


  /* nprogress */

  #nprogress {
    pointer-events: none;
  }

  #nprogress .bar {
    background: var(--green);

    position: fixed;
    z-index: 1031;
    top: 0;
    left: 0;

    width: 100%;
    height: 5px;
  }

  @media all and (max-width: 768px) {

    #nprogress .bar{
      height: 5px;
    }

  }

  /* Fancy blur effect */
  #nprogress .peg {
    display: block;
    position: absolute;
    right: 0px;
    width: 100px;
    height: 100%;
    box-shadow: 0 0 10px var(--green), 0 0 5px var(--green);
    opacity: 1;

    -webkit-transform: rotate(3deg) translate(0px, -4px);
    -ms-transform: rotate(3deg) translate(0px, -4px);
    transform: rotate(3deg) translate(0px, -4px);
  }

  .nprogress-custom-parent {
    overflow: hidden;
    position: relative;
  }

  .nprogress-custom-parent #nprogress .bar {
    position: absolute;
  }


`;
