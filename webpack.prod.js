const path = require('path')
const { merge } = require('webpack-merge')
const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const common = require('./webpack.common.js')

module.exports = merge(common,{
    mode: 'production'
})
