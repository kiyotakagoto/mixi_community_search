var view = {
    notice : function (search_result) {
        show( search_result );
    },
    show : function (search_result) {
        var container = $('#container');
        for ( var index in search_result ) {
            container.append( this.create_dom( search_result[ index ] ) );
        }
    },
    create_dom : function ( community_data ) {
        var thumbnail_url = community_data['thumbnail'];
        var name          = community_data['name'];
        var thumbnail     = $('<img>').attr( 'src', thumbnail_url );
        return $('<div>')
            .append( thumbnail )
            .append( name )
        ;
    }
};
