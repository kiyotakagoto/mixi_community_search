function init () {
    mixi_app_jsapi_wrapper.get_communities();
    view['container'] = $('#container');
    $('#search_form').on('keyup', function (e) {
        controller.search();
    });
}
