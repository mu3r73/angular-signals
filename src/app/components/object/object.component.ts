import { JsonPipe } from '@angular/common'
import { Component, computed, effect, inject, signal } from '@angular/core'
import { ToastrService } from 'ngx-toastr'

import { mkDefaultObject, mkNewObjectItem } from '../../helpers/object-helpers'

@Component({
  selector: 'app-object',
  imports: [JsonPipe],
  templateUrl: './object.component.html',
  styleUrl: './object.component.css',
})
export class ObjectComponent {
  toastr = inject(ToastrService)

  // to be able to use it in the template
  protected readonly Object = Object

  obj = signal<{ [key: string]: number }>(mkDefaultObject())
  objItemCount = computed(() => {
    console.log('computed on this.obj() change')
    return Object.keys(this.obj()).length
  })
  objItemsValueDoubled = signal<{ [key: string]: number }>({})

  constructor() {
    effect(() => {
      console.log('effect on this.obj() change')
      const obj = this.obj()
      const objDoubled = Object.fromEntries(
        Object.entries(obj).map(([key, value]) => [key, value * 2])
      )
      this.objItemsValueDoubled.set(objDoubled)
    })
  }

  resetObject() {
    this.obj.set(mkDefaultObject())
  }

  addItemToObjectSignalUpdateNewObject() {
    const { key, value } = mkNewObjectItem(this.obj())
    // notice: we return a NEW object
    this.obj.update((object) => ({
      ...object,
      [key]: value,
    }))
    this.toastr.success('signal update returned a NEW object', 'item added')
  }

  addItemToObjectSignalUpdateSameObject() {
    const { key, value } = mkNewObjectItem(this.obj())
    this.obj.update((object) => {
      object[key] = value
      return object
    })
    this.toastr.error('signal update returned the same object, mutated', 'item added')
  }

  addItemToObjectBypassSignalUpdate() {
    const { key, value } = mkNewObjectItem(this.obj())
    this.obj()[key] = value
    this.toastr.error('extracted object from signal and mutated it, bypassing signal update', 'item added')
  }
}
