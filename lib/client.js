import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
	projectId: "ma7izmez",
	dataset: "production",
	apiVersion: "2023-05-09",
	useCdn: "true",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
