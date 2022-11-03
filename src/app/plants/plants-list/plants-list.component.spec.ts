/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PlantsListComponent } from './plants-list.component';
import { Plant } from '../plant';
import { faker } from '@faker-js/faker';
import { HttpClientModule } from '@angular/common/http';

describe('PlantsListComponent', () => {
  let component: PlantsListComponent;
  let fixture: ComponentFixture<PlantsListComponent>;
  let debug: DebugElement;
  let expectedRowCount = 3;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ PlantsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantsListComponent);
    component = fixture.componentInstance;

    for(let i = 0; i < expectedRowCount; i++) {
      const plant = new Plant(
        faker.datatype.number(10),
        faker.datatype.string(30),
        faker.datatype.string(30),
        faker.datatype.string(30),
        faker.datatype.string(30),
        faker.datatype.number(3),
        faker.datatype.string(30),
        );
        component.plantsList.push(plant);
    }

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 4 rows', () => {
    const headerRowCount = 1;
    console.log(debug.queryAll(By.css("tr")).length.toString());
    expect(debug.queryAll(By.css('tr'))).toHaveSize(expectedRowCount+headerRowCount)
  });
});
