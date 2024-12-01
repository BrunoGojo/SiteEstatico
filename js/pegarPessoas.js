function pegarPessoas() {
   url = "https://a21a652d-9d53-454f-becb-0c883455fe58-00-y6ve27dzkeja.worf.replit.dev/pessoas/";
  
  urlSearch = url
  termo = document.getElementById("search").value;
  if(termo != ""){
    urlSearch = urlSearch+"?q="+termo
  }

  fetch(urlSearch)
    .then((res) => {
      return res.json();
    })
    .then((pessoas) => {
      console.log(pessoas);
      listaPessoas = "";
      for (let pessoa of pessoas) {
        dataNew = pessoa.nascimento.split("-");
        dataSeparada = dataNew[2] + "/" + dataNew[1] + "/" + dataNew[0];
        listaPessoas += `
      <tr>
          <th scope="row">${pessoa.id}</th>
          <td>${pessoa.nome}</td>
          <td>${pessoa.idade}</td>
          <td>${pessoa.email}</td>
          <td>${dataSeparada}</td>
          <td>
            <button onclick="editarPessoa(${pessoa.id})" class="btn btn-primary"><i class="fa-solid fa-pen-to-square"></i></button>
          <button onclick="deletarPessoa(${pessoa.id})" class="btn btn-danger"><i class="fa-solid fa-xmark"></i></button>
          </td>
      </tr>
      `;
      }
      document.querySelector("tbody").innerHTML = listaPessoas;
    });
}
pegarPessoas();