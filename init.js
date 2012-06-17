function init () {
    mixi_app_jsapi_wrapper.get_communities();
    $('#search_form').on('change', function (e) {
        controller.search_on_change();
    });
}
