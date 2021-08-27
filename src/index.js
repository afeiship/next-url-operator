(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var nxHashlize = nx.hashlize || require('@jswork/next-hashlize');
  var nxParam = nx.param || require('@jswork/next-param');
  var isValidUrl = require('@jswork/is-valid-url').default;
  var NxObjectOperator = nx.ObjectOperator || require('@jswork/next-object-operator');
  var defaults = { type: 'browser' };

  var NxUrlOperator = nx.declare('nx.UrlOperator', {
    extends: NxObjectOperator,
    statics: {
      update: function (inObject, inUrl) {
        var url = inUrl || location.href;
        var instance = new this({ url: url });
        return instance.update(inObject);
      }
    },
    properties: {
      url: function () {
        return location.href;
      }
    },
    methods: {
      init: function (inOptions) {
        this.options = nx.mix(null, { url: this.url }, defaults, inOptions);
        this.params = nxHashlize(this.options.url);
        this.$base.init.call(this, this.params);
      },
      update: function (inObject) {
        this.sets(inObject);
        var optUrl = this.options.url;
        var valid = isValidUrl(optUrl);
        var url = valid ? new URL(this.options.url) : optUrl.split('?')[0];
        var prefix = valid ? [url.origin, url.port, url.pathname].join('') : url;
        var params = this.gets();
        return nxParam(params, prefix);
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxUrlOperator;
  }
})();
