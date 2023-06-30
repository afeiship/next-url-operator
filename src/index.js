import nx from '@jswork/next';
import isValidUrl from '@jswork/is-valid-url';
import '@jswork/next-object-operator';
import '@jswork/next-qs';
import '@jswork/next-param';

const defaults = { type: 'browser' };
const normalizeURL = function (url) {
  if (!url) return '';
  return url.replace('#/', '');
};

const NxUrlOperator = nx.declare('nx.UrlOperator', {
  extends: nx.ObjectOperator,
  statics: {
    update: function (inObject, inUrl) {
      var url = normalizeURL(inUrl || location.href);
      var instance = new this({ url: url });
      return instance.update(inObject);
    }
  },
  properties: {
    ishash: function () {
      return this.options.type === 'hash';
    },
    url: function () {
      return normalizeURL(location.href);
    },
    optUrl: function () {
      return normalizeURL(this.options.url);
    }
  },
  methods: {
    init: function (inOptions) {
      this.options = nx.mix(null, { url: this.url }, defaults, inOptions);
      this.params = nx.qs(this.optUrl);
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
      return nx.param(params, prefix);
    }
  }
});

if (typeof module !== 'undefined' && module.exports && typeof wx === 'undefined') {
  module.exports = NxUrlOperator;
}

export default NxUrlOperator;
