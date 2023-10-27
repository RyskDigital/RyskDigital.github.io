const StyleDictionary = require("style-dictionary").extend(
    "util-gen.config.json"
);

function chooseProperty(jsonObject) {
    let property;
    if (jsonObject.attributes.category == "color") {
        switch (jsonObject.attributes.type) {
            case "background":
                property = "background-color";
                break;

            case "font":
                property = "color";
                break;

            default:
                break;
        }
    }
    // if (jsonObject.attributes.category == "size") {
    //     switch (jsonObject.attributes.type) {
    //         case "font":
    //             property = "font-size";
    //             break;
    //         case "margin":
    //             property = "margin";
    //             break;
    //         case "padding":
    //             property = "padding";
    //             break;
    //         case "border-width":
    //             property = "border-width";
    //             break;
    //         case "border-radius":
    //             property = "border-radius";
    //             break;

    //         default:
    //             break;
    //     }
    // }
    if (jsonObject.attributes.type == "border") {
        switch (jsonObject.attributes.item) {
            case "width":
                property = "border-width";
                break;

            default:
                break;
        }
    }
    return property;
}

StyleDictionary.registerFormat({
    name: "utility-classes",
    formatter: function (dictionary) {
        let output = '@import "../variables";\n\n';
        dictionary.allTokens.forEach((element) => {
            if (chooseProperty(element) == undefined) {
                return;
            }
            switch (element.attributes.category) {
                case "color":
                    element.name = element.name.replace("color", "clr");
                    break;

                default:
                    break;
            }
            output += `.${element.name} {\n    ${chooseProperty(
                element
            )}: var(--${element.name});\n}\n\n`;
        });
        return output;
    },
});

StyleDictionary.buildAllPlatforms();
