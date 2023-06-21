import React from 'react';
import { Card, Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Expertise = () => {
    return (
        <div id='expertise' className='my-5'>
            <Container>
                <h2 className='text-center text-primary mb-4 fw-bold'>Our Expertise</h2>

                <Row xs={1} md={2} className="g-4">
                    <Col>
                        <Card className='bg-info border border-3 border-light shadow p-4'>
                            <Card.Body>
                                <Card.Title className='text-center'>Hiring</Card.Title>
                                <Card.Text>
                                    Join Our Team - Exciting Job Opportunities! We're hiring talented professionals who are passionate about their work. Be part of our success story and contribute to our thriving organization. Apply now for a rewarding career journey!
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card className='bg-info border border-3 border-light shadow p-4'>
                            <Card.Body>
                                <Card.Title className='text-center'>Human Resources Management</Card.Title>
                                <Card.Text>
                                    Human Resources Management involves overseeing the strategic management of an organization's workforce, including recruitment, training, performance evaluation, and employee relations. It focuses on maximizing employee productivity.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card className='bg-info border border-3 border-light shadow p-4'>
                            <Card.Body>
                                <Card.Title className='text-center'>Taxation</Card.Title>
                                <Card.Text>
                                    Taxation is the process by which governments collect funds from individuals and businesses to finance public services and infrastructure. It is a vital aspect of economic systems worldwide, enabling governments to fulfill.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card className='bg-info border border-3 border-light shadow p-4'>
                            <Card.Body>
                                <Card.Title className='text-center'>Regulatory Guidance</Card.Title>
                                <Card.Text>
                                    "Regulatory Guidance" provides essential instructions and recommendations for complying with legal and industry regulations. It offers clear and concise guidance on navigating complex regulatory frameworks, ensuring organizations.
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