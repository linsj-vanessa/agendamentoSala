# 🗓️ Automação de Agendamento de Sala de Reuniões

Este projeto automatiza o agendamento de salas de reunião no Google Calendar a partir de um formulário Google Forms, utilizando Google Apps Script.

## 📌 Funcionalidade

Ao enviar o formulário com as informações da reserva, o script:

1. Coleta os dados preenchidos (nome, setor, data, horário e duração);
2. Converte os dados em um formato compatível com o Google Calendar;
3. Cria automaticamente um evento na agenda padrão do usuário;
4. Adiciona uma descrição com o nome de quem fez a reserva.

## 🛠️ Tecnologias Utilizadas

- Google Apps Script
- Google Forms
- Google Calendar

## 📋 Campos do Formulário

- Nome do responsável pela reserva
- Setor (Gente, Logística, Armazém, Financeiro, Frota)
- Data da reunião (formato: dd/mm/yyyy)
- Horário de início (formato: HH:mm)
- Duração (em horas)

## 📂 Estrutura do Script

```javascript
function aoSubmeterFormulario(e) {
  // Captura os dados do formulário
  // Converte a data e o horário
  // Calcula o horário de término
  // Cria o evento no Google Calendar
}
