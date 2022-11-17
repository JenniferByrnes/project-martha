import React from 'react';
import { Container, Card, CardBody, CardTitle, CardSubtitle, Button, CardText, Col, Row } from 'reactstrap';
import { useQuery } from '@apollo/client';
import { QUERY_THOUGHTS, QUERY_ME_BASIC } from '../utils/queries';
import ThoughtList from '../components/ThoughtList';
import FriendList from '../components/FriendList';
import Auth from '../utils/auth';
import ThoughtForm from '../components/ThoughtForm';

const Home = () => {
  // use useQuery hook to make query request
  const { loading, data } = useQuery(QUERY_THOUGHTS);

  // use object destructuring to extract `data` from the `useQuery` Hook's response and rename it `userData` to be more descriptive
  const { data: userData } = useQuery(QUERY_ME_BASIC);

  const thoughts = data?.thoughts || [];
  console.log(thoughts);

  const loggedIn = Auth.loggedIn();

  return (
    <Container>
      <Row xs="2">
      <Col>
        <Card
          style={{
            width: '18rem'
          }}
        >
          <img
            alt="Sample"
            src="https://picsum.photos/300/200"
          />

        </Card>
      </Col>
      <Col>
      {/* Place for a new thought for a logged in user. */}
        <div className="flex-row justify-space-between">
          {loggedIn && (
            <div className="mb-3">
              <ThoughtForm />
            </div>
          )}
          {/* Place list of thoughts. */}
          <div className={`mb-3 ${loggedIn && 'col-lg-8'}`}>
            {loading ? (
              <div>Loading...</div>
            ) : (
              <ThoughtList thoughts={thoughts} />
            )}
          </div>
        </div>
      </Col>
      </Row>
    </Container>
  );
};

export default Home;
