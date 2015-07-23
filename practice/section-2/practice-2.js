function found_equal_item(item, result) {
    for (var k in result) {
        if (item.split("-")[0] === result[k].key) {
            result[k].count +=(item.split("-")[1] || 1) ;
            return;
        }
    }
    result.push({
        key:item.split("-")[0],
        count:parseInt(item.split("-")[1] || 1)
    });
    return;
}

function count_same_elements(collection) {
    var result = [];
    collection.forEach(function(item){
        found_equal_item(item, result);
    });
    return result;
}
