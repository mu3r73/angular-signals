import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ArrayComponent } from './array.component'

describe('ArrayComponent', () => {
  let component: ArrayComponent
  let fixture: ComponentFixture<ArrayComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArrayComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(ArrayComponent)
    component = fixture.componentInstance
    await fixture.whenStable()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
