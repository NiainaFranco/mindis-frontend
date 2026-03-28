import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PaginationMetaWrapper } from '../../../types/pagination-meta-wrapper.type';
import { GetRibonColor } from '../../../types/get-ribon-color.type';
import { RibonColorService } from '../../../service/ribon-color.service';
import { AsyncPipe, JsonPipe } from '@angular/common';

@Component({
  imports: [AsyncPipe, JsonPipe],
  templateUrl: './ribon-color-set-page.component.html',
})
export class RibonColorSetPage implements OnInit {
  constructor(private ribonColorService: RibonColorService){ }

  paginatedRibonColors! : Observable<PaginationMetaWrapper<GetRibonColor>>;

  ngOnInit(): void{
    this.paginatedRibonColors = this.ribonColorService.getAllWithPagination({page: 1});
  }
}
