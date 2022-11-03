import { Component, OnInit } from '@angular/core';
import { Plant } from '../plant';
import { PlantsService } from '../plants.service';

@Component({
  selector: 'app-plants-list',
  templateUrl: './plants-list.component.html',
  styleUrls: ['./plants-list.component.css']
})
export class PlantsListComponent implements OnInit {

  constructor(private plantsService: PlantsService) { }
  plantsList: Array<Plant> = [];

  getMuseums() : void {
      this.plantsService.getAllPlants().subscribe((data) => {
        this.plantsList = data;
      });
  }
  ngOnInit() {
  }

}
