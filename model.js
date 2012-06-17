var community_model = {
    search : function (key) {
        var search_result = [];
        for ( var index in this.communities_data ) {
            var name = communities_data[ index ]['name'];
            if ( name.match( /key/ ) ) {
                search_result.push( communities_data[ index ] );
            }
        }
        return search_result;
    }
};
