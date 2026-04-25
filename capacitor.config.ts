import type { CapacitorConfig } from "@capacitor/cli";

const isDev = process.env.NODE_ENV !== "production";

const config: CapacitorConfig = {
	appId: "io.ionic.starter",
	appName: "CricScorer",
	webDir: "dist",
	plugins: {
		SplashScreen: {
			backgroundColor: "#BD0622",
			androidSplashResourceName: "splash",
			showSpinner: false,
		},
	},
	server: isDev
		? {
				url: "http://10.44.15.222:3000",
				cleartext: true,
			}
		: undefined,
};

export default config;
