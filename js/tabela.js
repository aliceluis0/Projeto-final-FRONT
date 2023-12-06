document.getElementById("addItemForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    var id = document.getElementById("idInput").value;
    var modelo = document.getElementById("modeloInput").value;
    var marca = document.getElementById("marcaInput").value;
    var ano = document.getElementById("anoInput").value;
    var cor = document.getElementById("corInput").value;
  
    var row = "<tr><td>" + id + "</td><td>" + modelo + "</td><td>" + marca + "</td><td>" + ano + "</td><td>" + cor + "</td><td><button class='editButton'>Editar</button> <button class='deleteButton'>Excluir</button></td></tr>";
  
    document.getElementById("itemBody").insertAdjacentHTML('beforeend', row);
  
    document.getElementById("idInput").value = "";
    document.getElementById("modeloInput").value = "";
    document.getElementById("marcaInput").value = "";
    document.getElementById("anoInput").value = "";
    document.getElementById("corInput").value = "";
  
    bindEditButtons();
    bindDeleteButtons();
  });
  
  function bindEditButtons() {
    var editButtons = document.getElementsByClassName("editButton");
  
    for (var i = 0; i < editButtons.length; i++) {
      editButtons[i].addEventListener("click", function() {
        var row = this.parentNode.parentNode;
  
        var id = row.cells[0].innerHTML;
        var modelo = row.cells[1].innerHTML;
        var marca = row.cells[2].innerHTML;
        var ano = row.cells[3].innerHTML;
        var cor = row.cells[4].innerHTML;
  
        document.getElementById("idInput").value = id;
        document.getElementById("modeloInput").value = modelo;
        document.getElementById("marcaInput").value = marca;
        document.getElementById("anoInput").value = ano;
        document.getElementById("corInput").value = cor;
  
        row.remove();
      });
    }
  }
  
  function bindDeleteButtons() {
    var deleteButtons = document.getElementsByClassName("deleteButton");
  
    for (var i = 0; i < deleteButtons.length; i++) {
      deleteButtons[i].addEventListener("click", function() {
        this.parentNode.parentNode.remove();
      });
    }
  }
  
  bindEditButtons();
  bindDeleteButtons();