// Generated by CoffeeScript 1.8.0
(function() {
  $(document).ready(function() {
    var Pistol, dummy, pistol;
    Pistol = Backbone.View.extend({
      initialize: function() {
        return console.log(this);
      },
      say: function() {
        return console.log(this);
      }
    });
    pistol = new Pistol({
      name: "good"
    });
    dummy = pistol.say;
    return dummy();
  });

}).call(this);

//# sourceMappingURL=this.js.map