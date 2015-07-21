
function create_updated_collection(collection_a, object_b) {
    var result = [];
    collection_a.forEach(
        function(val){
            object_b.value.forEach(
                function(item){
                    if(val.key === item){
                        val.count--;
                    }
                }
            )
            result.push(val);
        }
    )
    return result;
}