var view = {
    notice : function (search_result) {
        this.show( search_result );
    },
    show : function (search_result) {
        var container = $('#container');
        for ( var index in search_result ) {
            container.append( this.create_dom( search_result[ index ] ) );
        }
    },
    create_dom : function ( community_data ) {
        var name          = community_data['name'];
        var id            = community_data['id'];
        var thumbnail_url = community_data['thumbnail'];

        var thumbnail         = $('<img>').attr( 'src', thumbnail_url );
        var link_to_community = $('<a>').attr( 'href', 'http://mixi.jp/view_community.pl?id=' + id );
        return $('<div>')
            .append(
                link_to_community
                    .append( thumbnail )
                    .append( name )
            )
        ;
    }
};
