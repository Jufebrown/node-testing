"use strict";

// Maybe should use Number(bottom) or unary, etc to make sure args are actual numbers
const randomInt = (top) => Math.floor((Math.random() * (+top)) + 1);

module.exports = { randomInt }
