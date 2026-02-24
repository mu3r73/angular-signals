import { Component } from '@angular/core'

import { ArrayComponent } from './components/array/array.component'
import { ObjectComponent } from './components/object/object.component'
import { SetComponent } from './components/set/set.component'
import { MapComponent } from './components/map/map.component'

@Component({
  selector: 'app-root',
  imports: [ArrayComponent, ObjectComponent, SetComponent, MapComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
