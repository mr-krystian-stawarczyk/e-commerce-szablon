import React from "react";
import { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

import Link from "next/link";

import Image from "next/image";
import { client, urlFor } from "../lib/client";
import imageUrlBuilder from "@sanity/image-url";
function About2() {
	const [backgroundColor, setBackgroundColor] = useState("#ffffff");
	const [textDuzy1, setTextDuzy1] = useState("");
	const [textDuzy2, setTextDuzy2] = useState("");
	const [textMaly1, setTextMaly1] = useState("");
	const [textMaly2, setTextMaly2] = useState("");
	const [textMaly3, setTextMaly3] = useState("");
	const [textMaly4, setTextMaly4] = useState("");
	const [textMaly5, setTextMaly5] = useState("");
	const [textMaly6, setTextMaly6] = useState("");
	const [textColor, setTextColor] = useState("#000000");

	const [windowWidth, setWindowWidth] = useState(0);
	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};

		// Attach the event listener only on the client side
		if (typeof window !== "undefined") {
			setWindowWidth(window.innerWidth);
			window.addEventListener("resize", handleResize);
		}

		// Clean up the event listener when the component unmounts
		return () => {
			if (typeof window !== "undefined") {
				window.removeEventListener("resize", handleResize);
			}
		};
	}, []);

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	const isMobile = windowWidth <= 768;

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await client.fetch(`*[_type == "onas2"][0]`);
				if (data) {
					setBackgroundColor(data.backgroundColor || "#ffffff");
					setTextDuzy1(data.textDuzy1 || "");
					setTextDuzy2(data.textDuzy2 || "");
					setTextMaly1(data.textMaly1 || "");
					setTextMaly2(data.textMaly2 || "");
					setTextMaly3(data.textMaly3 || "");
					setTextMaly4(data.textMaly4 || "");
					setTextMaly5(data.textMaly5 || "");
					setTextMaly6(data.textMaly6 || "");
					setTextColor(data.textColor || "");
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
			className={`d-flex flex-column py-5 justify-content-center align-items-center min-vh-100`}
			style={{ ...backgroundStyle, color: textColor }}
		>
			<Row className="text-center d-row my-2">
				<h1>{textDuzy1}</h1>
				<h3>{textDuzy2}</h3>
			</Row>
			<Row className=" text-center  ">
				<Col lg={3} className="mx-auto">
					<div initial={{ opacity: 0 }} transition={{ delay: 1 }}>
						<Card className="border-0 bg-transparent ">
							<Card.Body>
								<h1>1</h1>
								<Card.Text className="text-bold">{textMaly1}</Card.Text>
								<Card.Text>{textMaly2}</Card.Text>
							</Card.Body>
						</Card>
					</div>
				</Col>
				<Col lg={3} className="mx-auto">
					<div initial={{ opacity: 0 }} transition={{ delay: 1 }}>
						<Card className="border-0 bg-transparent ">
							<Card.Body>
								<h1>2</h1>
								<Card.Text className="text-bold">{textMaly3}</Card.Text>
								<Card.Text>{textMaly4}</Card.Text>
							</Card.Body>
						</Card>
					</div>
				</Col>
				<Col lg={3} className="mx-auto ">
					<div initial={{ opacity: 0 }} transition={{ delay: 1 }}>
						<Card className="border-0 bg-transparent ">
							<Card.Body>
								<h1>3</h1>
								<Card.Text className="text-bold">{textMaly5}</Card.Text>
								<Card.Text>{textMaly6}</Card.Text>
							</Card.Body>
						</Card>{" "}
					</div>
				</Col>
			</Row>
		</Container>
	);
}

export default About2;
