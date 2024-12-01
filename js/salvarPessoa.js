function salvarPessoa(dados) {
  fetch(url, {
    method: "POST",
    body: JSON.stringify(dados),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((pessoa) => {
      console.log(pessoa);
      formPessoa.reset();
      formPessoa.classList.remove("was-validated");

      mostrarTable();
      pegarPessoas();
      document.getElementById("idPessoa").value = ""
      swal({
        title: "Cadastro com sucesso",
        text: `A pessoa ${pessoa.nome.split(" ")[0].toUpperCase()} foi cadastrado com sucesso`,
        icon: "success"
      });

    })
    .catch((err) => {
      console.log(err);
    });
}