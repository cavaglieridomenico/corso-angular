import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ServerService } from '../servers.service';
import { Server } from './server.model';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent implements OnInit {
  server: Server;
  constructor(
    private serverService: ServerService,
    private actRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = +this.actRoute.snapshot.params['id'];
    this.server = this.serverService.getServerById(id);

    this.actRoute.params.subscribe((params: Params) => {
      this.server = this.serverService.getServerById(+params['id']);
    });
  }
  onModServer() {
    this.router.navigate(['edit'], { relativeTo: this.actRoute });
  }
}
