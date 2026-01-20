let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
const lista = document.getElementById("itemLista");
const input = document.getElementById("tarefa");

function salvarTarefas() {
  localStorage.setItem("tarefas", JSON.stringify(tarefas));
}

function renderizarTarefas() {
  lista.innerHTML = "";
  tarefas.forEach(tarefa => {
    const li = document.createElement("li");
    li.textContent = tarefa.descricao;
    li.setAttribute("data-id", tarefa.id);

    const span = document.createElement("span");
    span.textContent = "\u00D7";
    span.className = "close";
    span.onclick = () => removerTarefa(tarefa.id);

    li.appendChild(span);
    lista.appendChild(li);
  });
}

function addElemento() {
  const descricao = input.value.trim();
  if (descricao === "") {
    alert("Você precisa descrever a tarefa");
    return;
  }

  const novaTarefa = {
    id: Date.now(),
    descricao
  };
  tarefas.push(novaTarefa);
  salvarTarefas();
  renderizarTarefas();
  input.value = "";
}

function removerTarefa(id) {
  tarefas = tarefas.filter(t => t.id !== id);
  salvarTarefas();
  renderizarTarefas();
}

renderizarTarefas();
