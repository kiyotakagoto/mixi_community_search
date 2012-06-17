var community_model = {
    search : function (key) {
        var search_result = [];
        var reg_exp = new RegExp( key );
        for ( var index in this.communities_data ) {
            var name = this.communities_data[ index ]['name'];
            if ( name.match( reg_exp ) ) {
                search_result.push( this.communities_data[ index ] );
            }
        }
        return search_result;
    }
};
