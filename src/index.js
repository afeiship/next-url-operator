(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var nxHashlize = nx.hashlize || require('@jswork/next-hashlize');
  var nxParam = nx.param || require('@jswork/next-param');
  var isValidUrl = require('@jswork/is-valid-url').default;
  var NxObjectOperator = nx.ObjectOperator || require('@jswork/next-object-operator');
  var defaults = { type: 'browser' };

  var normalizeUrl = function (url) {
    if (!url) return '';
    return url.replace('#/', '');
  };

  var NxUrlOperator = nx.declare('nx.UrlOperator', {
    extends: NxObjectOperator,
    statics: {
      update: function (inObject, inUrl) {
        var url = normalizeUrl(inUrl || location.href);
        var instance = new this({ url: url });
        return instance.update(inObject);
      }
    },
    properties: {
      ishash: function () {
        return this.options.type === 'hash';
      },
      url: function () {
        return normalizeUrl(location.href);
      },
      optUrl: function () {
        return normalizeUrl(this.options.url);
      }
    },
    methods: {
      init: function (inOptions) {
        this.options = nx.mix(null, { url: this.url }, defaults, inOptions);
        this.params = nxHashlize(this.optUrl);
        this.$base.init.call(this, this.params);
      },
      update: function (inObject) {
        this.sets(inObject);
        var optUrl = this.optUrl;
        var valid = isValidUrl(optUrl);
        var url = valid ? new URL(optUrl) : optUrl.split('?')[0];
        var hashfix = this.ishash ? '/#' : '';
        var prefix = valid ? [url.origin, hashfix, url.pathname].join('') : url;
        var params = this.gets();
        return nxParam(params, prefix);
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxUrlOperator;
  }
})();
