import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

//Modelo
import { IPeople } from '../../models/people'

@Component({
  selector: 'app-keypeople',
  templateUrl: './keypeople.component.html',
  styleUrls: ['./keypeople.component.css']
})

export class KeypeopleComponent implements OnInit {
peopleList: Array<IPeople>;

  constructor(private router: Router) { 
    this.peopleList = [
      {
        "id": 1,
        "image": "http://drive.google.com/uc?export=view&id=1u1beNHaroWZoiCLit3e481bGn2wGbQha",
        "name": "Damian Lazzarano",
        "email": "@damian.lazzarano",
        "studio": "SP & UI STUDIO PARTNER",
        "emailto": "damian.lazzarano@globant.com",
        "clase": "damian"
    },
    {
        "id": 2,
        "image": "http://drive.google.com/uc?export=view&id=1G766UEVzO6UPr7K9QItnx5nNXZChpXH8",
        "name": "David Correa",
        "email": "@david.correa",
        "studio": "SP & UI STUDIO PARTNER ",
        "emailto": "david.correa@globant.com",
        "clase": "david"
    },
    {
        "id": 3,
        "image": "http://drive.google.com/uc?export=view&id=1C4f1RkbI5GhbqoI__DfQo8STVvdr_OF8",
        "name": "Luciana Zavaleta",
        "email": "@luciana.zavaleta",
        "studio": "UI ENGINEERING PARTNER ",
        "emailto": "luciana.zavaleta@globant.com",
        "clase": "luciana"
    },
    {
        "id": 4,
        "image": "http://drive.google.com/uc?export=view&id=1QlQZ4EiNk6lDSpADmVMjDuDfWrhN_IXu",
        "name": "Gabriel Martinez",
        "email": "@gabriel.martinez",
        "studio": "UI TDC FOCAL TECH. DIRECTOR ",
        "emailto": "gabriel.martinez@globant.com",
        "clase": "gabriel"
    },
    {
        "id": 5,
        "image": "http://drive.google.com/uc?export=view&id=1mKfjMbPS9Nsig1RKIQ6NJ0sQy_5jL_88",
        "name": "Sebastian Gomez",
        "email": "@sebastian.gomez",
        "studio": "UI ENGINEERING TECH.MANAGER",
        "emailto": "sebastian.gomez@globant.com",
        "clase": "sebastian"
    }
    ]
  }

  ngOnInit(): void {
  }

  goNext(){
    this.router.navigate(['ready'])
  }

  goBack(){
    this.router.navigate(['fci'])
  }

}
