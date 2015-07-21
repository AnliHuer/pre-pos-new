function collect_same_elements(collection_a, collection_b) {
  var result = [];

  collection_a.forEach(
    function(val) {
      collection_b.forEach(function(item) {
        if (val === item) {
          result.push(val);
        }
      })
    }
  )
  return result;
}