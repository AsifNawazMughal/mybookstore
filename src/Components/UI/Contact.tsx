import { useState } from 'react';

import { Col, Container, Row, Form, Button, FloatingLabel } from 'react-bootstrap'

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(''); 

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !subject || !message) {
      alert('Please fill in all fields.');
      return;
    } 

    if(name.trim()===''){
      setError('Name is required');
      return;
    }

    if(email.trim()===''){
      setError('Email is required');
      return;
    }

    if(subject.trim()===''){
      setError('Subject is required');
      return;
    }

    if(message.trim()===''){
      setError('Message is required');
      return;
    }

    setError(''); // Clear any previous errors

    const formData ={
      name,
      email,
      subject,
      message
    }
    // Handle form submission logic here
    console.error( error);
    console.log({formData});
  }

    return (
        <section className="py-5" style={{ backgroundColor: "var(--theme-black)", color: "var(--theme-white)" }}>
            <Container>
                <Row className="justify-content-center mb-5">
                    <Col md={8} lg={6} className="text-center">
                        <h2 className="display-5 fw-bold mb-3" style={{ color: "var(--theme-gold)" }}>Get in Touch</h2>
                        <p className="lead" style={{ color: "rgba(255,255,255,0.7)" }}>
                            Have questions or feedback? We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
                        </p>
                    </Col>
                </Row>

                <Row className="justify-content-center">
                    <Col md={10} lg={8}>
                        <div className="p-4 p-md-5 rounded shadow-sm" style={{ border: "1px solid var(--theme-gold)", background: "rgba(255,255,255,0.05)" }}>
                            <Form className="form-theme" onSubmit={handleSubmit}>
                                <Row className="g-3">
                                    <Col md={6}>
                                        <FloatingLabel controlId="floatingName" label="Your Name">
                                            <Form.Control type="text"
                                              placeholder="Your Name"
                                              value={name}
                                              onChange={(e) => setName(e.target.value)}
                                              required
                                            />
                                        </FloatingLabel>
                                    </Col>
                                    <Col md={6}>
                                        <FloatingLabel controlId="floatingEmail" label="Email Address">
                                            <Form.Control
                                              type="email"
                                              placeholder="name@example.com"
                                              value={email}
                                              onChange={(e) => setEmail(e.target.value)}
                                              required
                                            />
                                        </FloatingLabel>
                                    </Col>
                                    <Col xs={12}>
                                        <FloatingLabel controlId="floatingSubject" label="Subject">
                                            <Form.Control
                                              type="text"
                                              placeholder="Subject"
                                              value={subject}
                                              onChange={(e) => setSubject(e.target.value)}
                                              required
                                            />
                                        </FloatingLabel>
                                    </Col>
                                    <Col xs={12}>
                                        <FloatingLabel controlId="floatingMessage" label="Message">
                                            <Form.Control
                                                as="textarea"
                                                placeholder="Leave a comment here"
                                                style={{ height: '150px' }}
                                                value={message}
                                                onChange={(e) => setMessage(e.target.value)}
                                                required
                                            />
                                        </FloatingLabel>
                                    </Col>
                                    <Col xs={12} className="text-center mt-4">
                                        <Button className="btn-theme px-5 py-3" size="lg" type="submit">
                                            Send Message
                                        </Button>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Contact