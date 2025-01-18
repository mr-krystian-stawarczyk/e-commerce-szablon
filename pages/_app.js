import React, { useEffect } from "react";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "@/components/Layout";
import { SSRProvider } from "react-bootstrap";

import Head from "next/head";

import { useRouter } from "next/router";
import { StateContext } from "@/context/StateContext";

function App(props) {
	const { Component, pageProps, router } = props;
	const reactRouter = useRouter();

	useEffect(() => {
		const handleRouteChange = (url) => {};

		reactRouter.events.on("routeChangeComplete", handleRouteChange);
		return () => {
			reactRouter.events.off("routeChangeComplete", handleRouteChange);
		};
	}, [reactRouter.events]);

	return (
		<SSRProvider>
			<StateContext>
				<Layout>
					<Head>
						<title>E Commerce </title>
						<meta name="" content="" />
						<link rel="manifest" href="/manifest.json" />
					</Head>

					<Component {...pageProps} key={router.route} />
				</Layout>
			</StateContext>
		</SSRProvider>
	);
}

export default App;
