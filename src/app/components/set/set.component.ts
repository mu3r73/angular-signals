import { JsonPipe } from '@angular/common'
import { Component, computed, effect, inject, signal } from '@angular/core'
import { ToastrService } from 'ngx-toastr'

import { mkDefaultSet, mkNewSetItem } from '../../helpers/set-helpers'

@Component({
  selector: 'app-set',
  imports: [JsonPipe],
  templateUrl: './set.component.html',
  styleUrl: './set.component.css',
})
export class SetComponent {
  toastr = inject(ToastrService)

  // to be able to use it in the template
  protected readonly Array = Array

  set = signal<Set<number>>(mkDefaultSet())
  setItemCount = computed(() => {
    console.log('computed on this.set() change')
    return this.set().size
  })
  setValuesDoubled = signal<Set<number>>(new Set())

  constructor() {
    effect(() => {
      console.log('effect on this.set() change')
      const set = this.set()
      const setDoubled = new Set(Array.from(set).map((item) => item * 2))
      this.setValuesDoubled.set(setDoubled)
    })
  }

  resetSet() {
    this.set.set(mkDefaultSet())
  }

  addItemToSetSignalUpdateNewSet() {
    const newItem = mkNewSetItem(this.set())
    this.set.update((set) => {
      set.add(newItem)
      // notice we return a NEW set
      return new Set(set)
    })
    this.toastr.success('signal update returned a NEW set', 'item added', {
      positionClass: 'toast-top-left',
    })
  }

  addItemToSetSignalUpdateSameSet() {
    const newItem = mkNewSetItem(this.set())
    this.set.update((set) => set.add(newItem))
    this.toastr.error('signal update returned the same set, mutated', 'item added', {
      positionClass: 'toast-top-left',
    })
  }

  addItemToSetBypassSignalUpdate() {
    const newItem = mkNewSetItem(this.set())
    this.set().add(newItem)
    this.toastr.error('extracted set from signal and mutated it, bypassing signal update', 'item added', {
      positionClass: 'toast-top-left',
    })
  }
}
