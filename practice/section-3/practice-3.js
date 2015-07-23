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


function create_updated_collection(collection_a, object_b) {
    var result = [];
    var resultC = [];
    for (var i in collection_a) {
        found_equal_item(collection_a[i], result);
    }
    result.forEach( function(val){
        object_b.value.forEach(function(item){
            if(val.key === item){
                val.count -=Math.floor(val.count/3);
            }
        } )
        resultC.push(val);
    })
    return resultC;
}