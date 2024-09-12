var api_url = "";
var api_ws = "";
var api_key = "";
var bucket = "";
var stage = ""

if (!localStorage["staging-environment"] || localStorage["staging-environment"] == "false"){
	console.log("Connected to production");
	stage = "production";
	bucket = "d20u19xdge3ifq.cloudfront.net";
	localStorage["aws-congnito-user-pool-id"] = "eu-north-1_d2rqQRM7z";
	localStorage["aws-congnito-app-id"] = "ug2bnp8javvi6uucm5gqrf0pk";
	localStorage["aws-congnito-ui"] = "https://academie-production-zhxbcr.auth.eu-north-1.amazoncognito.com";	api_url = "https://b7mbdmawjrgf5burwsluocozva.appsync-api.eu-north-1.amazonaws.com/graphql";
	api_ws = "wss://b7mbdmawjrgf5burwsluocozva.appsync-realtime-api.eu-north-1.amazonaws.com/graphql";
	api_key = "da2-alzi3nhjtzcdja3skkrsvyys4u";
}