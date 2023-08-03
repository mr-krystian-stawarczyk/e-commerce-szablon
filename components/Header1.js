import React, { useEffect, useState } from "react";
import { Card, Container, Button, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import Image from "next/image";
import { client, urlFor } from "../lib/client";
import imageUrlBuilder from "@sanity/image-url";
const Header1 = () => {
	const { t } = useTranslation();
	const [backgroundImageUrl, setBackgroundImageUrl] = useState("");

	useEffect(() => {
		// Fetch background image URL from Sanity
		const fetchBackgroundImage = async () => {
			try {
				const imageData = await client.fetch(
					`*[_type == "backgroundImage"][0]`
				);
				if (imageData && imageData.image) {
					const imageUrl = imageUrlBuilder(client).image(imageData.image);
					setBackgroundImageUrl(imageUrl);
				}
			} catch (error) {
				console.error("Error fetching background image from Sanity:", error);
			}
		};

		fetchBackgroundImage();
	}, []);
	return (
		<Container
			fluid
			className="vh-100 "
			style={{
				backgroundImage: `url(${backgroundImageUrl})`, // Ustaw tło na podstawie URL obrazu z Sanity
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat",
				backgroundPosition: "center",
				// Dodaj inne style tła według potrzeb
			}}
		>
			<Row className=" py-5 mt-5 align-items-center justify-content-center text-center">
				<Col md={8} className=" pt-5 mt-5">
					<Card className="bg-transparent border-0 blur mt-5">
						<Card.Body className="text-start  ">
							<h1 className="text-bold">
								Tutaj Testuje tlo jako zdjecie z sanity
							</h1>
							<h5 className="text-bold">{t("h2")}</h5>
							<Button as={Link} href="web" className="m-2 btn-lg btn-nav">
								{t("h3")}
							</Button>
							<Button as={Link} href="seo" className="m-2 btn-lg btn-nav">
								{t("h4")}
							</Button>
							<Button
								as={Link}
								href="socialmedia"
								className="m-2 btn-lg btn-nav"
							>
								{t("h5")}
							</Button>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};

export default Header1;
