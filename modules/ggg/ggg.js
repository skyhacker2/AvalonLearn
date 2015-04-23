define(["avalon", "text!./ggg.html"], function(avalon, ggg) {
    avalon.templateCache.ggg = ggg
    var model = avalon.define({
        $id: "ggg",
        percent: 0
    });
    var a = true;
    var id = setInterval(function() {
        if (a) {
            if (model.percent < 100) {
                model.percent++;
            } else {
                a = false;
            }
        } else {
            if (model.percent >0) {
                model.percent--;
            } else {
                a = true;
            }
        }
    }, 100);
    avalon.vmodels.root.page = "ggg"
});