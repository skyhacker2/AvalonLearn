define(["avalon", "text!./ddd.html"], function(avalon, ddd) {
    avalon.templateCache.ddd = ddd;
    var vmodel = avalon.define({
        $id: "ddd",
        $skipArray: ["array", "object"],
        number: 11,
        number2: 12,
        bool: false,
        vv: void 0,
        data: new Date,
        show: function() {
            var elem = avalon(this);
            console.log(elem.data("number"), elem.data("number2"), elem.data("bool"), elem.data("fn"))
        }
    });

    avalon.vmodels.root.page = "ddd";
});