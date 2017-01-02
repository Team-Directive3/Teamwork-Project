import { Component, OnInit } from '@angular/core';
import { UsersService } from './../../../core/services/users.service';


import { TeamsService } from './../../../core/services/teams.service';
import { Team } from './../../../core/models/team';

@Component({
  selector: 'app-view-teams',
  templateUrl: './view-teams.component.html',
  styleUrls: ['./view-teams.component.css'],
  providers: [ TeamsService ]
})
export class ViewTeamsComponent implements OnInit {
    public teams: Team[];
    private filterProperties: string[];
    private filterBy: string;
    private sortBy: string;
    private sortingProperties: string[];

    constructor(private teamsService: TeamsService, public usersService: UsersService) { }
    ngOnInit() {
        this.teamsService.getAll()
                .subscribe(teams => {
                    this.teams = teams;
                    console.log(teams);
                    console.log(localStorage.getItem('id_token'));
                });
                this.filterProperties = ['Filled', 'Enrolling'];
                this.filterBy = this.filterProperties[1];
                this.sortingProperties = ['Name', 'Date'];
                this.sortBy = this.sortingProperties[1];
    }
    onFilterChange(e: any) {
        this.filterBy = e.target.value;
    }
    onSortChange(e: any) {
        this.sortBy = e.target.value;
    }
}
