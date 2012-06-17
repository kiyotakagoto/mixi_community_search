var mixi_app_jsapi_wrapper = {
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
            community_model['communities_data'] = formatted_community;
        });
    }
};
