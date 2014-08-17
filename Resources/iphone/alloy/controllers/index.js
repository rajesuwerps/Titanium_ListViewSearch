function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        fullscreen: true,
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.__alloyId0 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: 40,
        color: "#000",
        backgroundColor: "#eee",
        top: 0,
        text: "Sample Airports",
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        id: "__alloyId0"
    });
    $.__views.index.add($.__views.__alloyId0);
    $.__views.__alloyId2 = Ti.UI.createSearchBar({
        height: 40,
        hintText: "Search by name or code",
        showCancel: "true",
        id: "__alloyId2"
    });
    var __alloyId5 = [];
    $.__views.__alloyId6 = {
        properties: {
            title: "Changi International",
            searchableText: "Changi International SIN",
            id: "__alloyId6"
        }
    };
    __alloyId5.push($.__views.__alloyId6);
    $.__views.__alloyId7 = {
        properties: {
            title: "Cozumel International",
            searchableText: "Cozumel International CZM",
            id: "__alloyId7"
        }
    };
    __alloyId5.push($.__views.__alloyId7);
    $.__views.__alloyId8 = {
        properties: {
            title: "John F. Kennedy International",
            searchableText: "John F. Kennedy International JFK",
            id: "__alloyId8"
        }
    };
    __alloyId5.push($.__views.__alloyId8);
    $.__views.__alloyId9 = {
        properties: {
            title: "Los Angeles International",
            searchableText: "Los Angeles International LAX",
            id: "__alloyId9"
        }
    };
    __alloyId5.push($.__views.__alloyId9);
    $.__views.__alloyId10 = {
        properties: {
            title: "Newark Liberty International",
            searchableText: "EWR",
            id: "__alloyId10"
        }
    };
    __alloyId5.push($.__views.__alloyId10);
    $.__views.__alloyId11 = {
        properties: {
            title: "Newport News/Williamsburg International",
            searchableText: "Newport News/Williamsburg International PHF",
            id: "__alloyId11"
        }
    };
    __alloyId5.push($.__views.__alloyId11);
    $.__views.__alloyId12 = {
        properties: {
            title: "Tokyo International",
            searchableText: "Tokyo International HND",
            id: "__alloyId12"
        }
    };
    __alloyId5.push($.__views.__alloyId12);
    $.__views.__alloyId13 = {
        properties: {
            title: "Wellington International",
            searchableText: "Wellington International WLG",
            id: "__alloyId13"
        }
    };
    __alloyId5.push($.__views.__alloyId13);
    $.__views.__alloyId3 = Ti.UI.createListSection({
        id: "__alloyId3"
    });
    $.__views.__alloyId3.items = __alloyId5;
    var __alloyId14 = [];
    __alloyId14.push($.__views.__alloyId3);
    $.__views.__alloyId1 = Ti.UI.createListView({
        top: 41,
        sections: __alloyId14,
        searchView: $.__views.__alloyId2,
        id: "__alloyId1"
    });
    $.__views.index.add($.__views.__alloyId1);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;