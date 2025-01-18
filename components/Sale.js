import React, { useEffect, useState } from "react";
import { Container, Row, Button, ButtonGroup, Col } from "react-bootstrap";
import { client } from "../lib/client";
import Product from "./Products";

const Sale = () => {
	const [products, setProducts] = useState([]);
	const [sortOrderPrice, setSortOrderPrice] = useState("asc");
	const [searchTerm, setSearchTerm] = useState("");
	const [visibleProducts, setVisibleProducts] = useState(3);
	const [showMore, setShowMore] = useState(false);

	// Fetch tylko produkty na wyprzedaży
	useEffect(() => {
		fetchSaleProducts();
	}, []);

	const fetchSaleProducts = async () => {
		try {
			const data = await client.fetch(
				`*[_type == "product" && category->name == "wyprzedaz"]`
			);

			// Filtracja po nazwie produktu na podstawie searchTerm
			const filteredData = data.filter((product) =>
				product.name.toLowerCase().includes(searchTerm.toLowerCase())
			);

			setProducts(filteredData);
		} catch (error) {
			console.error("Error fetching sale products from Sanity:", error);
		}
	};

	const sortByPrice = () => {
		const sortedProducts = [...products];
		sortedProducts.sort((a, b) => {
			if (sortOrderPrice === "asc") {
				return a.price - b.price;
			} else {
				return b.price - a.price;
			}
		});
		setProducts(sortedProducts);
		setSortOrderPrice(sortOrderPrice === "asc" ? "desc" : "asc");
	};

	const handleShowMore = () => {
		// Jeśli showMore jest false, zwiększ liczbę widocznych produktów o 20
		if (!showMore) {
			setVisibleProducts(visibleProducts + 20);
		}
		setShowMore(true);
	};

	return (
		<Container fluid className="py-5 bg-white">
			<Row className="text-center align-items-center justify-content-center pt-5">
				<h1 className="text-dark my-5">Produkty na Wyprzedaży - Sale</h1>
				<ButtonGroup className="button-group-container overflow-hidden">
					<Button
						onClick={sortByPrice}
						className="mx-auto rounded my-2 btn-dark"
					>
						Sortuj po cenie
					</Button>
				</ButtonGroup>
			</Row>

			<Row className="justify-content-center align-items-center text-center">
				{products.slice(0, visibleProducts).map((product) => (
					<Product key={product._id} product={product} />
				))}
			</Row>
			<Row className="text-center">
				<Col md={12}>
					{!showMore && products.length > visibleProducts && (
						<Button onClick={handleShowMore} className="mt-3 btn-dark">
							Pokaż więcej
						</Button>
					)}
				</Col>
			</Row>
		</Container>
	);
};

export default Sale;
