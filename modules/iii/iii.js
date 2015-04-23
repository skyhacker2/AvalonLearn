define(["avalon", "text!./iii.html"], function(avalon, iii) {
    avalon.templateCache.iii = iii
    var model = avalon.define({
        $id: "iii",
        selected: "name",
        options: ["name", "size", "date"],
        data: [
            {name: "aaa", size: "111", date: Date.now() + 111},
            {name: "bbb", size: "222", date: Date.now() + 222},
            {name: "ccc", size: "333", date: Date.now() + 333}
        ],
        trend: 1
    });

    model.$watch("selected", function(v) {
        avalon.log(v)
        var t = parseFloat(model.trend);
        model.data.sort(function(a, b) {
            if (v == "name") {
                return t * a[v].localeCompare(b[v])
            } else {
                var ret = a[v] > b[v] ? 1 : -1;
                return t * ret;
            }
        })
    });
    model.$watch("trend", function(t) {
        avalon.log(t)
        var v = model.selected;
        t = parseFloat(t);
        model.data.sort(function(a, b) {
            var ret = a[v] > b[v] ? 1 : -1;
            return t * ret;
        })
    });
    setTimeout(function() {
        console.log('fire');
        model.$fire("trend", -1, 1);
    }, 1000);
    

    var model2 = avalon.define({
        $id: "iii2",
        array: ["aaa", "bbb", "ccc", "ddd"],
        selected: "aaa"
    });

    avalon.vmodels.root.page = "iii"
});

