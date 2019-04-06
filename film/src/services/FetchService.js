export class FetchService {
  static getListData() {
    return fetch('http://localhost:3001/film-list', {method: 'get'});
  }

  static createFilm(filmData) {
    return fetch('http://localhost:3001/film-list', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(filmData)
    });
  }

  static editFilm(filmData) {
    return fetch('http://localhost:3001/film-list', {
      method: 'put',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(filmData)
    });
  }

  static deleteFilm(filmId) {
    return fetch(`http://localhost:3001/film-list/${filmId}`, {
      method: 'delete',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });
  }
}
