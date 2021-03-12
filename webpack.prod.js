const path = require('path')
const { merge } = require('webpack-merge')
const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin")

module.exports = merge(common,{
    mode: 'production'
})
