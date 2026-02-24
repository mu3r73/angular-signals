import { ComponentFixture, TestBed } from '@angular/core/testing'
import { ToastrService } from 'ngx-toastr'

import { ObjectComponent } from './object.component'

describe('ObjectComponent', () => {
  let component: ObjectComponent
  let fixture: ComponentFixture<ObjectComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObjectComponent],
      providers: [
        {
          provide: ToastrService,
          useValue: {},
        },
      ],
    }).compileComponents()

    fixture = TestBed.createComponent(ObjectComponent)
    component = fixture.componentInstance
    await fixture.whenStable()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
