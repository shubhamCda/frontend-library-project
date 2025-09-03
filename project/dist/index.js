"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const searchElement = document.querySelector("#user");
const formSubmit = document.querySelector("#form");
const mainContainer = document.querySelector(".main-container");
const dataURL = "https://api.github.com/users";
async function customFetchData(url, options) {
    const response = await fetch(url, options);
    const result = await response.json();
    if (!response.ok) {
        throw new Error("Network issue...please check!!!");
    }
    console.log(result);
    return result;
}
function fetchUserData(url) {
    customFetchData(url, {});
}
fetchUserData(dataURL);
//# sourceMappingURL=index.js.map