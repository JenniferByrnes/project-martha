import React from 'react';
import { Container, Card, CardBody, CardTitle, CardSubtitle, Button, CardText, Col, Row } from 'reactstrap';
import { useQuery } from '@apollo/client';
import { QUERY_THOUGHTS } from '../utils/queries';
import ThoughtList from '../components/ThoughtList';
import Auth from '../utils/auth';
import ThoughtForm from '../components/ThoughtForm';

const Home = () => {
  // use useQuery hook to make query request
  const { loading, data } = useQuery(QUERY_THOUGHTS);

  const thoughts = data?.thoughts || [];
  console.log(thoughts);

  const loggedIn = Auth.loggedIn();

  return (
    <Container>
      <Row >
        <Col md="auto">
          {/* Info card on the left side */}
          <Card
            style={{
              width: '18rem'
            }}
          >
            <img
              alt="Sample"
              src="https://picsum.photos/300/200"
            />
            <CardBody>
              <CardTitle tag="h5">
                Card title
              </CardTitle>
              <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
              >
                Card subtitle
              </CardSubtitle>
              <CardText>
                Some quick example text to build on the card title and make up the bulk of the card‘s content.
              </CardText>
            </CardBody>

          </Card>
        </Col>
        <Col>
          {/* Column for blog posts */}
          <Row className="flex-row justify-space-between">
            {loggedIn && (
              <div className="mb-3">
                {/* Place for a new thought for a logged in user. This will not show for an unlogged in user */}
                <ThoughtForm />
              </div>
            )}
            {/* Blog articles. */}
            <div className={`mb-3 ${loggedIn}`}>
              {loading ? (
                <div>Loading...</div>
              ) : (
                <ThoughtList thoughts={thoughts} />
              )}
            </div>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
