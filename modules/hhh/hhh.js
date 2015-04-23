define(["avalon", "text!./hhh.html"], function(avalon, hhh) {
    avalon.templateCache.hhh = hhh
    var model = avalon.define({
        $id: "hhh",
        array: ["aaa", "bbb", "ccc", "ddd", "eee", "fff", "ggg"],
        data: [
            {text: "title1", value: 1111},
            {text: "title2", value: 2222}
        ]
    });
    avalon.vmodels.root.page = "hhh"
});