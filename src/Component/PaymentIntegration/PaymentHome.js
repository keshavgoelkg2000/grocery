import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Col, Container, Form, Input, Label, Row } from "reactstrap";
import { Card, CardBody, CardTitle, CardImg, CardSubtitle, CardText } from "reactstrap";
import { Button, FormFeedback, FormGroup } from "reactstrap";
import { createOrder } from "../../apis/user-service";
import LogoTrueBazaar from "../../images/logo.jpg";
import { toast } from "react-toastify";

const PaymentHome = () => {

    const navigate = useNavigate();

    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.async = true;
        document.body.appendChild(script);
        document.title = "Payment Gateway | True Bazaar";

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const [data, setData] = useState({
        user_name: '',
        user_phone: '',
        user_amount: ''
    });

    const handleChange = (event, props)=>{
        setData({...data, [props]: event.target.value})
    }

    const startPayment = (event)=>{
        event.preventDefault();
        let amount = data.user_amount;
        console.log(amount);

        if(amount == '' || amount == null || amount <= 0){
            alert("Your cart is empty !!");
            return;
        }

        let options;

        createOrder(data).then((resp) => {
            console.log("success !!")
            console.log(resp);
            if(resp.status == "created"){
                // open payment form
                options = {
                    key: 'rzp_test_MnvxtQeZjwMCUu',
                    amount: resp.amount,
                    currency: resp.currency,
                    name: 'True Bazaar',
                    // description: 'Doing payment in exchange of goods',
                    description: "Test Transaction",
                    // image: "https://example.com/your_logo",
                    image: {LogoTrueBazaar},
                    orderId: resp.id,
                    handler: function (response){
                        console.log(response.razorpay_payment_id);
                        console.log(response.razorpay_order_id);
                        console.log(response.razorpay_signature)
                    },
                    prefill: {
                        name: "",
                        email: "",
                        contact: ""
                    },
                    notes: {
                        address: "Razorpay Corporate Office"
                    },
                    theme: {
                        color: "#3399cc"
                    }
                }
            }

            console.log(options);

            const rzp = new window.Razorpay(options);
            rzp.on('payment.failed', function (response){
                console.log(response.error.code);
                console.log(response.error.description);
                console.log(response.error.source);
                console.log(response.error.step);
                console.log(response.error.reason);
                console.log(response.error.metadata.order_id);
                console.log(response.error.metadata.payment_id);
                alert("OOPs payment failed !!");
            });
            rzp.open();

            rzp.on('payment.successful', function(response){
                console.log("Payment success:", response);

                toast.success("Payment done !!", {position: "top-center"});
            })

            // navigate("/LUOVerify");
        }).catch((err) => {
            // toast.warning("Something went wrong !!");
            console.log("error !!")
        })
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
                                    onChange={(e) => handleChange(e, 'user_name')}
                                    placeholder="Enter your name"
                                />
                            </FormGroup>

                            <FormGroup className="m-2">
                                <Label for="user_phone">Your phone number</Label>
                                <Input type="text" style={{fontSize: "0.8rem"}}
                                    id="user_phone"
                                    onChange={(e) => handleChange(e, 'user_phone')}
                                    placeholder="Enter your phone number"
                                />
                            </FormGroup>

                            <FormGroup className="m-2">
                                <Label for="user_amount">Amount</Label>
                                <Input type="text" style={{fontSize: "0.8rem"}}
                                    id="user_amount"
                                    onChange={(e) => handleChange(e, 'user_amount')}
                                    placeholder="Enter amount"
                                />
                            </FormGroup>

                            <Container className="text-center" style={{padding: "0px 0px 10px 0px"}}>
                                <Button outline color="primary" size="sm" onClick={(e)=>startPayment(e)}>Proceed to Pay</Button>{' '}
                            </Container>

                        </Form>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default PaymentHome;