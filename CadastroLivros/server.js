const http = require('http');
const servidor = http.createServer(function (req, res) {
	res.end(`<html>
			<head>
				<meta charset ="utf-8">
			</head>
			<body>
				<h1>Livraria do Girardi</h1>
			</body>
		</html>`
		);
});
servidor.listen(3000);


