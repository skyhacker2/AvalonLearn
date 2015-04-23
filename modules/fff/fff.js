define(["avalon", "text!./fff.html"], function(avalon, fff) {
    avalon.templateCache.fff = fff
    var model = avalon.define({
        $id: "fff",
        background: "red"
    });
    model.$watch("background", function(val) {
        model.background = val;
    });
    avalon.vmodels.root.page = "fff"
});