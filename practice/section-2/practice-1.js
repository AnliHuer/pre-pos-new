
function found_equal_item(item, result) {

    for (var k in result) {
      if (item === result[k].key) {
        result[k].count++;
        return;
      }
    }
   result.push({key:item,count:1});
   return;
}

function count_same_elements(collection) {
  var result = [];
  for (var i in collection) {
    found_equal_item(collection[i], result);
  }
  return result;
}
