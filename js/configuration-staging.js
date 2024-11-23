if (localStorage["staging-environment"] && localStorage["staging-environment"] == "true"){
	console.log("Connected to staging");
	stage = "staging";
	bucket = "d3a466qxyim551.cloudfront.net";
	localStorage["aws-congnito-user-pool-id"] = "eu-north-1_Ze7w4Bsm5";
	localStorage["aws-congnito-app-id"] = "2p2m80lhsm1aks8lf0sbvf1kio";
	localStorage["aws-congnito-ui"] = "https://academie-staging-r9dujw.auth.eu-north-1.amazoncognito.com";	api_url = "https://tpj4lwcr6zhrlfwrv74s3x4a4i.appsync-api.eu-north-1.amazonaws.com/graphql";
	api_ws = "wss://tpj4lwcr6zhrlfwrv74s3x4a4i.appsync-realtime-api.eu-north-1.amazonaws.com/graphql";
	api_key = "da2-vmjjnued35acxm6hfg3tw6knl4";
}