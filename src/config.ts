/// <reference path="../lib/require" />

require.config({

  baseUrl: 'src',

  paths: {
    'jquery': '../lib/jquery'
  }

});

require([
  "jquery"
  //,'path/to/external/module',
], ($, ...args) => {

  console.log("require args", $, args);

});
