import BotaoConclui from './componentes/concluiTarefa.js'    
import BotaoDeleta from './componentes/deletaTarefa.js'
 
    const criarTarefa = (evento) => {

    evento.preventDefault()  

    const lista = document.querySelector('[data-list]')   //seleciona o data list no html data list= ID só que em vez de usar classe do CSS, usa-se esse data.
    const input = document.querySelector('[data-form-input]')
    const valor = input.value

    const tarefa = document.createElement('li')  //cria um elemento dentro do html, no caso um LI dentro da UL, cria a Linha..
    tarefa.classList.add('task')    //classlit literalmente está puxando um CSS, no caso o .task uma classe
    const conteudo = `<p class="content">${valor}</p>`

    tarefa.innerHTML = conteudo

    tarefa.appendChild(BotaoConclui())
    tarefa.appendChild(BotaoDeleta())
    lista.appendChild(tarefa)
    input.value = " "

}

const novaTarefa = document.querySelector('[data-form-button]')

novaTarefa.addEventListener('click', criarTarefa)