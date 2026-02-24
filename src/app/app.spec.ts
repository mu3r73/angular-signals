import { TestBed } from '@angular/core/testing'
import { provideToastr } from 'ngx-toastr'

import { App } from './app'

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [
        provideToastr(),
      ],
    }).compileComponents()
  })

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App)
    const app = fixture.componentInstance
    expect(app).toBeTruthy()
  })
})
