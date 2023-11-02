function colorPropertyLogic(type) {
    switch (type) {
        case "background":
            return "background-color";
        case "font":
            return "color";
        default:
            return undefined;
    }
}

function sizePropertyLogic(type, item) {
    if (type == "font") {
        return "font-size";
    }
    if (type == "border") {
        switch (item) {
            case "width":
                return "border-width";
            case "radius":
                return "border-radius";
            default:
                return undefined;
        }
    }
    if (type == "margin") {
        switch (item) {
            case "left":
                return "margin-left";
            case "top":
                return "margin-top";
            case "right":
                return "margin-right";
            case "bottom":
                return "margin-bottom";
            default:
                return "margin";
        }
    }
    if (type == "padding") {
        switch (item) {
            case "left":
                return "padding-left";
            case "top":
                return "padding-top";
            case "right":
                return "padding-right";
            case "bottom":
                return "padding-bottom";
            default:
                return "padding";
        }
    }
    return undefined;
}

const StyleDictionary = require("style-dictionary").extend(
    "util-gen.config.json"
);

function chooseProperty(jsonObject) {
    const category = jsonObject.attributes.category;
    const type = jsonObject.attributes.type;
    const item = jsonObject.attributes.item;
    let property;
    if (category == "color") {
        property = colorPropertyLogic(type);
    }
    if (category == "size") {
        property = sizePropertyLogic(type, item);
    }
    return property;
}

StyleDictionary.registerFormat({
    name: "utility-classes",
    formatter: function (dictionary) {
        let output = "";
        dictionary.allTokens.forEach((element) => {
            if (chooseProperty(element) == undefined) {
                return;
            }
            let varName = element.name;
            switch (element.attributes.category) {
                case "color":
                    element.name = element.name.replace("background", "bg");
                    break;
                default:
                    break;
            }
            output += `.${element.name} {\n    ${chooseProperty(
                element
            )}: var(--${varName});\n}\n\n`;
        });
        return output;
    },
});

StyleDictionary.buildAllPlatforms();
