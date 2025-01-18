import Link from "next/link";
import React, { useRef, useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

import { AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai";

import { BsSnapchat } from "react-icons/bs";
import { client, urlFor } from "../lib/client";
function Footer() {
	const sectionRef = useRef(null);
	const [backgroundColor, setBackgroundColor] = useState("#ffffff");
	const [textColor, setTextColor] = useState("#000000");
	const [nazwaFirmy, setNazwaFirmy] = useState("");

	const [fbLink, setFbLink] = useState("");
	const [snLink, setSnLink] = useState("");
	const [instaLink, setInstaLink] = useState("");

	const [email, setEmail] = useState("");

	const handleLinkClick = (link) => {
		if (link) {
			window.open(`https://${encodeURIComponent(link)}`);
		}
	};

	const [categories, setCategories] = useState([]);

	useEffect(() => {
		const fetchCategories = async () => {
			try {
				const categoryData = await client.fetch(
					`*[_type == "category"] | order(_createdAt) [0...4]`
				);
				setCategories(categoryData);
			} catch (error) {
				console.error("Error fetching categories from Sanity:", error);
			}
		};

		fetchCategories();
	}, []);

	const handleEmailClick = () => {
		window.location.href = `mailto:${email}`;
	};

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await client.fetch(`*[_type == "footer"][0]`);
				if (data) {
					setBackgroundColor(data.backgroundColor || "#ffffff");
					setNazwaFirmy(data.nazwaFirmy || "");
					setFbLink(data.fbLink || "");
					setSnLink(data.snLink || "");
					setInstaLink(data.istaLink || "");
					setTextColor(data.textColor || "");
					setEmail(data.email || "");
				}
			} catch (error) {
				console.error("Error fetching data from Sanity:", error);
			}
		};

		fetchData();
	}, []);

	const backgroundStyle = { backgroundColor: backgroundColor };

	return (
		<Container
			fluid
			className="overflow-hidden shadow-md "
			style={{
				backgroundColor: backgroundColor,
				color: textColor,
			}}
			ref={sectionRef}
			id="contact"
		>
			<div>
				<Row className=" justify-content-center align-items-top text-center  mt-2  border-bottom">
					<Col lg={3} sm={6} className=" mx-auto">
						<Card
							style={{ width: "20rem" }}
							className="bg-transparent border-0  "
						>
							<Card.Body className="">
								<h3 className="my-3 text-bold">Nasza firma</h3>
								<Link href="/about" className="footer-links">
									<Card.Text
										className="py-2 hover"
										style={{
											color: textColor,
										}}
									>
										{" "}
										O nas
									</Card.Text>
								</Link>
								<Link href="/contact" className="footer-links">
									<Card.Text
										className="py-2 hover"
										style={{
											color: textColor,
										}}
									>
										Kontakt
									</Card.Text>
								</Link>
								<Link href="/blog" className="footer-links">
									<Card.Text
										className="py-2 hover"
										style={{
											color: textColor,
										}}
									>
										Porady
									</Card.Text>
								</Link>
								<Link href="/contact" className="footer-links">
									<Card.Text
										className="py-2 hover"
										style={{
											color: textColor,
										}}
									>
										Pytania
									</Card.Text>
								</Link>
							</Card.Body>
						</Card>
					</Col>
					<Col lg={3} sm={6} className="mx-auto">
						<Card
							style={{ width: "20rem" }}
							className="bg-transparent border-0  "
						>
							<Card.Body className="d-flex justify-content-center flex-column align-items-center">
								<h3 className="my-3 text-bold">Produkty</h3>
								{categories &&
									categories.map((category) => (
										<Link
											key={category._id}
											href="/products"
											className="mx-2 rounded my-2 btn-dark footer-links hover"
											style={{
												color: textColor,
											}}
										>
											{category.name}
										</Link>
									))}
							</Card.Body>
						</Card>
					</Col>
					<Col lg={3} sm={6} className=" mx-auto">
						<Card
							style={{ width: "20rem" }}
							className="bg-transparent border-0  "
						>
							<Card.Body className="">
								<h3 className="my-3 text-bold">Social Media </h3>

								<Card.Text className="footer-links contact-links">
									<a onClick={() => handleLinkClick(fbLink)} target="_blank">
										<AiOutlineFacebook
											style={{ fontSize: "3rem" }}
											className="contact-icons fb-icon"
										/>
									</a>
								</Card.Text>

								<Card.Text className="footer-links contact-links">
									<a onClick={() => handleLinkClick(instaLink)} target="_blank">
										<AiOutlineInstagram
											style={{ fontSize: "3rem" }}
											className="contact-icons in-icon"
										/>
									</a>
								</Card.Text>

								<Card.Text className="footer-links contact-links">
									<a onClick={() => handleLinkClick(snLink)} target="_blank">
										<BsSnapchat
											style={{ fontSize: "3rem" }}
											className="contact-icons sn-icon"
										/>
									</a>
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col lg={3} sm={6} className=" mx-auto">
						<Card
							className="bg-transparent border-0  pt-3 "
							style={{ width: "20rem" }}
						>
							<h3 className="my-3 text-bold">Kontakt</h3>
							<a
								onClick={handleEmailClick}
								className="footer-links hover"
								style={{
									color: textColor,
								}}
							>
								<h4 className="py-5">{email}</h4>
							</a>
						</Card>
					</Col>
				</Row>
				<Row className="text-center my-2">
					<Col>
						<h6>2023 {nazwaFirmy} All Rights Reserved</h6>
					</Col>
					<Col>
						<Link
							href="/policy"
							className="footer-links "
							style={{
								color: textColor,
							}}
						>
							<h6 className="hover">Polityka & Cookies</h6>
						</Link>
					</Col>
				</Row>
			</div>
		</Container>
	);
}

export default Footer;
