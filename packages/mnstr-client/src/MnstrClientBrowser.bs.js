// Generated by BUCKLESCRIPT VERSION 2.2.2, PLEASE EDIT WITH CARE
'use strict';

var Js_primitive = require("bs-platform/lib/js/js_primitive.js");
var Js_null_undefined = require("bs-platform/lib/js/js_null_undefined.js");

var prefix = "mnstr";

var accessToken = "mnstr:access_token";

var idToken = "mnstr:id_token";

var expiresAt = "mnstr:expires_at";

var scope = "mnstr:scope";

var Keys = /* module */[
  /* prefix */prefix,
  /* accessToken */accessToken,
  /* idToken */idToken,
  /* expiresAt */expiresAt,
  /* scope */scope
];

function get() {
  return {
          accessToken: Js_null_undefined.fromOption(Js_primitive.null_to_opt(localStorage.getItem(accessToken))),
          idToken: Js_null_undefined.fromOption(Js_primitive.null_to_opt(localStorage.getItem(idToken))),
          expiresAt: Js_null_undefined.fromOption(Js_primitive.null_to_opt(localStorage.getItem(expiresAt))),
          scope: Js_null_undefined.fromOption(Js_primitive.null_to_opt(localStorage.getItem(scope)))
        };
}

function clear() {
  localStorage.removeItem(accessToken);
  localStorage.removeItem(idToken);
  localStorage.removeItem(expiresAt);
  localStorage.removeItem(scope);
  return /* () */0;
}

var Session = /* module */[
  /* Keys */Keys,
  /* get */get,
  /* clear */clear,
  /* logout */clear
];

exports.Session = Session;
/* No side effect */
