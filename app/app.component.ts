    import { Component } from '@angular/core';
    @Component({
      selector: 'my-app',
      template: `<div class="menu menuLeft"><div class="menuContent">left menuContent</div><div class="menuToggle leftMenuToggle"></div></div><div class="mainContent"><router-outlet></router-outlet></div><div class="menu menuRight"><div class="menuContent">right menuContent</div><div class="menuToggle rightMenuToggle"></div></div>`
    })
    export class AppComponent { }