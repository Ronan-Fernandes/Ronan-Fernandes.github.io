// declaração de variaveis ****************************************************************************
let estados = {
  AC: 'Acre',
	AL: 'Alagoas',
	AP: 'Amapá',
	AM: 'Amazonas',
	BA: 'Bahia',
	CE: 'Ceará',
	DF: 'Distrito Federal',
	ES: 'Espírito Santo',
	GO: 'Goiás',
	MA: 'Maranhão',
	MT: 'Mato Grosso',
	MS: 'Mato Grosso do Sul',
	MG: 'Minas Gerais',
	PA: 'Pará',
	PB: 'Paraíba',
	PR: 'Paraná',
	PE: 'Pernambuco',
	PI: 'Piauí',
	RJ: 'Rio de Janeiro',
	RN: 'Rio Grande do Norte',
	RS: 'Rio Grande do Sul',
	RO: 'Rondônia',
	RR: 'Roraima',
	SC: 'Santa Catarina',
	SP: 'São Paulo',
	SE: 'Sergipe',
	TO: 'Tocantins',
}
const buttonSubmit = document.getElementById('submit');

// functions ********************************************************************************************
function createOptions() {
  const Select = document.getElementById('estado');
  for(let index in estados) {
    const option = document.createElement('option');
    option.value = index;
    option.innerHTML = estados[index];
    Select.appendChild(option);
  }
}

function dados() {
  const divDados = document.createElement('div');
  const inputs = document.querySelectorAll('input');
  for (let i = 0; i < inputs.length; i += 1) {
    const nome = document.createElement('span');
    const valor = document.createElement('span');
    nome.innerHTML = `${inputs[i].name}: `;
    valor.innerHTML = `${inputs[i].value}<br>`;
    divDados.appendChild(nome);
    divDados.appendChild(valor);
  }
  document.body.appendChild(divDados);
}

// window on load

window.onload = function () {
  createOptions();
  buttonSubmit.addEventListener('click', function (event) {
    event.preventDefault();
    dados();
  });
}