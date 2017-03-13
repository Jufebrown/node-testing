'use strict'

const {assert: {isObject, deepEqual}} = require(`chai`)
const parseArgs  = require(`../lib/parse-args`)

describe(`parse-args`, () => {
  it(`should return an object`, () => {
    isObject(parseArgs())
  })

  it(`should return 2 properties: count and sides`, () => {
    deepEqual({count: '', sides: ''}, parseArgs())
  })
})
