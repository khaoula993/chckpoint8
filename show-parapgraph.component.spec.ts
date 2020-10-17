import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowParapgraphComponent } from './show-parapgraph.component';

describe('ShowParapgraphComponent', () => {
  let component: ShowParapgraphComponent;
  let fixture: ComponentFixture<ShowParapgraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowParapgraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowParapgraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
