if (localStorage["staging-environment"] && localStorage["staging-environment"] == "true"){
	console.log("Connected to staging");
	stage = "staging";
	bucket = "d1prqbjryeaq6k.cloudfront.net";
	localStorage["aws-congnito-user-pool-id"] = "eu-north-1_Ze7w4Bsm5";
	localStorage["aws-congnito-app-id"] = "61bb0u15qtbhdlf11fv26jiqdj";
	localStorage["aws-congnito-ui"] = "https://academie-staging-r9dujw.auth.eu-north-1.amazoncognito.com";	api_url = "https://lzymefsj2jcz7mjs3wckzsd63e.appsync-api.eu-north-1.amazonaws.com/graphql";
	api_ws = "wss://lzymefsj2jcz7mjs3wckzsd63e.appsync-realtime-api.eu-north-1.amazonaws.com/graphql";
	api_key = "da2-sqadbfibyzgdliewndruyqcpem";
}