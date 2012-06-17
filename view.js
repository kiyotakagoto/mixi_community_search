var view = {
    notice : function (search_result) {
        this.reset_container();
        this.show( search_result );
    },
    reset_container : function () {
        this.container.children().remove();
    },
    show : function (search_result) {
        for ( var index in search_result ) {
            this.container.append( this.create_dom( search_result[ index ] ) );
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
