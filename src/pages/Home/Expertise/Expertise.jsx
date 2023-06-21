import React from 'react';
import { Card, Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Expertise = () => {
    return (
        <div id='expertise' className='my-5'>
            <Container>
                <h2 className='text-center text-primary mb-4'>Our Expertise</h2>

                <Row xs={1} md={2} className="g-4">
                    <Col>
                        <Card className='bg-info border border-3 border-light shadow p-4'>
                            <Card.Body>
                                <Card.Title className='text-center'>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card className='bg-info border border-3 border-light shadow p-4'>
                            <Card.Body>
                                <Card.Title className='text-center'>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card className='bg-info border border-3 border-light shadow p-4'>
                            <Card.Body>
                                <Card.Title className='text-center'>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card className='bg-info border border-3 border-light shadow p-4'>
                            <Card.Body>
                                <Card.Title className='text-center'>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Expertise;