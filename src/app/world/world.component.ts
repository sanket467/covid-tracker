import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.css']
})

@Injectable()
export class WorldComponent implements OnInit{
  constructor(private http: HttpClient) {}

  dataGlobal = {
    newCases : '',
    totCases: '',
    newDeaths: '',
    totDeaths: '',
    newRecovered: '',
    totalRecovered: ''
  };

  private worldCases: Object;
  ngOnInit(){
    this.http.get<{Global: string}>('https://api.covid19api.com/summary').subscribe(result => {
      console.log(result.Global);
      this.worldCases = result.Global;
      console.log("check" + this.worldCases["NewConfirmed"]);
      this.dataGlobal.newCases = this.worldCases["NewConfirmed"]
      this.dataGlobal.newDeaths = this.worldCases["NewDeaths"]
      this.dataGlobal.newRecovered = this.worldCases["NewRecovered"]
      this.dataGlobal.totCases = this.worldCases["TotalConfirmed"]
      this.dataGlobal.totDeaths = this.worldCases["TotalDeaths"]
      this.dataGlobal.totalRecovered = this.worldCases["TotalRecovered"]
      console.log(this.dataGlobal);
    });
  }


}
