/*
 * stubble.js v0.0.2
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
  if (arg.language)
    arg.language = arg.language.replace('-', '_');
  for (var sourceName in arg.source)
  {
    var parts = sourceName.split('_', 3);
    var indexName = parts[0];
    var targetName = sourceName;
    if (arg.language && parts.length > 2)
    {
      if (parts[2] != arg.language.substring(0, parts[2].length))
          continue;
      targetName = parts[0] + '_' + parts[1];
    }
    var index = arg.target[indexName];
    arg.target[targetName] = arg.source[sourceName][index];
  }
  return arg.target;
}
