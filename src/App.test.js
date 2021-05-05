// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
import React from 'react';
import { shallow,mount } from 'enzyme';
import App from './App';
import { ApolloProvider } from '@apollo/client';
import { client } from './components/client/client';

const clickfn = jest.fn();

describe('App', () => {
  it('should render correctly in "debug" mode', () => {
    const comp = shallow(<ApolloProvider client={client}>
      <App onClick={clickfn} />
    </ApolloProvider>);
    expect(comp).toMatchSnapshot();
  });
});
