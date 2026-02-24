import { JsonPipe } from '@angular/common'
import { Component, computed, effect, inject, signal } from '@angular/core'
import { ToastrService } from 'ngx-toastr'

import { mkDefaultArray, mkNewArrayItem } from '../../helpers/array-helpers'

@Component({
  selector: 'app-array',
  imports: [JsonPipe],
  templateUrl: './array.component.html',
  styleUrl: './array.component.css',
})
export class ArrayComponent {
  toastr = inject(ToastrService)

  arr = signal<Array<number>>(mkDefaultArray())
  arrLength = computed(() => {
    console.log('computed on this.arr() change')
    return this.arr().length
  })
  arrValuesDoubled = signal<Array<number>>([])

  constructor() {
    effect(() => {
      console.log('effect on this.arr() change')
      const arr = this.arr()
      const arrDoubled = arr.map((item) => item * 2)
      this.arrValuesDoubled.set(arrDoubled)
    })
  }

  resetArray() {
    this.arr.set(mkDefaultArray())
  }

  addItemToArraySignalUpdateNewArray() {
    const newItem = mkNewArrayItem(this.arr())
    // notice: we return a NEW array
    this.arr.update((array) => [
      ...array,
      newItem
    ])
    this.toastr.success('signal update returned a NEW array', 'item added')
  }

  addItemToArraySignalUpdateSameArray() {
    const newItem = mkNewArrayItem(this.arr())
    this.arr.update((array) => {
      array.push(newItem)
      return array
    })
    this.toastr.error('signal update returned the same array, mutated', 'item added')
  }

  addItemToArrayBypassSignalUpdate() {
    const newItem = mkNewArrayItem(this.arr())
    this.arr().push(newItem)
    this.toastr.error('extracted array from signal and mutated it, bypassing signal update', 'item added')
  }
}
