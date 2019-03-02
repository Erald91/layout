(function() {
  function createTableContent(data, tableBody) {
    const trs = [];

    data.forEach(function(film) {
      const htmlString = `
        <tr class="body">
          <td>${film.id}</td>
          <td>${film.name}</td>
          <td>${film.release}</td>
          <td>${film.type}</td>
          <td>${film.provider}</td>
          <td><i class="fas fa-edit font-color"></i> <i class="fas fa-link font-color"></i></td>
        </tr>
      `;
      trs.push(htmlString);
    });
  
    tableBody.innerHTML = trs.join('');
  }

  function init() {
    const addButton = document.getElementById('addTitleButton');
    const tableBody = document.getElementById('tableBody');

    const data = [
      {
        id: 'T1506908900',
        name: 'Ariel',
        release: '1999',
        type: 'Feature',
        provider: 'Disney',
        func: function() {
          alert('Ariel func');
        }
      }, {
        id: 'T1508584395',
        name: 'Another',
        release: '1994',
        type: 'Series',
        provider: 'ACME'
      }
    ];

    console.log('Data', data);

    data.push({
      id: 'T1506908900',
      name: 'ASDF',
      release: '1999',
      type: 'Feature',
      provider: 'TV'
    });

    console.log('[UPDATED] Data', data);

    // for (var i = 0; i < data.length; i++) {
    //   const film = data[i];
    //   if (film.release === '1999' && film.name === 'Ariel') {
    //     console.log(film);
    //   }
    // }

    const matchedFilm = data.find(function(film, index, array) {
      return film.release === '1999';
    });

    console.log('Found film', matchedFilm);

    // Once loaded the table will be populated
    createTableContent(data, tableBody);

    addButton.onclick = function(event) {
      alert('Add button clicked');
    }
  }

  window.onload = function(event) {
    init();
  }
}());