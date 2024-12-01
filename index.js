const http = require("http");
const fs = require("fs");
const server = http.createServer(function (req, res) {
	console.log(req.url);
	console.log(req.method);

	if (req.url == "/") {
		indexHtml = fs.readFileSync("index.html");
		res.end(indexHtml);
	} else if (req.url == "/js/script.js") {
		script = fs.readFileSync("js/script.js");
		res.end(script);
	} else if (req.url == "/js/pegarPessoas.js") {
		pegarPessoas = fs.readFileSync("js/pegarPessoas.js");
		res.end(pegarPessoas);
	}
	else if (req.url == "/js/deletarPessoa.js") {
		deletarPessoa = fs.readFileSync("js/deletarPessoa.js");
		res.end(deletarPessoa);
	} 
	else if (req.url == "/js/editarPessoa.js") {
		editarPessoa = fs.readFileSync("js/editarPessoa.js");
		res.end(editarPessoa);
	} 
	else if (req.url == "/js/atualizarPessoa.js") {
		atualizarPessoa = fs.readFileSync("js/atualizarPessoa.js");
		res.end(atualizarPessoa);
	}
	else if (req.url == "/js/salvarPessoa.js") {
		salvarPessoa = fs.readFileSync("js/salvarPessoa.js");
		res.end(salvarPessoa);
	}
	else if (req.url == "/js/limparBusca.js") {
		limparBusca = fs.readFileSync("js/limparBusca.js");
		res.end(limparBusca);
	}
	else if (req.url == "/js/mostrarForm.js") {
		mostrarForm = fs.readFileSync("js/mostrarForm.js");
		res.end(mostrarForm);
	}
	else if (req.url == "/js/mostrarTable.js") {
		mostrarTable = fs.readFileSync("js/mostrarTable.js");
		res.end(mostrarTable);
	}
	else {
		res.end("404 não encontrado");
	}
});
server.listen(3000, function () {
	console.log("Servidor no ar na porta");
});
