import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanoramaEquirectangleComponent } from './panorama-equirectangle.component';

describe('PanoramaEquirectangleComponent', () => {
  let component: PanoramaEquirectangleComponent;
  let fixture: ComponentFixture<PanoramaEquirectangleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanoramaEquirectangleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanoramaEquirectangleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
