import React, { useState, useEffect } from "react";
import { NavDropdown, Container, Button, Dropdown } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";
import Navbar from "react-bootstrap/Navbar";
import Image from "next/image";

import { AiOutlineShopping } from "react-icons/ai";

import { useRouter } from "next/router";
import { useStateContext } from "@/context/StateContext.js";
import Cart from "./Cart.js";
import { client, urlFor } from "@/lib/client.js";
import imageUrlBuilder from "@sanity/image-url";
import { AiFillCloseCircle } from "react-icons/ai";

const NavbarComp = ({ toggleTheme }) => {
	const [imageLogo, setImageLogo] = useState(null);
	const [logoTextColor, setLogoTextColor] = useState("#ffffff");
	const [buttonBackground, setButtonBackground] = useState("#ffffff");
	const [nazwaFirmy, setNazwaFirmy] = useState("");
	const [buttonTextColor, setButtonTextColor] = useState("#000000");

	const { showCart, setShowCart, totalQuantities, cartItems } =
		useStateContext();
	const router = useRouter();

	const [scrolled, setScrolled] = useState(false);
	const [navbarColor, setNavbarColor] = useState("transparent");

	const [categories, setCategories] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await client.fetch(`*[_type == "Navbar"][0]`);
				if (data) {
					setLogoTextColor(data.logoTextColor || "");
					setButtonBackground(data.buttonBackground || "");
					setNazwaFirmy(data.nazwaFirmy || "");
					setButtonTextColor(data.buttonTextColor || "");
					setImageLogo(data.imageLogo ? urlFor(data.imageLogo).url() : null);
				}
			} catch (error) {
				console.error("Error fetching data from Sanity:", error);
			}
		};

		fetchData();
	}, []);

	useEffect(() => {
		const fetchCategories = async () => {
			try {
				const categoryData = await client.fetch(`*[_type == "category"]`);
				setCategories(categoryData);
			} catch (error) {
				console.error("Error fetching categories from Sanity:", error);
			}
		};

		fetchCategories();
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setScrolled(true);
				setNavbarColor("#ffffff");
			} else {
				setScrolled(false);
				setNavbarColor("transparent");
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<Navbar
			expand="lg"
			fixed="top"
			style={{
				height: "70px",
				width: "100vw",
				backgroundColor: navbarColor,
				transition: "background-color 0.5s ease",
			}}
			className="nav-transition rounded-bottom"
			collapseOnSelect
		>
			<Container>
				<Navbar.Brand
					as={Link}
					href="/"
					className="rounded py-0 d-flex align-items-center"
				>
					{imageLogo && (
						<Image src={imageLogo} width={50} height={50} priority alt="" />
					)}
					<span className={scrolled ? "logo" : "logo1"}>
						<span className="mx-2 nazwa-firmy" style={{ color: logoTextColor }}>
							{nazwaFirmy}
						</span>
					</span>
				</Navbar.Brand>
				<Navbar.Toggle
					aria-controls="responsive-navbar-nav"
					aria-label="Toggle navigation"
				></Navbar.Toggle>
				<Navbar.Collapse
					id="basic-navbar-nav"
					className="rounded justify-content-end text-center m-1 navbar-toggler border-0"
				>
					<Nav className="navbar-collapse justify-content-end text-center rounded">
						<Nav.Link as={Link} href="/about" className="m-1">
							<Button
								className="btn-md py-2 border-0 shadow-md"
								style={{
									backgroundColor: buttonBackground,
									color: buttonTextColor,
								}}
							>
								O Nas
							</Button>
						</Nav.Link>

						{/* Replaced Produkty with Dropdown */}
						<NavDropdown
							title="Produkty"
							id="category-dropdown"
							className="m-1"
						>
							{categories.map((category) => (
								<NavDropdown.Item
									key={category._id}
									as={Link}
									href={`/${category.name}`} // Dynamiczny link do strony kategorii
								>
									{category.name}
								</NavDropdown.Item>
							))}
						</NavDropdown>

						<Nav.Link as={Link} href="/blog">
							<Button
								className="btn-md py-2 border-0 shadow-md"
								style={{
									backgroundColor: buttonBackground,
									color: buttonTextColor,
								}}
							>
								Porady
							</Button>
						</Nav.Link>

						<Nav.Link as={Link} href="/contact" className="m-1">
							<Button
								className="btn-md py-2 border-0 shadow-md"
								style={{
									backgroundColor: buttonBackground,
									color: buttonTextColor,
								}}
							>
								Kontakt
							</Button>
						</Nav.Link>

						<div>
							<Button
								type="button"
								variant="danger"
								onClick={() => setShowCart(true)}
							>
								<AiOutlineShopping />
								<span className="cart-item-qty">{totalQuantities}</span>
							</Button>
							{showCart && <Cart />}
						</div>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavbarComp;
