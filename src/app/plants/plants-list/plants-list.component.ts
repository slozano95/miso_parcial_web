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
  interiorCount = 0;
  exteriorCount = 0;

  getPlants() : void {
      this.plantsService.getAllPlants().subscribe((data) => {
        this.plantsList = data;
        this.calculatePlantCounts();
      });
  }

  calculatePlantCounts() {
    this.exteriorCount = this.plantsList.filter(plant => plant.tipo == "Exterior").length
    this.interiorCount = this.plantsList.filter(plant => plant.tipo == "Interior").length
  }
  ngOnInit() {
    this.getPlants();
  }

}
