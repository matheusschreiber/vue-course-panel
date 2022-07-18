app.component('nav-bar', {
  
  emits:[
    'go-to'
  ],
  template:
      /*html*/
      `
      <div class="nav-container">
        <ul>
          <li @click="$emit('go-to', 0)">INICIO</li>
          <li @click="$emit('go-to', 1)">CURSOS</li>
          <li @click="$emit('go-to', 2)">PROFESSORES</li>
          <li @click="$emit('go-to', 3)">ALUNOS</li>
        </ul>
      </div>
    `
  })
  