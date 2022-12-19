import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Photos from './pages/Photos';
import Login from './pages/Login';
import NoMatch from './pages/NoMatch';
import SingleBlogPost from './pages/SingleBlogPost';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Blog from './pages/Blog';
import ForgotPassword from './pages/ForgotPassword';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div id="page" className="flex-column justify-flex-start min-100-vh bg-neutral-100">
          <Header />
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/blog"
              element={<Blog />}
            />
            <Route
              path="/photos"
              element={<Photos />}
            />
            <Route
              path="/login"
              element={<Login />}
            />
            <Route
              path="/signup"
              element={<Signup />}
            />
            <Route path="/profile">
              <Route path=":username" element={<Profile />} />
              <Route path="" element={<Profile />} />
            </Route>
            <Route
              path="/thought/:id"
              element={<SingleBlogPost />}
            />
            <Route
              path="/forgot-password"
              element={<ForgotPassword />}
            />
            <Route
              path="*"
              element={<NoMatch />}
            />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
