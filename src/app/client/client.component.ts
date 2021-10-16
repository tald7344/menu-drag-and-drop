import {Component, OnInit} from '@angular/core';
import {TreeNode} from '../admin/model/tree-node';
import {demoData} from '../admin/model/data';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  menus: TreeNode[];

  constructor() { }

  ngOnInit(): void {
    if (localStorage.getItem('menuContentItems')) {
      this.menus = JSON.parse(localStorage.getItem('menuContentItems'));
    } else {
      this.menus = demoData;
    }
  }


}
