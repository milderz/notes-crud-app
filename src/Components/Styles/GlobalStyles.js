import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
 *,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

/* Reset margins */

body,
h1,
h2,
h3,
h4,
p,
figure,
picture {
  margin: 0;
}

/* Body set up */

html {
  font-size: 62.5%;
  scroll-behavior: smooth;
  line-height: 1.5;
}

body {
  line-height: 1.5;
  letter-spacing: 1px;
  min-height: 100vh;
  font-family: "Poppins", sans-serif;
}



/* Forms */

input,
button,
textarea,
select,
option {
  font: inherit;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
}

:root {
  --main-black: #17181A;
  --secondary-black: #27282C;
  --main-white: #FCFDFD;
  --light-gray: #666769;
  --purple: #4D5ACF;
 
}

.loading {
  height: 500px;
  width: 500px;
  background-color: red;
}

`;

export default GlobalStyles;
