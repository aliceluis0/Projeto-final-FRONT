
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;
    
    if (email === "alunoSesi" && senha === "1234") {
      window.location.href = '../index.html';
      // Redirecionar para a página desejada
    } else {
      alert("Usuário ou senha incorretos!");
    }

  });