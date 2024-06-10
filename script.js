function openChat() {
  document.getElementById("chatbox").style.display = "block";
}

function closeChat() {
  document.getElementById("chatbox").style.display = "none";
}

function sendMessage() {
  var input = document.querySelector(".chat-input input");
  var message = input.value;
  input.value = "";

  var chatMessages = document.querySelector(".chat-messages");
  var newMessage = document.createElement("div");
  newMessage.classList.add("chat-message");
  newMessage.innerHTML = `<p><strong>Você:</strong> ${message}</p>`;
  chatMessages.appendChild(newMessage);

  // Resposta inteligente do ChatBox
  setTimeout(function() {
    var chatReply = document.createElement("div");
    chatReply.classList.add("chat-message");
    chatReply.innerHTML = `<p><strong>ChatBox:</strong> Entendi! Você disse: "${message}". Como posso te ajudar mais?</p>`;
    chatMessages.appendChild(chatReply);
  }, 1000);
}

function selectOption(option) {
  var chatMessages = document.querySelector(".chat-messages");
  var optionMessage = document.createElement("div");
  optionMessage.classList.add("chat-message");
  optionMessage.innerHTML = `<p><strong>Opção Selecionada:</strong> ${option}</p>`;
  chatMessages.appendChild(optionMessage);

  // Respostas específicas para cada opção selecionada
  switch(option) {
    case 'Emprego':
      setTimeout(function() {
        var chatReply = document.createElement("div");
        chatReply.classList.add("chat-message");
        chatReply.innerHTML = "<p><strong>ChatBox:</strong> Ótimo! Aqui estão algumas vagas de emprego disponíveis:</p><ul><li>Vaga 1</li><li>Vaga 2</li><li>Vaga 3</li></ul>";
        chatMessages.appendChild(chatReply);
      }, 1000);
      break;
    case 'Capacitação':
      setTimeout(function() {
        var chatReply = document.createElement("div");
        chatReply.classList.add("chat-message");
        chatReply.innerHTML = "<p><strong>ChatBox:</strong> Excelente escolha! Confira nossos programas de capacitação:</p><ul><li>Programa 1</li><li>Programa 2</li><li>Programa 3</li></ul>";
        chatMessages.appendChild(chatReply);
      }, 1000);
      break;
    case 'Informação':
      setTimeout(function() {
        var chatReply = document.createElement("div");
        chatReply.classList.add("chat-message");
        chatReply.innerHTML = "<p><strong>ChatBox:</strong> Vou te fornecer informações detalhadas. Aguarde um momento...</p>";
        chatMessages.appendChild(chatReply);
        // Simular espera de 3 segundos antes de enviar a resposta
        setTimeout(function() {
          var infoReply = document.createElement("div");
          infoReply.classList.add("chat-message");
          infoReply.innerHTML = "<p><strong>ChatBox:</strong> Aqui estão algumas informações importantes...</p>";
          chatMessages.appendChild(infoReply);
        }, 3000);
      }, 1000);
      break;
    default:
      break;
  }
}

function showOpportunities() {
  var opportunitiesDescription = document.getElementById("opportunitiesDescription");
  if (opportunitiesDescription.style.display === "none") {
    opportunitiesDescription.style.display = "block";
  } else {
    opportunitiesDescription.style.display = "none";
  }
}
