import { useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  InputGroup,
  Row,
} from "react-bootstrap";
import axios from "axios";
import { RiLock2Line, RiMailLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { BASE_API_URL } from "../../../utils/baseApi";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const emailIsValid = email.trim().length > 0;
  const passwordIsValid = password.trim().length > 0;
  const formIsValid = emailIsValid && passwordIsValid;

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSubmitted(true);
    if (!formIsValid) {
      toast.error("Invalid credentials");
      return;
    }

    try {
      setIsSubmitting(true);

      const response = await axios.post(`${BASE_API_URL}/login`, {
        email: email.trim(),
        password,
        rememberMe,
      });

      const successMessage =
        response?.data?.message || "Login successful";

      const userData = response?.data?.user || response?.data?.users || null;
      const token = response?.data?.token || null;

      if (token) {
        localStorage.setItem("token", token);
      }
      if (userData) {
        localStorage.setItem("user", JSON.stringify(userData));
      }
      localStorage.setItem("isLoggedIn", "true");
      navigate("/profile", { replace: true });
      toast.success(successMessage);
    } catch (error) {
      const backendMessage =
        error?.response?.data?.message ||
        error?.response?.data?.error ||
        (typeof error?.response?.data === "string"
          ? error.response.data
          : null);

      toast.error(backendMessage || "Login failed. Please try again.", {
        autoClose: 7000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="login-page-bg py-4 d-flex align-items-center flex-grow-1">
      <Container className="h-100 d-flex align-items-center">
        <Row className="justify-content-center w-100">
          <Col lg={9} xl={8}>
            <div className="login-shell rounded-4 overflow-hidden">
              <Row className="g-0">
                <Col md={5} className="login-brand-panel d-none d-md-flex">
                  <div className="p-4 p-lg-5 d-flex flex-column justify-content-center h-100">
                    <h2 className="login-brand-title mb-3">Neth BookPoint</h2>
                    <p className="login-brand-copy mb-0">
                      Sign in to continue your reading journey and discover your next favorite book.
                    </p>
                  </div>
                </Col>

                <Col md={7} className="login-form-panel">
                  <div className="p-4 p-lg-5">
                    <h1 className="login-title mb-2">Welcome Back</h1>
                    <p className="login-subtitle mb-4">Login to your account</p>

                    <Form className="form-theme" noValidate onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <Form.Label className="login-field-label">Email Address</Form.Label>
                        <InputGroup>
                          <InputGroup.Text className="login-input-icon">
                            <RiMailLine />
                          </InputGroup.Text>
                          <Form.Control
                            type="email"
                            placeholder="name@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            isInvalid={submitted && !emailIsValid}
                            required
                          />
                        </InputGroup>
                        {submitted && !emailIsValid && (
                          <div className="login-error-text">Invalid credentials.</div>
                        )}
                      </div>

                      <div className="mb-3">
                        <Form.Label className="login-field-label">Password</Form.Label>
                        <InputGroup>
                          <InputGroup.Text className="login-input-icon">
                            <RiLock2Line />
                          </InputGroup.Text>
                          <Form.Control
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            isInvalid={submitted && !passwordIsValid}
                            required
                          />
                          <Button
                            type="button"
                            onClick={() => setShowPassword((prev) => !prev)}
                            className="login-toggle-btn"
                          >
                            {showPassword ? "Hide" : "Show"}
                          </Button>
                        </InputGroup>
                        {submitted && !passwordIsValid && (
                          <div className="login-error-text">Invalid credentials.</div>
                        )}
                      </div>

                      <div className="d-flex justify-content-between align-items-center mb-4">
                        <Form.Check
                          id="rememberMe"
                          type="checkbox"
                          label="Remember me"
                          checked={rememberMe}
                          onChange={(e) => setRememberMe(e.target.checked)}
                          className="login-remember"
                        />
                        <button type="button" className="login-link-btn">
                          Forgot password?
                        </button>
                      </div>

                      <Button className="btn-theme w-100 py-2" type="submit" disabled={isSubmitting}>
                        {isSubmitting ? "Signing In..." : "Sign In"}
                      </Button>

                      <p className="text-center mt-4 mb-0 login-subtitle">
                        Don&apos;t have an account?{" "}
                        <Link to="/register" className="login-highlight text-decoration-none">
                          Create one
                        </Link>
                      </p>
                    </Form>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default LoginPage;