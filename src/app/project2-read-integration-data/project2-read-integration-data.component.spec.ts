import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Project2ReadIntegrationDataComponent } from './project2-read-integration-data.component';

describe('Project2ReadIntegrationDataComponent', () => {
  let component: Project2ReadIntegrationDataComponent;
  let fixture: ComponentFixture<Project2ReadIntegrationDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Project2ReadIntegrationDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Project2ReadIntegrationDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
