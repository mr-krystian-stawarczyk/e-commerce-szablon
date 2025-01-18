const nextConfig = {
	reactStrictMode: false,
	images: {
	  domains: ["cdn.sanity.io"], // Dodaj domenę cdn.sanity.io
	},
	async headers() {
	  return [
		{
		  source: "/manifest.json", // Ścieżka do pliku manifest.json
		  headers: [
			{
			  key: "Content-Type",
			  value: "application/manifest+json", // Ustaw typ MIME
			},
		  ],
		},
	  ];
	},
  };
  
  module.exports = nextConfig;
  