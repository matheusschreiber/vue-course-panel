app.component('content-courses', {
  components: {
    'list-item': ListItem
  },
  template:
      /*html*/
      `
      <div class="courses-container">
        <div class="upper-part">
          <ul>
            <list-item :item="'Engenharia da Computação'" :icon="'🖥️'"></list-item>
            <list-item :item="'Engenharia Elétrica'" :icon="'⚡'"></list-item>
            <list-item :item="'Engenharia Mecânica'" :icon="'🔧'"></list-item>
          </ul>
        </div>
      </div>
    `
  })
  
  