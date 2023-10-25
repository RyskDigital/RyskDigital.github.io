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
    return property;
}

StyleDictionary.registerFormat({
    name: "utility-classes",
    formatter: function (dictionary) {
        let output = "";
        dictionary.allTokens.forEach((element) => {
            // if (
            //     element.attributes.category == "color" &&
            //     element.attributes.type == "background"
            // ) {
            //     output += `.${element.name} {\n    background-color: ${element.value};\n}\n\n`;
            // }
            if (!(chooseProperty(element) === undefined)) {
                output += `.${element.name} {\n    ${chooseProperty(
                    element
                )}: ${element.value};\n}\n\n`;
            }

            // console.log(JSON.stringify(element));
            // output += `.${element.name} {\n    color: ${element.value};\n}\n`;
        });
        return output;
    },
});

StyleDictionary.buildAllPlatforms();
