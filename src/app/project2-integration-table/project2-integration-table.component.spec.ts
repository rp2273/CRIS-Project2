import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Project2IntegrationTableComponent } from './project2-integration-table.component';

describe('Project2IntegrationTableComponent', () => {
  let component: Project2IntegrationTableComponent;
  let fixture: ComponentFixture<Project2IntegrationTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Project2IntegrationTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Project2IntegrationTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
