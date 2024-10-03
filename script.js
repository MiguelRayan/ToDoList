let tarefas = [];

function addTarefa() {
    const tarefaInput = document.getElementById('tarefaInput');
    const textoTarefa = tarefaInput.value.trim();

    if (textoTarefa !== '') {
        tarefas.push({ text: textoTarefa, completa: false });
        tarefaInput.value = '';
        mostraTarefas();
        contaCompletas();
    }
}

function mostraTarefas(filter = 'Todas') {
    const listaTarefa = document.getElementById('listaTarefa');
    listaTarefa.innerHTML = '';

    tarefas.forEach((tarefa, index) => {
        if (
            (filter === 'Completa' && !tarefa.completa) ||
            (filter === 'Incompleta' && tarefa.completa)
        ) {
            return;
        }

        const elemenTarefa = document.createElement('div');
        elemenTarefa.className = 'task';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = tarefa.completa;  // Corrigido aqui
        checkbox.onclick = () => alternaCompleta(index);

        const textinhoTarefa = document.createElement('span');
        textinhoTarefa.innerText = tarefa.text;  // Corrigido aqui

        elemenTarefa.appendChild(checkbox);
        elemenTarefa.appendChild(textinhoTarefa);
        listaTarefa.appendChild(elemenTarefa);  // Corrigido aqui
    });
}

function alternaCompleta(index) {
    tarefas[index].completa = !tarefas[index].completa;
    mostraTarefas();
    contaCompletas();
}

function mostraCompletaTarefa() {
    mostraTarefas('Completa');
}

function mostraIncompletaTarefa() {
    mostraTarefas('Incompleta');
}

function mostraTodasTarefas() {
    mostraTarefas();
}

function contaCompletas() {
    const completaCount = tarefas.filter(tarefa => tarefa.completa).length;
    document.getElementById('completaCount').innerText = `Tarefas Concluídas: ${completaCount}`;
}