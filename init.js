mixi_app_jsapi_wrapper.get_communities();
var tmp = $('#search_button');
tmp.on('change', function (e) {
    controller.search_on_change();
});
