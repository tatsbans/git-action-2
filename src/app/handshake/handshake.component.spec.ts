import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandshakeComponent } from './handshake.component';

describe('HandshakeComponent', () => {
  let component: HandshakeComponent;
  let fixture: ComponentFixture<HandshakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HandshakeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HandshakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
