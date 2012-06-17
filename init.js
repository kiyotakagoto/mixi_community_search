function init () {
    mixi_app_jsapi_wrapper.get_communities();
    var tmp = $('#search_form');
    var id = tmp.attr('id');
    var domlevel1 = document.getElementById('search_form');
    tmp.on('change', function (e) {
        controller.search_on_change();
    });
}
