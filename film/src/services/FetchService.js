export class FetchService {
  static getListData() {
    return fetch('http://localhost:3001/film-list', {method: 'get'});
  }
}
