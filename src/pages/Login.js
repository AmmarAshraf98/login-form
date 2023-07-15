import { Button, Col, Container, Form, FormGroup, Row } from "react-bootstrap";
// import HeroSection from "../component/website-component/HeroSection";
import "../style/login.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { BsArrowRight } from "react-icons/bs";
function Login() {
  const [tap, setTap] = useState("up");

  return (
    <section className="parent">
      <Container>
        <Row>
          <Col className="">
            <div className="wrapper_signing">
              <div className="d-flex btn_container">
                <div
                  className={`signup ${tap === "up" ? " active" : ""}`}
                  onClick={() => setTap("up")}
                >
                  <Link to={"#"}>Sign Up</Link>
                </div>
                <div
                  className={`login ${tap === "in" ? " active" : ""}`}
                  onClick={() => setTap("in")}
                >
                  <Link to={"#"}>Sign In</Link>
                </div>
              </div>
              {tap === "up" ? (
                <div className="signup_box ">
                  <h1 className="form_header mb-3">Create your account</h1>
                  <p className="form_p mb-3">
                    Easy Shopping for All you need, Happy for join us. Easy
                    Shopping for All you{" "}
                  </p>
                  <button className="google mb-3">
                    <span className="google_icon mx-1">
                      <FcGoogle />
                    </span>
                    Sign Up With Google
                  </button>
                  <p className="or">or</p>
                  <Form className="form">
                    <FormGroup className="">
                      <input
                        type="text"
                        required
                        placeholder="First Name"
                      ></input>
                    </FormGroup>
                    <FormGroup className="">
                      <input
                        type="text"
                        required
                        placeholder="Last Name"
                      ></input>
                    </FormGroup>
                    <FormGroup className="">
                      <input
                        type="email"
                        required
                        placeholder="Email Address"
                      ></input>
                    </FormGroup>
                    <FormGroup className="">
                      <input
                        type="password"
                        required
                        placeholder="Password "
                      ></input>
                    </FormGroup>
                    <Button type="submit" className="signup">
                      <span className="mx-3 fw-bold">Sign up</span>
                      <span className="arrow">
                        <BsArrowRight />
                      </span>
                    </Button>
                  </Form>
                </div>
              ) : (
                <div className="login_box ">
                  <h1 className="form_header mb-3">Sign in to your account.</h1>
                  <p className="form_p mb-3">
                    Easy Shopping for All you need, Happy for join us. Easy
                    Shopping for All you{" "}
                  </p>
                  <button className="google mb-3">
                    <span className="google_icon mx-1">
                      <FcGoogle />
                    </span>
                    Sign In With Google
                  </button>
                  <p className="or">or</p>
                  <Form className="form">
                    <FormGroup className="">
                      <input
                        type="email"
                        required
                        placeholder="Email Address"
                      ></input>
                    </FormGroup>
                    <FormGroup className="">
                      <input
                        type="password"
                        required
                        placeholder="Password "
                      ></input>
                    </FormGroup>
                    <Button type="submit" className="signup">
                      <span className="mx-3 fw-bold">Sign In</span>
                      <span className="arrow">
                        <BsArrowRight />
                      </span>
                    </Button>
                  </Form>
                </div>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default Login;
