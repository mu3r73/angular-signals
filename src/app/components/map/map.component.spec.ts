import { ComponentFixture, TestBed } from '@angular/core/testing'
import { ToastrService } from 'ngx-toastr'

import { MapComponent } from './map.component'

describe('MapComponent', () => {
  let component: MapComponent
  let fixture: ComponentFixture<MapComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapComponent],
      providers: [
        {
          provide: ToastrService,
          useValue: {},
        },
      ],
    }).compileComponents()

    fixture = TestBed.createComponent(MapComponent)
    component = fixture.componentInstance
    await fixture.whenStable()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
