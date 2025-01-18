import Head from "next/head";
import React from "react";

import Header1 from "@/components/Header1";
{
	/* 	import TechBar from "@/components/TechBar";  */
}
import Header2 from "@/components/Header2";
import Header3 from "@/components/Header3";
import Header4 from "@/components/Header4";
import Header5 from "@/components/Header5";
import Header6 from "@/components/Header6";
import Header7 from "@/components/Header7";
import Sale from "@/components/Sale";

export default function Home() {
	return (
		<>
			<Head>
				<title>E-Commerce</title>
				<meta name="" content="" />
				<meta name="robots" content="index, follow" />
			</Head>

			<Header1 />
			<Sale />
			<Header2 />
			<Header3 />
			<Header4 />
			<Header5 />
			<Header6 />
			<Header7 />
		</>
	);
}
