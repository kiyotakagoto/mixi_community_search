var MixiCommunitySearch = (function () {
    var MixiCommunitySearchObject = {};
    MixiCommunitySearchObject.view= {
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
    MixiCommunitySearchObject.community_model = {
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
    MixiCommunitySearchObject.controller = {
        get_key : function () {
            var key = $('#search_form').attr('value');
            return key;
        },
        search : function () {
            var key           = this.get_key();
            if ( key === '' ) { return undefined; }
            var search_result = MixiCommunitySearchObject.community_model.search( key );
            MixiCommunitySearchObject.view.notice(search_result);
        }
    };

    MixiCommunitySearchObject.mixi_app_jsapi_wrapper = {
        get_communities : function () {
            var params = {};
            params[opensocial.DataRequest.PeopleRequestFields.MAX]   = 1000;
            params[opensocial.DataRequest.PeopleRequestFields.FIRST] = 0;
            var req = opensocial.newDataRequest();
            req.add(mixi.newFetchCommunityRequest(opensocial.IdSpec.PersonId.VIEWER, params), "communities");
            req.send(function(data) {
                var communities = data.get("communities").getData();
                var formatted_community = [];
                communities.each( function ( community ) {
                    var id        = (community.getId().split('/'))[1];
                    var name      = community.getName();
                    var thumbnail = community.getField( mixi.Community.Field.THUMBNAIL_URL );
                    formatted_community.push({
                        id        : id,
                        name      : name,
                        thumbnail : thumbnail
                    });
                });
                MixiCommunitySearchObject.community_model['communities_data'] = formatted_community;
            });
        }
    };
    MixiCommunitySearchObject.init = function () {
        MixiCommunitySearchObject.mixi_app_jsapi_wrapper.get_communities();
        MixiCommunitySearchObject.view['container'] = $('#container');
        $('#search_form').on('keyup', function (e) {
            MixiCommunitySearchObject.controller.search();
        });
    }
    return MixiCommunitySearchObject;
})();

gadgets.util.registerOnLoadHandler(MixiCommunitySearch.init);
