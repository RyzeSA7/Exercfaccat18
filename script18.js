let horasTrabalhadas = parseFloat(prompt("Digite o número de horas trabalhadas no mês:"))
let salarioPorHora = parseFloat(prompt("Digite o salário por hora:"))

// Definir a jornada de trabalho semanal e mensal
const horasPorSemana = 40
const semanasPorMes = 4
const horasPorMes = horasPorSemana * semanasPorMes

// Calcular o salário total
let salarioTotal = horasTrabalhadas * salarioPorHora

if (horasTrabalhadas > horasPorMes) {
    // Calcular horas extras
    let horasExtras = horasTrabalhadas - horasPorMes
    let valorHoraExtra = salarioPorHora * 1.5 // 50% a mais
    salarioTotal += horasExtras * valorHoraExtra
}

// Exibir o salário total
console.log(`O salário total do funcionário é: R$ ${salarioTotal.toFixed(2)}`)