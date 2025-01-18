// pages/[category].js

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { client } from "@/lib/client"; // Upewnij się, że masz konfigurację do pobierania danych z Sanity
import { Container, Button } from "react-bootstrap";
import Image from "next/image";
import { urlFor } from "@/lib/client"; // Upewnij się, że masz funkcję do generowania URL z Sanity
import Link from "next/link"; // Importuj Link z Next.js

const CategoryPage = () => {
	const router = useRouter();
	const { category } = router.query; // Dynamiczny segment URL
	const [categoryData, setCategoryData] = useState(null);
	const [products, setProducts] = useState([]);

	useEffect(() => {
		if (category) {
			const fetchData = async () => {
				try {
					// Pobierz dane kategorii
					const categoryRes = await client.fetch(
						`*[_type == "category" && name == "${category}"][0]`
					);
					setCategoryData(categoryRes);

					// Pobierz produkty powiązane z kategorią
					const productsRes = await client.fetch(
						`*[_type == "product" && references(*[_type == "category" && name == "${category}"]._id)]`
					);
					setProducts(productsRes);
				} catch (error) {
					console.error("Error fetching data:", error);
				}
			};
			fetchData();
		}
	}, [category]);

	return (
		<Container>
			<h1>{category}</h1>

			<div className="product-list">
				{products.map((product) => (
					<div key={product._id} className="product-item">
						<h2>{product.name}</h2>
						<p>{product.description}</p>
						{/* Dodanie obrazka produktu */}
						{product.image && product.image[0] && (
							<div className="product-image">
								<Image
									src={urlFor(product.image[0]).url()} // Poprawne wywołanie urlFor
									alt={product.name}
									width={300} // Możesz dostosować rozmiar
									height={300} // Możesz dostosować rozmiar
								/>
							</div>
						)}
						{/* Przycisk do przejścia do strony produktu */}
						<Link href={`/product/${product.slug.current}`} passHref>
							<Button variant="primary" className="mt-3">
								Zobacz szczegóły
							</Button>
						</Link>
					</div>
				))}
			</div>
		</Container>
	);
};

export default CategoryPage;
