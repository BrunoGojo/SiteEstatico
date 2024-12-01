function editarPessoa(id) {
  document.getElementById("salvarPessoa").innerHTML = `<i class="fa-solid fa-floppy-disk"></i> Atualizar`;
  // atualizarPessoa
  console.log("editar", id);
  fetch(url + id)
    .then((res) => {
      return res.json();
    })
    .then((pessoa) => {
      document.getElementById("idPessoa").value = pessoa.id;
      document.getElementById("nome").value = pessoa.nome;
      document.getElementById("idade").value = pessoa.idade;
      document.getElementById("email").value = pessoa.email;
      document.getElementById("nascimento").value = pessoa.nascimento;
      mostrarForm(`<i class="fa-solid fa-floppy-disk"></i> Atualizar`);
    });
}