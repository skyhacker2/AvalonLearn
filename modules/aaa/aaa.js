define(['avalon', "text!./aaa.html"], function(avalon, aaa) {
    avalon.templateCache.aaa = aaa
    var model = avalon.define( {
        $id: "aaa",
        firstName: "Eleven",
        lastName: "Chen",
        fullName: { // 里面必须使用this指向scope
            set: function(val) {
                var array = (val || "").split(" ");
                this.firstName = array[0] || "";
                this.lastName = array[1] || "";
            },
            get: function() {
                return this.firstName + " " + this.lastName;
            }
        },
        arr: ["aaa", "bbb", "ccc", "ddd"],
        selected: ["bbb", "ccc"],
        checkAllbool: false,
        checkAll: function() {
            if (this.checked) {
                model.selected = model.arr
            } else {
                model.selected.clear();
            }
        }
    });
    model.checkAllbool = model.arr.length === model.selected.length
    model.selected.$watch("length", function(n) {
        model.checkAllbool = n === model.arr.size()
    })
    avalon.vmodels.root.page = "aaa"
});