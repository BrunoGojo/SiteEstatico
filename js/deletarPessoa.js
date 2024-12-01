function deletarPessoa(id) {
  // removerPessoa
  console.log("excluir", id);
  fetch(url + id, {
    method: "DELETE",
  })
    .then((res) => {
      return res.json();
    })
    .then((pessoa) => {
      console.log("foi deletado", pessoa);
      pegarPessoas();
      swal({
        title: "Deletado com sucesso",
        text: `A pessoa com o ID ${id} foi deletado com sucesso`,
        icon: "success"
      });
    });
}