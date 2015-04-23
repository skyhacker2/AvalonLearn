define(['avalon', 'text!./bbb.html', "css!./bbb.css"], function(avalon, bbb, css) {
    avalon.log(bbb)
    avalon.templateCache.bbb = bbb
    var model = avalon.define( {
        $id: "bbb",
        currentIndex: 0,
        toggle: function(index) {
            model.currentIndex = index;
        }
    });
    avalon.vmodels.root.page = "bbb"

    setTimeout(function() {
        require(['./modules/ccc/ccc'], function() {
            avalon.log('ccc模块')
        })
    }, 500);
});