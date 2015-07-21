
function collect_same_elements(collection_a, object_b) {
    var result = [];
    collection_a.forEach(
        function(val){
            object_b.value.forEach(
                function(item){
                    if(val.key === item){
                        result.push(val.key);
                    }
                }
            )
        }
    )
    return result;
}