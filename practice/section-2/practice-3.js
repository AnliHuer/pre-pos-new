function map_new_collection(val){
    var VAL_COUNT_POSITION = 2;
    var summary = 1;
    if(/[:\-[]/.test(val)){
        summary = parseInt(val.slice(VAL_COUNT_POSITION));
    }
    return {
        name: val[0],
        summary:summary
    }
}

function calculate_count(item,result){
    for(var val in result){
        if(item.name ===result[val].name){
            result[val].summary += item.summary;
            return;
        }
    }
    result.push(item);
    return;
}

function count_same_elements(collection) {
    var result = [];
    var existItems = collection.map( function (val) {
        return (map_new_collection(val));
    })
    existItems.forEach(function(item){
       calculate_count(item,result);
    })
    return result;
}
