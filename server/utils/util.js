const checkFields = function(filmData) {
  const allowedProps = ['id', 'name', 'release', 'type', 'provider'];
  
  const keys = Object.keys(filmData);
  const returnMissing = allowedProps.filter(function(key) {
    if (keys.indexOf(key) === -1) {
      return true;
    } else {
      if (!filmData[key]) {
        return true;
      } else {
        return false;
      }
    }
  });

  return returnMissing;
}

module.exports = {
  checkFields
}
