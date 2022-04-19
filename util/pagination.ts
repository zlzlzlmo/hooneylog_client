/* eslint-disable consistent-return */
/* eslint-disable no-plusplus */
/* eslint-disable no-use-before-define */

import { Post } from 'ts/interface/post';

class PaginationContoller<T> {
  private allItems: T[] = [];

  private itemLengthPerPage = 1;

  private showItems: T[] = [];

  set setAllItems(allItems: T[]) {
    this.allItems = allItems;
  }

  constructor(allItems: T[]) {
    this.allItems = allItems;
  }

  // * 총 가져와야할 페이네이션 숫자
  getTotalPageCount(): number {
    return Math.ceil(this.allItems.length / this.itemLengthPerPage);
  }

  // * 보여줘야할 아이템에 push하기
  private pushShowItems(startIdx: number): void {
    this.showItems = [];

    for (let i = startIdx; i < startIdx + this.itemLengthPerPage; i++) {
      if (this.allItems[i] !== undefined) {
        this.showItems.push(this.allItems[i]);
      }
    }
  }

  // * 클릭된 페이지에 보여져야할 테이블 리스트 아이템 가져오기
  getShowItems(startIdx: number) {
    if (this.allItems === null || this.allItems.length === 0) {
      return [];
    }

    this.pushShowItems(startIdx);

    return this.showItems;
  }
}

export default PaginationContoller;
