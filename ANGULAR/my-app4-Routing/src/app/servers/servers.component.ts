import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Server } from './server/server.model';
import { ServerService } from './servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  servers: Server[] = [];
  constructor(
    private serverService: ServerService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.serverService;
  }

  ngOnInit(): void {
    this.servers = this.serverService.getServers();
  }

  onAuth() {
    console.log('Ciao');
    !this.authService.loggedIn &&
      this.router.navigate(['login'], { relativeTo: this.route });
  }
}
