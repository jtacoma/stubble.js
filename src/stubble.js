/*
 * stubble.js v0.0.1
 * http://yellowseed.org/stubble.js/
 *
 * Copyright 2011, Joshua Tacoma
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 */

function stubble(arg) {
  arg = arg || {};
  if (typeof this !== 'undefined' && this !== null && !arg.target)
    arg.target = this;
  for (var name in arg.source)
  {
    var index_name = name.split('_', 1)[0]
    var index = arg.target[index_name];
    arg.target[name] = arg.source[name][index];
  }
  return arg.target;
}
