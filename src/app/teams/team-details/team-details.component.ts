import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Team } from './../../../core/models/team';
import { User } from './../../../core/models/users';
import { TeamsService } from './../../../core/services/teams.service';
import { UsersService } from './../../../core/services/users.service';

@Component({
    selector: 'app-team-details',
    templateUrl: './team-details.component.html',
    styleUrls: ['./team-details.component.css']
})
export class TeamDetailsComponent implements OnInit {
    model: Team;
    team: Team;
    public id: number;
    public name: string;
    public form: string;
    public createdAt: Date;
    public github: string;
    public owner_id: number;
    public users: User[];
    public isFilled: string;
    public maxUsers: number;
    public image_url: string;
    public isOwner: boolean;
    public Owner: User;

    constructor(
        public usersService: UsersService,
        private teamsService: TeamsService,
        private route: ActivatedRoute) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        this.id = +params['id'];
      });

      this.teamsService.getById(this.id)
                        .subscribe(team => {
                            this.name = team.name;
                            this.form = team.form;
                            this.createdAt = team.createdAt;
                            this.github = team.github;
                            this.owner_id = team.owner_id;
                            this.users = team.users;
                            this.isFilled = team.isFilled;
                            this.maxUsers = team.maxUsers;
                            this.image_url = team.image_url;

                            if (localStorage.getItem('user')) {
                                let user: User = JSON.parse(localStorage.getItem('user'));
                                this.isOwner = this.owner_id == user.id;
                            }

                            this.usersService.getById(team.owner_id).subscribe((ownerUser: User) => {
                                this.Owner = ownerUser;
                            });
                        });
    }
}
