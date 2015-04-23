define(['avalon', 'text!./bbb.html'], function(avalon, bbb) {
    avalon.templateCache.bbb = bbb
    var model = avalon.define( {
        $id: "bbb",
        currentIndex: 0,
        toggle: function(index) {
            model.currentIndex = index;
        }
    });
    avalon.vmodels.root.page2 = "bbb"
});