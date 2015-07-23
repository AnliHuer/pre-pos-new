function map_new_collection(val){
    var VAL_COUNT_POSITION = 2;
    var count = 1;
    if(/[:\-[]/.test(val)){
        count = parseInt(val.slice(VAL_COUNT_POSITION));
    }
    return {
        key: val[0],
        count:count
    }
}

function calculate_count(item,result){
    for(var val in result){
        if(item.key ===result[val].key){
            result[val].count += item.count;
            return;
        }
    }
    result.push(item);
    return;
}

function create_updated_collection(collection_a, object_b) {
    var result = [];
    var resultC = [];
    var existItems = collection_a.map(function (val) {
            return (map_new_collection(val));
    })
    existItems.forEach(function(item){
            calculate_count(item,result);
    })
    result.forEach(function(value){
        object_b.value.forEach(function(obj){
            if(value.key === obj){
                value.count -= Math.floor(value.count/3);
            }
        })
        resultC.push(value);
    } )
    return resultC;
}