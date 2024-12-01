formPessoa = document.querySelector("form");
formPessoa.style.display = "none";

formPessoa.addEventListener("submit", (event) => {
  event.preventDefault();
  const dataPessoa = new FormData(formPessoa);
  dataPost = Object.fromEntries(dataPessoa);
  let statusButton = document.getElementById("salvarPessoa").innerText;

  if (formPessoa.checkValidity() === false) {
    swal({
      title: "Existem campos vazios",
      text: "Preencha os campos vazios e tente novamente",
      icon: "warning",
      dangerMode: true,
    });
    return;
  }

  if (statusButton.trim() == `Salvar`) {
    salvarPessoa(dataPost);
  } else {
    atualizarPessoa(dataPost);
  }
});