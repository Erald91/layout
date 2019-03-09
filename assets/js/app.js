(function() {
  function init() {
    const tableBody = $( "#tableBody" );
    const $titleModal = $("#myModal");
    let isEditingMode = null;

    // let data = [
    //   {
    //     id: 'T1506908900',
    //     name: 'Ariel',
    //     release: '1999',
    //     type: 'Feature',
    //     provider: 'Disney',
    //   }, {
    //     id: 'T1508584395',
    //     name: 'Another',
    //     release: '1994',
    //     type: 'Series',
    //     provider: 'ACME'
    //   }, {
    //     id: 'T1506908901',
    //     name: 'ASDF',
    //     release: '1999',
    //     type: 'Feature',
    //     provider: 'TV'
    //   }
    // ];
    
    let data = JSON.parse(localStorage.getItem('films')) || [];

    const addButton = $( "#savebutton" );

    $titleModal.on('hidden.bs.modal', function () {
      $("#ID").val("");
      $("#ID").prop("disabled", false);
      $("#name").val("");
      $("#release").val("");
      $("#type").val("");
      $("#provider").val("");
      isEditingMode = null;
    });
    
    function createTableContent() {
      const trs = [];

      data.forEach(function(film) {
        const $tr = $('<tr></tr>');
        $tr.attr({ 'class': 'body' });

        const $tdId = $('<td></td>');
        $tdId.text(film.id);
        $tr.append($tdId);

        const $tdName = $('<td></td>');
        $tdName.text(film.name);
        $tr.append($tdName);

        const $tdType = $('<td></td>');
        $tdType.text(film.type);
        $tr.append($tdType);

        const $tdRelease = $('<td></td>');
        $tdRelease.text(film.release);
        $tr.append($tdRelease);

        const $tdProvider = $('<td></td>');
        $tdProvider.text(film.provider);
        $tr.append($tdProvider);

        const $tdActions = $('<td></td>');
        $tdActions.attr({ class: 'custom-actions' });

        const $deleteIcon = $('<i></i>');
        $deleteIcon.attr({ class: 'fas fa-trash-alt' });
        $deleteIcon.on('click', function(e) {
          const doDelete = confirm(`Are you sure that you want to delete film with ID ${film.id}`);
          if (doDelete) {
            data = data.filter(function(element) {
              return element.id !== film.id;
            });
            localStorage.setItem('films', JSON.stringify(data));
            createTableContent();
          }
        });
        $tdActions.append($deleteIcon);

        const $editIcon = $('<i></i>');
        $editIcon.attr({ class: 'fas fa-edit' });
        $editIcon.on('click', function(e) {
          isEditingMode = film.id;
          $titleModal.modal('show');

          $("#ID").val(film.id);
          $("#ID").prop('disabled', true);
          $("#name").val(film.name);
          $("#release").val(film.release);
          $("#type").val(film.type);
          $("#provider").val(film.provider);
        });
        $tdActions.append($editIcon);

        $tr.append($tdActions);

        trs.push($tr);
      });

      tableBody.empty();
      tableBody.append(trs);    
    }

    // Once loaded the table will be populated
    createTableContent();

    addButton.click(function( event ) {
      const id = $( "#ID" ).val();
      const name = $("#name").val();
      const release = $("#release").val();
      const type = $("#type").val();
      const provider = $("#provider").val();

      if (!id) {
        alert('ID not defined!!!');
        return;
      }

      if (!name) {
        alert('Name not defined!!!');
        return;
      }

      if (!release) {
        alert('Release not defined!!!');
        return;
      }

      if (!type) {
        alert('Type not defined!!!');
        return;
      }

      if (!provider) {
        alert('Provider not defined!!!');
        return;
      }

      const film ={
        id: id,
        name: name,
        release: release,
        type: type,
        provider: provider
      }
      
      if (isEditingMode) {
        data = data.map(function(element) {
          if (element.id === isEditingMode) {
            element = film;
          }
          return element;
        });
      } else {
        data.push(film);
      }

      localStorage.setItem('films', JSON.stringify(data));

      createTableContent();

      $titleModal.modal('hide');
    });
  }

  window.onload = function(event) {
    init();
  }
}());


