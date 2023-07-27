"use strict";
exports.__esModule = true;
var react_1 = require("react");
var PokemonCollections = function (props) {
    var pokemons = props.pokemons;
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        " ",
        console.log(props),
        react_1["default"].createElement("div", null, "PokemonCollections")));
};
exports["default"] = PokemonCollections;
