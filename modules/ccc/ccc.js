define(['avalon', "text!./ccc.html"], function(avalon, ccc) {
    avalon.templateCache.ccc = ccc;
    var model = avalon.define({
        $id: "ccc",
        object: {}
    });
    setTimeout(function() {
        model.object = {id: "132", message: "显示!!!"}
    }, 3000);
    setTimeout(function() {
        model.object = {}
    }, 5000);
    avalon.vmodels.root.page = "ccc"
});