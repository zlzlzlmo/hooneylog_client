/* eslint-disable consistent-return */
/* eslint-disable no-plusplus */
/* eslint-disable no-use-before-define */

class PaginationContoller<T> {
  private readonly allItems: T[] = [];

  // * 한 페이지에 보여줘야할 갯수
  private readonly itemLengthPerPage = 3;

  private itemsToShow: T[] = [];

  constructor(allItems: T[]) {
    this.allItems = allItems;
  }

  // * 보여줘야할 아이템에 push하기
  private pushItemsToShow(startIdx: number): void {
    this.itemsToShow = [];

    for (let i = startIdx; i < startIdx + this.itemLengthPerPage; i++) {
      if (this.allItems[i] !== undefined) {
        this.itemsToShow.push(this.allItems[i]);
      }
    }
  }

  // * 총 가져와야할 페이네이션 숫자
  getTotalPageCount(): number {
    return Math.ceil(this.allItems.length / this.itemLengthPerPage);
  }

  // * 클릭된 페이지에 보여져야할 테이블 리스트 아이템 가져오기
  getItemsToShow(startIdx: number): T[] {
    if (this.allItems === null || this.allItems.length === 0) {
      return [];
    }

    this.pushItemsToShow(startIdx);

    return this.itemsToShow;
  }
}

export default PaginationContoller;
