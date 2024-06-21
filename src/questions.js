export default [
  {
    id: 'q1',
    text: 'Which of the following definitions best describes React.js?',
    answers: [
      'A library to build user interfaces with help of declarative code.',
      'A library for managing state in web applications.',
      'A framework to build user interfaces with help of imperative code.',
      'A library used for building mobile applications only.',
    ],
  },
  {
    id: 'q2',
    text: 'What purpose do React hooks serve?',
    answers: [
      'Enabling the use of state and other React features in functional components.',
      'Creating responsive layouts in React applications.',
      'Handling errors within the application.',
      'Part of the Redux library for managing global state.',
    ],
  },
  {
    id: 'q3',
    text: 'Can you identify what JSX is?',
    answers: [
      'A JavaScript extension that adds HTML-like syntax to JavaScript.',
      'A JavaScript library for building dynamic user interfaces.',
      'A specific HTML version that was explicitly created for React.',
      'A tool for making HTTP requests in a React application.',
    ],
  },
  {
    id: 'q4',
    text: 'What is the most common way to create a component in React?',
    answers: [
      'By defining a JavaScript function that returns a renderable value.',
      'By defining a custom HTML tag in JavaScript.',
      'By creating a file with a .jsx extension.',
      'By using the "new" keyword followed by the component name.',
    ],
  },
  {
    id: 'q5',
    text: 'What does the term "React state" imply?',
    answers: [
      'An object in a component that holds values and may cause the component to render on change.',
      'The lifecycle phase a React component is in.',
      'The overall status of a React application, including all props and components.',
      'A library for managing global state in React applications.',
    ],
  },
  {
    id: 'q6',
    text: 'How do you typically render list content in React apps?',
    answers: [
      'By using the map() method to iterate over an array of data and returning JSX.',
      'By using the for() loop to iterate over an array of data and returning JSX.',
      'By using the forEach() method to iterate over an array of data and returning JSX.',
      'By using the loop() method to iterate over an array of data and returning JSX.',
    ],
  },
  {
    id: 'q7',
    text: 'Which approach can NOT be used to render content conditionally?',
    answers: [
      'Using a the #if template syntax.',
      'Using a ternary operator.',
      'Using the && operator.',
      'Using an if-else statement.',
    ],
  },
  // New questions
  {
    id: 'q8',
    text: 'What is the primary purpose of the useEffect hook in React?',
    answers: [
      'To perform side effects in function components.',
      'To manage the state of function components.',
      'To fetch data from an API.',
      'To optimize performance in React applications.',
    ],
  },
  {
    id: 'q9',
    text: 'Which of the following is true about React components?',
    answers: [
      'Components can be class-based or function-based.',
      'Components must be class-based.',
      'Components must be function-based.',
      'Components cannot manage their own state.',
    ],
  },
  {
    id: 'q10',
    text: 'What is the significance of keys in React lists?',
    answers: [
      'Keys help React identify which items have changed, are added, or are removed.',
      'Keys are required to iterate over lists in React.',
      'Keys are used to style list items in React.',
      'Keys help in optimizing the performance of React applications by caching list items.',
    ],
  },
  {
    id: 'q11',
    text: 'How do you pass data to a child component in React?',
    answers: [
      'By using props.',
      'By using state.',
      'By using context.',
      'By using refs.',
    ],
  },
  {
    id: 'q12',
    text: 'What is the use of the useState hook in React?',
    answers: [
      'To add state to functional components.',
      'To handle side effects in functional components.',
      'To fetch data in functional components.',
      'To optimize rendering in functional components.',
    ],
  },
  {
    id: 'q13',
    text: 'Which method in a class component is used to handle side effects?',
    answers: [
      'componentDidMount.',
      'render.',
      'constructor.',
      'shouldComponentUpdate.',
    ],
  },
  {
    id: 'q14',
    text: 'What is the purpose of the React.Fragment component?',
    answers: [
      'To group a list of children without adding extra nodes to the DOM.',
      'To provide a fallback UI for error boundaries.',
      'To memoize the rendered output of a component.',
      'To manage the lifecycle methods of a component.',
    ],
  },
  {
    id: 'q15',
    text: 'How can you optimize the performance of a React application?',
    answers: [
      'By using React.memo to memoize components.',
      'By using inline styles for all components.',
      'By avoiding the use of hooks.',
      'By minimizing the number of components in the application.',
    ],
  },
];
