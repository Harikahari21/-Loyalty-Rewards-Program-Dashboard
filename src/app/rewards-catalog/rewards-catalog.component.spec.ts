import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RewardsCatalogComponent } from './rewards-catalog.component';

describe('RewardsCatalogComponent', () => {
  let component: RewardsCatalogComponent;
  let fixture: ComponentFixture<RewardsCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RewardsCatalogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RewardsCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
