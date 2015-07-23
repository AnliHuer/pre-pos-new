
function collect_same_elements(collection_a, object_b) {
    var result = [];
    collection_a.forEach(function(val){
        object_b.value.forEach(function(item){
            if(val === item){
                result.push(val);
            }
        })
    })
    return result;
}