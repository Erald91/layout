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
          <td><i class="fas fa-edit font-color"></i>  <a href="#" class="deleteRow"><i class="fas fa-link font-color"></i></a></td>
        </tr>
      `;
      trs.push(htmlString);
    });
    console.log(tableBody)
    tableBody.html(trs.join(''));
  }

  function init() {
    const addButton = $( "#savebutton" );
    const tableBody = $( "#tableBody" );
    const deleteRow = $( "#deleteRow" );

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

    $(tableBody).on('click', deleteRow, function(){
      event.preventDefault();
      deleteRow.parent().parent().remove();
       console.log(deleteRow.parent().parent())
    });

    addButton.click(function( event ) {
      event.preventDefault();
      const id = $( "#ID" ).val();
      const name = $("#name").val();
      const release = $("#release").val();
      const type = $("#type").val();
      const provider = $("#provider").val();
      const data ={
        id: id,
        name: name,
        release: release,
        type: type,
      provider: provider
    }
    const htmlString = `
        <tr class="body">
          <td>${data.id}</td>
          <td>${data.name}</td>
          <td>${data.release}</td>
          <td>${data.type}</td>
          <td>${data.provider}</td>
          <td><i class="fas fa-edit font-color"></i> <a href="#" class="deleteRow"><i class="fas fa-link font-color"></i></a></td>
        </tr>
      `;
    $('#tableBody tr:last').after(htmlString);
    $( "#ID" ).val("");
    $("#name").val("");
    $("#release").val("");
    $("#type").val("");
    $("#provider").val("");
    });
  }

  window.onload = function(event) {
    init();
  }
}());


