app.component('list-item', {
    props:[
        'item',
        'icon'
    ],
    template:
        /*html*/
        `
        <div class="list-item-container">
            {{icon}}<span>{{item}}</span>
        </div>
      `
    })
    