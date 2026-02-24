import { JsonPipe } from '@angular/common'
import { Component, computed, effect, inject, signal } from '@angular/core'
import { ToastrService } from 'ngx-toastr'

import { mkDefaultMap, mkNewMapItem } from '../../helpers/map-helpers'

@Component({
  selector: 'app-map',
  imports: [JsonPipe],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css',
})
export class MapComponent {
  toastr = inject(ToastrService)

  // to be able to use it in the template
  protected readonly Object = Object

  map = signal<Map<string, number>>(mkDefaultMap())
  mapItemCount = computed(() => {
    console.log('computed on this.map() change')
    return this.map().size
  })
  mapItemsValueDoubled = signal<Map<string, number>>(new Map())

  constructor() {
    effect(() => {
      console.log('effect on this.map() change')
      const map = this.map()
      const mapDoubled = new Map(Array.from(map).map(([key, value]) => [key, value * 2]))
      this.mapItemsValueDoubled.set(mapDoubled)
    })
  }

  resetMap() {
    this.map.set(mkDefaultMap())
  }

  addItemToMapSignalUpdateNewMap() {
    const { key, value } = mkNewMapItem(this.map())
    this.map.update((map) => {
      map.set(key, value)
      // notice we return a NEW map
      return new Map(map)
    })
    this.toastr.success('signal update returned a NEW map', 'item added', {
      positionClass: 'toast-top-left',
    })
  }

  addItemToMapSignalUpdateSameMap() {
    const { key, value } = mkNewMapItem(this.map())
    this.map.update((map) => map.set(key, value))
    this.toastr.error('signal update returned the same map, mutated', 'item added', {
      positionClass: 'toast-top-left',
    })
  }

  addItemToMapBypassingSignalUpdate() {
    const { key, value } = mkNewMapItem(this.map())
    this.map().set(key, value)
    this.toastr.error('extracted map from signal and mutated it, bypassing signal update', 'item added', {
      positionClass: 'toast-top-left',
    })
  }
}
