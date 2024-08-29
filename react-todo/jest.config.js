module.exports = {
    transform: {
      '^.+\\.jsx?$': 'babel-jest',  // Use babel-jest to transform JavaScript and JSX files
    },
    testEnvironment: 'jsdom',  // Use jsdom to simulate a browser environment
  };
  