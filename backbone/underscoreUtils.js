// Generated by CoffeeScript 1.8.0
(function() {
  $(document).ready(function() {
    var dest, src;
    dest = {
      name: 'dest',
      obj: {
        a: 'ok',
        b: 'yes',
        c: 'hale'
      }
    };
    src = {
      name: 'src',
      obj: {
        more: 'more',
        but: 'but',
        override: 'youbet'
      }
    };
    $.extend(true, dest, src);
    return console.log(JSON.stringify(dest));
  });

}).call(this);

//# sourceMappingURL=underscoreUtils.js.map