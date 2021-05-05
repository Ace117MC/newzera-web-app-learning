import React from 'react';
import { shallow,mount } from 'enzyme';
import { client,GetData, SendMessage } from './client';
import { ApolloProvider } from '@apollo/client';

describe('GetData', () => {
    it('should render correctly in "debug" mode', () => {
        const comp = shallow(<ApolloProvider client={client}>
            <GetData id={1} debug />
          </ApolloProvider>);
        expect(comp).toMatchSnapshot();
    });
});

describe('SendMessage', () => {
    it('should render correctly in "debug" mode', () => {
        const comp = shallow(<ApolloProvider client={client}>
            <SendMessage debug />
          </ApolloProvider>);
        expect(comp).toMatchSnapshot();
        // comp.unmount();
    });
});