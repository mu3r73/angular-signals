import { ComponentFixture, TestBed } from '@angular/core/testing'
import { ToastrService } from 'ngx-toastr'

import { SetComponent } from './set.component'

describe('SetComponent', () => {
  let component: SetComponent
  let fixture: ComponentFixture<SetComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetComponent],
      providers: [
        {
          provide: ToastrService,
          useValue: {},
        },
      ],
    }).compileComponents()

    fixture = TestBed.createComponent(SetComponent)
    component = fixture.componentInstance
    await fixture.whenStable()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
