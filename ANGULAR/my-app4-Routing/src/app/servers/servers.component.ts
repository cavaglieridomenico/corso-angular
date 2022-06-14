import { Component, OnInit } from '@angular/core';
import { Server } from './server/server.model';
import { ServerService } from './servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  servers: Server[] = [];
  constructor(private serverService: ServerService) {
    this.serverService;
  }

  ngOnInit(): void {
    this.servers = this.serverService.getServers();
  }
}
