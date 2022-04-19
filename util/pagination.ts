/* eslint-disable consistent-return */
/* eslint-disable no-plusplus */
/* eslint-disable no-use-before-define */

class PaginationContoller {
  private static instance: PaginationContoller;

  private allItems: unknown[] = [];

  private itemLengthPerPage = 10;

  private showItems: unknown[] = [];

  private pageLimit = 10;

  set setAllItems(allItems: unknown[]) {
    this.allItems = allItems;
  }

  static getInstance(): PaginationContoller {
    if (this.instance) {
      return this.instance;
    }

    this.instance = new PaginationContoller();

    return this.instance;
  }

  // * 보여줘야할 아이템에 push하기
  private pushShowItems(startIdx: number): void {
    this.showItems = [];

    for (let i = startIdx; i < startIdx + this.pageLimit; i++) {
      if (this.allItems[i] !== undefined) {
        this.showItems.push(this.allItems[i]);
      }
    }
  }

  // * 총 가져와야할 페이네이션 숫자
  getTotalPageCount(): number {
    return Math.ceil(this.allItems.length / this.itemLengthPerPage);
  }

  // * 클릭된 페이지에 보여져야할 테이블 리스트 아이템 가져오기
  getShowItems(startIdx: number) {
    if (this.allItems === null || this.allItems.length === 0) {
      return;
    }

    this.pushShowItems(startIdx);

    return this.showItems;
  }
}

export default PaginationContoller;
