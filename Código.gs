function aoSubmeterFormulario(e) {
Logger.log(JSON.stringify(e));

var dadosFormulario = e.values; // Pega os dados do formulário

var nome = dadosFormulario[1]; // Nome da pessoa que fez a reserva
var setor = dadosFormulario[2]; // Setor (Gente, Logistica, Armazém, Financeiro, Frota)
var dataStr = dadosFormulario[3]; // Data recebida do formulário
var horarioInicioStr = dadosFormulario[4]; // Horário de inicio
var duracaoStr = dadosFormulario[5]; // Duração da reserva

// Transformar os números em "dd/mm/yyyy"
var partesData = dataStr.split("/"); // Divide a data em dia, mês e ano
var dia = partesData[0]; // Dia
var mes = partesData[1]; // Mês
var ano = partesData[2]; // Ano

// Convertendo a data e horário para o formato correto
var partesHorario = horarioInicioStr.split(":");
var dataInicio = new Date(ano, mes - 1, dia, partesHorario[0], partesHorario[1]); // Monta a data corretamente

// Definindo a duração do evento baseada na escolha do usuário
var duracao = parseInt(duracaoStr); // Converte a duraçao para numero
var dataFim = new Date(dataInicio);
dataFim.setHours(dataInicio.getHours() + duracao); // Adiciona a duração à data de início

// Acessar o Google Calendar e criar o evento
var calendario = CalendarApp.getDefaultCalendar();
calendario.createEvent(
  "Reserva feita pelo setor: " + setor, // Titulo do evento
  dataInicio,
  dataFim,
  {
    description: "Reservado por: " + nome, // Descrição com o nome da pessoa
    sendInvites: false
  }
);
}
