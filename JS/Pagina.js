
const form = document.querySelector('form');
const main = document.querySelector('main');

const resultadoDiv = document.createElement('div');
resultadoDiv.id = 'resultado';
main.appendChild(resultadoDiv);

form.addEventListener('submit', function (event) {
    // Impede o recarregamento padrão da página
    event.preventDefault();

    // Captura os dados preenchidos
    const nome = document.getElementById('nome').value;
    const apelido = document.getElementById('apelido').value;
    const idade = document.getElementById('idade').value;
    const selectEspecialidade = document.getElementById('especialidade');
    const especialidadeTexto = selectEspecialidade.options[selectEspecialidade.selectedIndex].text;
    const local = document.querySelector('input[name="local"]:checked').value;
    const momento = document.getElementById('momento').value.trim();

    let pontosAura = 1000;
    if (momento.length > 30) {
        pontosAura += 500;
    }
    if (selectEspecialidade.value === 'presenca') {
        pontosAura += 300;
    }

    resultadoDiv.innerHTML = `
        <hr>
        <h3>Inscrição Confirmada!</h3>
        <p><strong>Participante:</strong> ${nome} ("${apelido}") — ${idade} anos</p>
        <p><strong>Especialidade:</strong> ${especialidadeTexto}</p>
        <p><strong>Local escolhido:</strong> ${local.toUpperCase()}</p>
        <p><strong>Aura inicial detectada:</strong> +${pontosAura} pontos</p>
    `;
});

form.addEventListener('reset', function () {
    resultadoDiv.innerHTML = '';
});