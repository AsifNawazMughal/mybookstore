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
import {
  RiEyeLine,
  RiEyeOffLine,
  RiLock2Line,
  RiMailLine,
  RiUser3Line,
} from "react-icons/ri";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { BASE_API_URL } from "../../../utils/baseApi";

const RegisterPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const firstNameIsValid = firstName.trim().length > 1;
  const lastNameIsValid = lastName.trim().length > 1;
  const emailIsValid = /\S+@\S+\.\S+/.test(email.trim());
  const passwordIsValid = password.trim().length >= 6;
  const confirmPasswordIsValid = confirmPassword === password && confirmPassword.length > 0;
  const formIsValid =
    firstNameIsValid &&
    lastNameIsValid &&
    emailIsValid &&
    passwordIsValid &&
    confirmPasswordIsValid;

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSubmitted(true);
    if (!formIsValid) {
      toast.error("Please fill all required fields correctly.");
      return;
    }

    try {
      setIsSubmitting(true);

      const response = await axios.post(`${BASE_API_URL}/register`, {
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        email: email.trim(),
        password,
      });

      const successMessage = response?.data?.message || "Registration successful";
      toast.success(successMessage);

      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setSubmitted(false);
    } catch (error) {
      const backendMessage =
        error?.response?.data?.message ||
        error?.response?.data?.error ||
        (typeof error?.response?.data === "string" ? error.response.data : null);

      toast.error(backendMessage || "Registration failed. Please try again.", {
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
                      Create your account and start building your personal reading shelf.
                    </p>
                  </div>
                </Col>

                <Col md={7} className="login-form-panel">
                  <div className="p-4 p-lg-5">
                    <h1 className="login-title mb-2">Create Account</h1>
                    <p className="login-subtitle mb-4">Join the community</p>

                    <Form className="form-theme" noValidate onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <Form.Label className="login-field-label">First Name</Form.Label>
                        <InputGroup>
                          <InputGroup.Text className="login-input-icon">
                            <RiUser3Line />
                          </InputGroup.Text>
                          <Form.Control
                            type="text"
                            placeholder="John"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            isInvalid={submitted && !firstNameIsValid}
                            required
                          />
                        </InputGroup>
                        {submitted && !firstNameIsValid && (
                          <div className="login-error-text">Please enter your first name.</div>
                        )}
                      </div>

                      <div className="mb-3">
                        <Form.Label className="login-field-label">Last Name</Form.Label>
                        <InputGroup>
                          <InputGroup.Text className="login-input-icon">
                            <RiUser3Line />
                          </InputGroup.Text>
                          <Form.Control
                            type="text"
                            placeholder="Doe"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            isInvalid={submitted && !lastNameIsValid}
                            required
                          />
                        </InputGroup>
                        {submitted && !lastNameIsValid && (
                          <div className="login-error-text">Please enter your last name.</div>
                        )}
                      </div>

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
                          <div className="login-error-text">Please enter a valid email address.</div>
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
                            placeholder="At least 6 characters"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            isInvalid={submitted && !passwordIsValid}
                            required
                          />
                          <Button
                            type="button"
                            onClick={() => setShowPassword((prev) => !prev)}
                            className="login-toggle-btn"
                            aria-label={showPassword ? "Hide password" : "Show password"}
                          >
                            {showPassword ? <RiEyeOffLine /> : <RiEyeLine />}
                          </Button>
                        </InputGroup>
                        {submitted && !passwordIsValid && (
                          <div className="login-error-text">
                            Password must be at least 6 characters.
                          </div>
                        )}
                      </div>

                      <div className="mb-4">
                        <Form.Label className="login-field-label">Confirm Password</Form.Label>
                        <InputGroup>
                          <InputGroup.Text className="login-input-icon">
                            <RiLock2Line />
                          </InputGroup.Text>
                          <Form.Control
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder="Re-enter your password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            isInvalid={submitted && !confirmPasswordIsValid}
                            required
                          />
                          <Button
                            type="button"
                            onClick={() => setShowConfirmPassword((prev) => !prev)}
                            className="login-toggle-btn"
                            aria-label={showConfirmPassword ? "Hide confirm password" : "Show confirm password"}
                          >
                            {showConfirmPassword ? <RiEyeOffLine /> : <RiEyeLine />}
                          </Button>
                        </InputGroup>
                        {submitted && !confirmPasswordIsValid && (
                          <div className="login-error-text">Passwords do not match.</div>
                        )}
                      </div>

                      <Button className="btn-theme w-100 py-2" type="submit" disabled={isSubmitting}>
                        {isSubmitting ? "Creating Account..." : "Create Account"}
                      </Button>

                      <p className="text-center mt-4 mb-0 login-subtitle">
                        Already have an account?{" "}
                        <Link to="/login" className="login-highlight text-decoration-none">
                          Sign in
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

export default RegisterPage;