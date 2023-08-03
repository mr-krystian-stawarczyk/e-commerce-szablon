import { Card, Container, Button, Row, Col } from "react-bootstrap";

import { useTranslation } from "react-i18next";
import Link from "next/link";
import Image from "next/image";

const Header1 = () => {
	const { t } = useTranslation();

	return (
		<Container className="py-5 mt-5 header-container">
			<Row className=" py-5 mt-5 align-items-center justify-content-center text-center">
				<Col md={8} className=" pt-5 mt-5">
					<Card className="bg-transparent border-0 blur mt-5">
						<Card.Body className="text-start  ">
							<h1 className="text-bold">{t("h1")}</h1>
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
