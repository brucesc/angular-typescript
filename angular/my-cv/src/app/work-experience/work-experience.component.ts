import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-work-experience",
  templateUrl: "./work-experience.component.html",
  styleUrls: ["./work-experience.component.css"]
})
export class WorkExperienceComponent implements OnInit {
  jobs: any[] = [
    {
      company: "Midwest Construction, Milford, OH",
      title: "Carpenter, June 2017 – Present",
      description: [
        "Analyzed and deciphered blueprints to meet build requirements",
        "Worked closely with clients to keep positive customer relations",
        "Creative problem solving when blueprints did not match up with real life specifications"
      ]
    },
    {
      company: "Stein Realty, Cincinnati, OH",
      title: "Maintenance Manager, October 2016 – June 2017",
      description: [
        "Managing the rehab of 65 units in an apartment complex",
        "Answering service calls of current tenants",
        "Showing and renting apartment units"
      ]
    },
    {
      company: "Atria Summit Hills, Summit Hills, KY",
      title: "Caretaker, January 2014 – October 2014",
      description: [
        "Aided residents in assisted living facility",
        "Coordinated care with residents, family members, and staff"
      ]
    },
    {
      company: "THM Documentation Services, Cincinnati, OH",
      title: "Data Processing Consultant, May 2012 – December 2013",
      description: [
        "Edited General Electric Aviation FAA regulation manuals—processed RAW data (PowerPoint, Microsoft Word, Excel, Acrobat, Photoshop, Paint, etc.) into regulation format (PDF and hardcopy) using Adobe FrameMaker",
        "Communicated effectively with various departments at GE Aviation headquarters as an off-site contractor",
        "Very detail oriented in formatting, technical writing and editing",
        "Developed skills to interpret data in various graphs, figures and tables"
      ]
    }
  ];

  constructor() {}

  ngOnInit() {}
}
