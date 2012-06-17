var controller = {
    get_key : function () {
        var key = $('#search_form').attr('value');
        return key;
    },
    search : function () {
        var key           = this.get_key();
        if ( key === '' ) { return undefined; }
        var search_result = community_model.search( key );
        view.notice(search_result);
    }
};
