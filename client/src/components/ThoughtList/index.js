import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardTitle, CardBody, CardSubtitle, CardText, Col, Row } from 'reactstrap';

const ThoughtList = ({ thoughts, title }) => {
  if (!thoughts.length) {
    return <h3>No Blogs Yet</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {thoughts &&
        thoughts.map(thought => (
          <Card key={thought._id} className="mb-3 p-3">
            <Row>
              <Col md="auto">
                <img
                  alt="Sample"
                  src="https://picsum.photos/150/100"
                />
              </Col>
              <Col>
                <CardTitle tag="h4">
                  Blog title - if desired (yes?)
                </CardTitle>

                <CardBody>
                  <Link
                    to={`/thought/${thought._id}`}
                    style={{
                      textDecoration: 'none'
                    }}
                  >
                    <CardText >{thought.thoughtText}</CardText>
                  </Link>
                </CardBody>
                <CardText className="card-header">
                  {thought.createdAt}
                </CardText>
              </Col>
            </Row>
          </Card>
        ))}
    </div>
  );
};

export default ThoughtList;