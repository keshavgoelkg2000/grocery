import { React, useState, useEffect } from "react";
import { Col, Container, Form, Input, Label, Row } from "reactstrap";
import { Card, CardBody, CardTitle, CardImg, CardSubtitle, CardText } from "reactstrap";
import { Button, FormFeedback, FormGroup } from "reactstrap";

const PaytmHome = () => {

    const startPayment = () => {
        // call api to start payment
        
    };

    return (
        <Container>
            <Row className="row m-5">
                <Col className="col-md-6 offset-md-3">
                    <Card className="border-0 shadow">
                        <CardBody>
                            <h3 className="text-center">Payment Gateway</h3>
                        </CardBody>

                        <Form>
                            <FormGroup className="m-2">
                                <Label for="user_name">Your name</Label>
                                <Input type="text" style={{fontSize: "0.8rem"}}
                                    id="user_name"
                                    placeholder="Enter your name"
                                />
                            </FormGroup>

                            <FormGroup className="m-2">
                                <Label for="user_phone">Your phone number</Label>
                                <Input type="text" style={{fontSize: "0.8rem"}}
                                    id="user_phone"
                                    placeholder="Enter your phone number"
                                />
                            </FormGroup>

                            <FormGroup className="m-2">
                                <Label for="user_amount">Amount</Label>
                                <Input type="text" style={{fontSize: "0.8rem"}}
                                    id="user_amount"
                                    placeholder="Enter amount"
                                />
                            </FormGroup>

                            <Container className="text-center" style={{padding: "0px 0px 10px 0px"}}>
                                <Button outline color="primary" size="sm" onClick={startPayment()}>Proceed to Pay</Button>{' '}
                            </Container>

                        </Form>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default PaytmHome;