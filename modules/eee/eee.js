define(["avalon", "text!./eee.html"], function(avalon, eee) {
    avalon.templateCache.eee = eee
    var model = avalon.define({
        $id: "eee",
        color: "red",
        toggle: true,
        changeToggle: function() {
            model.toggle = !model.toggle
        },
        switchColor: function() {
            model.color = model.color === "red" ? "blue" : "red"
        }
    });
    avalon.vmodels.root.page = "eee"
});