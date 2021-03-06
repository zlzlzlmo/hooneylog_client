/* eslint-disable prefer-const */
/* eslint-disable import/no-cycle */
/* eslint-disable no-useless-constructor */

const ASearchKeysType = ['search', 'category', 'tag'] as const;
export type SearchKeyType = typeof ASearchKeysType[number];

class QueryParam {
  private readonly query: URLSearchParams | undefined;

  constructor() {
    if (typeof window !== 'undefined') {
      this.query = new URLSearchParams(window.location.search);
    }
  }

  get firstKeyName() {
    if (!this.query) return;
    let keyName = this.query.keys().next().value;

    if (!this.isOkaySearchKey(keyName)) {
      throw new Error(`잘못된 검색 조건입니다. 현재 가능한 검색 조건은 ${this.possibleSearchKeys()}입니다.`);
    }

    return keyName;
  }

  get firstValue() {
    if (!this.query) return;
    return this.query.values().next().value;
  }

  hasOverTwoKey(): boolean {
    let array = [];
    this.query?.forEach((_value, key) => array.push(key));
    return array.length > 1;
  }

  protected getValue(key: SearchKeyType) {
    if (!this.query) return;
    return this.query.get(key) || '';
  }

  protected has(key: SearchKeyType): boolean {
    if (!this.query) return false;
    return this.query.has(key);
  }

  private isOkaySearchKey(key: any): key is SearchKeyType {
    console.log('key : ', key);
    return ASearchKeysType.includes(key);
  }

  private possibleSearchKeys() {
    return ASearchKeysType.join(', ');
  }
}

export default QueryParam;
