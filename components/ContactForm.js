import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import emailjs from "emailjs-com";

import { useRouter } from "next/router";
import Image from "next/image";

export const ContactForm = () => {
	const router = useRouter();
	const { t } = useTranslation();
	const { id } = router.query;

	const [formData, setFormData] = useState({
		name: "",
		email: "",
		description: "",
		phone: "",
	});

	const [isFormSubmitted, setIsFormSubmitted] = useState(false);

	const [loading, setLoading] = useState(false);

	const { name, email, description, phone } = formData;

	const handleChangeInput = (e) => {
		const { name, value } = e.target;

		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);

		emailjs
			.sendForm(
				"service_u09q8ve",
				"template_ID",
				e.target,
				"user_yM2aRTOGQYE8hG9oFHJIr"
			)
			.then(
				(result) => {
					setLoading(false);
					setIsFormSubmitted(true);
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	return (
		<div ref={ref} animate={controls}>
			<Container className="my-5 py-5" id="contact">
				<Row className="text-center">
					<h1 className="my-5">{t("header21")}</h1>
				</Row>
				<Row className="justify-content-center align-items-center">
					<Col lg={5} className="mx-auto my-2 text-center">
						<Image
							src="/assets/webentwicklung-nettetal-kontakt-form.png"
							alt="webentwicklung-nettetal-kontakt-form"
							width={400}
							height={400}
							className="responsive-image"
							priority
						/>
					</Col>
					<Col lg={5} className="mx-auto my-2">
						{!isFormSubmitted ? (
							<Form
								className="app__footer-form app__flex mt-5"
								onSubmit={handleSubmit}
							>
								<Row className="justify-content-center align-items-center">
									<Col>
										<Form.Group className="mb-3">
											<Form.Control
												className="p-text my-3"
												type="text"
												placeholder="Name"
												value={name}
												name="name"
												onChange={handleChangeInput}
												required
												autoComplete="true"
												id="nameInput"
											/>
										</Form.Group>
									</Col>
									<Col>
										<Form.Group className="mb-3">
											<Form.Control
												className="p-text my-3"
												type="text"
												placeholder="Telefon"
												value={phone}
												name="phone"
												onChange={handleChangeInput}
												required
												autoComplete="true"
												id="phoneInput"
											/>
										</Form.Group>
									</Col>
									<Col>
										<Form.Group className="mb-3">
											<Form.Control
												className="p-text my-3"
												type="email"
												placeholder="E-mail"
												value={email}
												name="email"
												onChange={handleChangeInput}
												required
												autoComplete="true"
												id="emailInput"
											/>
										</Form.Group>
									</Col>
								</Row>
								<Row>
									<Col>
										<Form.Group className="my-3">
											<Form.Control
												className="p-text my-3"
												as="textarea"
												placeholder="Description"
												value={description}
												name="description"
												onChange={handleChangeInput}
												rows={3}
												required
												id="descriptionInput"
											/>
										</Form.Group>
									</Col>
								</Row>

								<Row className="justify-content-center align-items-center text-center">
									<Col className="mx-auto">
										<Button
											type="submit"
											className="p-text m-2 btn-nav border-0"
										>
											{loading ? "Sending..." : "Schicken"}
										</Button>
									</Col>
								</Row>
							</Form>
						) : (
							<div>
								<h3 className="head-text"> Thank You For Contact!</h3>
							</div>
						)}
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default ContactForm;
