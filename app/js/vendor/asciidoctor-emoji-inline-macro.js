/* Generated by Opal 0.6.3 */
(function($opal) {
  var $a, self = $opal.top, $scope = $opal, nil = $opal.nil, $breaker = $opal.breaker, $slice = $opal.slice, $klass = $opal.klass, $hash2 = $opal.hash2;

  if ($scope.RUBY_ENGINE['$==']("opal")) {};
  self.$include((($a = $opal.Object._scope.Asciidoctor) == null ? $opal.cm('Asciidoctor') : $a));
  (function($base, $super) {
    function $EmojiBlockMacro(){};
    var self = $EmojiBlockMacro = $klass($base, $super, 'EmojiBlockMacro', $EmojiBlockMacro);

    var def = self._proto, $scope = self._scope;

    self.$use_dsl();

    self.$named("emoji");

    self.$name_positional_attributes("size");

    $opal.cdecl($scope, 'SIZE_MAP', $hash2(["1x", "lg", "2x", "3x", "4x", "5x"], {"1x": 17, "lg": 24, "2x": 34, "3x": 50, "4x": 68, "5x": 85}));

    $scope.SIZE_MAP['$default='](24);

    return (def.$process = function(parent, target, attributes) {
      var $a, self = this, doc = nil, slash = nil, size = nil, cdn = nil, qtarget = nil, size_class = nil, emoji_name = nil;

      doc = parent.$document();
      if (doc.$attributes()['$[]']("emoji")['$==']("tortue")) {
        slash = (function() {if ((($a = (doc['$attr?']("htmlsyntax", "xml"))) !== nil && (!$a._isBoolean || $a == true))) {
          return "/"
          } else {
          return nil
        }; return nil; })();
        size = $scope.SIZE_MAP['$[]'](attributes['$[]']("size"));
        cdn = (function() {if ((($a = (attributes['$key?']("cdn"))) !== nil && (!$a._isBoolean || $a == true))) {
          return attributes['$[]']("cdn")
          } else {
          return (doc.$attr("emoji-cdn", "http://www.tortue.me/emoji/"))
        }; return nil; })();
        qtarget = "" + (cdn) + (target) + ".png";
        return "<img src=\"" + (parent.$image_uri(qtarget, nil)) + "\" height=\"" + (size) + "\" width=\"" + (size) + "\"" + (slash) + ">";
        } else {
        size_class = (function() {if ((($a = (size = attributes['$[]']("size"))) !== nil && (!$a._isBoolean || $a == true))) {
          return " twa-" + (size)
          } else {
          return nil
        }; return nil; })();
        emoji_name = target.$tr("_", "-");
        return "<i class=\"twa" + (size_class) + " twa-" + (emoji_name) + "\"></i>";
      };
    }, nil) && 'process';
  })(self, ($scope.Extensions)._scope.InlineMacroProcessor);
  return (function($base, $super) {
    function $EmojiAssetsDocinfoProcessor(){};
    var self = $EmojiAssetsDocinfoProcessor = $klass($base, $super, 'EmojiAssetsDocinfoProcessor', $EmojiAssetsDocinfoProcessor);

    var def = self._proto, $scope = self._scope;

    self.$use_dsl();

    self.$at_location("header");

    def.$process = function(doc) {
      var $a, self = this, extdir = nil, stylesheet_name = nil, stylesheet_href = nil, content = nil;
      if (doc.$attributes()['$[]']("emoji")['$==']("tortue")) {
        return nil
        } else {
        extdir = (($a = $opal.Object._scope.File) == null ? $opal.cm('File') : $a).$join((($a = $opal.Object._scope.File) == null ? $opal.cm('File') : $a).$dirname("emoji-inline-macro/extension"));
        stylesheet_name = "twemoji-awesome.css";
        if ((($a = doc['$attr?']("linkcss")) !== nil && (!$a._isBoolean || $a == true))) {
          stylesheet_href = self.$handle_stylesheet(doc, extdir, stylesheet_name);
          return "<link rel=\"stylesheet\" href=\"" + (stylesheet_href) + "\">";
          } else {
          content = doc.$read_asset("" + (extdir) + "/" + (stylesheet_name));
          return ["<style>", content.$chomp(), "</style>"]['$*']("\n");
        };
      };
    };

    return (def.$handle_stylesheet = function(doc, extdir, stylesheet_name) {
      var $a, $b, $c, TMP_1, self = this, outdir = nil, stylesoutdir = nil, destination = nil, content = nil;

      outdir = (function() {if ((($a = (doc['$attr?']("outdir"))) !== nil && (!$a._isBoolean || $a == true))) {
        return (doc.$attr("outdir"))
        } else {
        return (doc.$attr("docdir"))
      }; return nil; })();
      stylesoutdir = doc.$normalize_system_path((doc.$attr("stylesdir")), outdir, ((function() {if (doc.$safe()['$>='](($scope.SafeMode)._scope.SAFE)) {
        return outdir
        } else {
        return nil
      }; return nil; })()));
      if ((($a = ($b = ($c = stylesoutdir['$=='](extdir)['$!'](), $c !== false && $c !== nil ?doc.$safe()['$<'](($scope.SafeMode)._scope.SECURE) : $c), $b !== false && $b !== nil ?(doc['$attr?']("copycss")) : $b)) !== nil && (!$a._isBoolean || $a == true))) {
        destination = doc.$normalize_system_path(stylesheet_name, stylesoutdir, ((function() {if (doc.$safe()['$>='](($scope.SafeMode)._scope.SAFE)) {
          return outdir
          } else {
          return nil
        }; return nil; })()));
        content = doc.$read_asset("" + (extdir) + "/" + (stylesheet_name));
        ($a = ($b = (($c = $opal.Object._scope.File) == null ? $opal.cm('File') : $c)).$open, $a._p = (TMP_1 = function(f){var self = TMP_1._s || this;
if (f == null) f = nil;
        return f.$write(content)}, TMP_1._s = self, TMP_1), $a).call($b, destination, "w");
        return destination;
        } else {
        return "./" + (stylesheet_name)
      };
    }, nil) && 'handle_stylesheet';
  })(self, ($scope.Extensions)._scope.DocinfoProcessor);
})(Opal);
/* Generated by Opal 0.6.3 */
(function($opal) {
  var $a, $b, TMP_1, self = $opal.top, $scope = $opal, nil = $opal.nil, $breaker = $opal.breaker, $slice = $opal.slice;

  if ($scope.RUBY_ENGINE['$==']("opal")) {
    };
  return ($a = ($b = ($scope.Asciidoctor)._scope.Extensions).$register, $a._p = (TMP_1 = function(){var self = TMP_1._s || this, $a;
    if (self.document == null) self.document = nil;

  if ((($a = self.document['$basebackend?']("html")) !== nil && (!$a._isBoolean || $a == true))) {
      self.$inline_macro($scope.EmojiBlockMacro);
      return self.$docinfo_processor($scope.EmojiAssetsDocinfoProcessor);
      } else {
      return nil
    }}, TMP_1._s = self, TMP_1), $a).call($b);
})(Opal);