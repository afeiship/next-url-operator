(function () {
  const NxUrlOperator = require('../src');

  describe('01.NxUrlOperator.methods: url type: browser', function () {
    test('operator should set/get/sets/gets curd method', function () {
      var operator = new NxUrlOperator({
        url: 'https://www.abc.com/content/course?course=9c9dabbf02a0e96fa8a8431c3029188d&targetCatalogUuid=ddb1a29e469246c3ffc7f6da8ca7d9a5&bizType=courseTask&businessConfigUuid=HOMEWORK&targetTaskUuid=8a1e58c6f8de6b9623fab069fd68fd79&subject=english'
      });

      // 1. gets
      expect(operator.gets()).toEqual({
        course: '9c9dabbf02a0e96fa8a8431c3029188d',
        targetCatalogUuid: 'ddb1a29e469246c3ffc7f6da8ca7d9a5',
        bizType: 'courseTask',
        businessConfigUuid: 'HOMEWORK',
        targetTaskUuid: '8a1e58c6f8de6b9623fab069fd68fd79',
        subject: 'english'
      });

      // 2. get
      expect(operator.get('bizType')).toBe('courseTask');
      operator.set('bizType', 'ABC_TYPE');
      // 3. set
      expect(operator.get('bizType')).toBe('ABC_TYPE');

      // 4. sets
      operator.sets({
        course: '111',
        targetCatalogUuid: '222',
        bizType: '333',
        targetTaskUuid: '444',
        subject: '555'
      });

      expect(operator.gets()).toEqual({
        course: '111',
        targetCatalogUuid: '222',
        bizType: '333',
        businessConfigUuid: 'HOMEWORK',
        targetTaskUuid: '444',
        subject: '555'
      });
    });

    test('operator should get object params', function () {
      var operator = new NxUrlOperator({
        url: 'https://www.abc.com/content/course?course=9c9dabbf02a0e96fa8a8431c3029188d&targetCatalogUuid=ddb1a29e469246c3ffc7f6da8ca7d9a5&bizType=courseTask&businessConfigUuid=HOMEWORK&targetTaskUuid=8a1e58c6f8de6b9623fab069fd68fd79&subject=english'
      });

      expect(operator.params).toEqual({
        course: '9c9dabbf02a0e96fa8a8431c3029188d',
        targetCatalogUuid: 'ddb1a29e469246c3ffc7f6da8ca7d9a5',
        bizType: 'courseTask',
        businessConfigUuid: 'HOMEWORK',
        targetTaskUuid: '8a1e58c6f8de6b9623fab069fd68fd79',
        subject: 'english'
      });

      expect(operator.update({ course: 111 })).toBe(
        'https://www.abc.com/content/course?course=111&targetCatalogUuid=ddb1a29e469246c3ffc7f6da8ca7d9a5&bizType=courseTask&businessConfigUuid=HOMEWORK&targetTaskUuid=8a1e58c6f8de6b9623fab069fd68fd79&subject=english'
      );
    });

    test('operator should update params & get the url', function () {
      var operator = new NxUrlOperator({
        url: 'https://www.abc.com/content/course?course=9c9dabbf02a0e96fa8a8431c3029188d&targetCatalogUuid=ddb1a29e469246c3ffc7f6da8ca7d9a5&bizType=courseTask&businessConfigUuid=HOMEWORK&targetTaskUuid=8a1e58c6f8de6b9623fab069fd68fd79&subject=english'
      });

      expect(operator.update({ course: 111 })).toBe(
        'https://www.abc.com/content/course?course=111&targetCatalogUuid=ddb1a29e469246c3ffc7f6da8ca7d9a5&bizType=courseTask&businessConfigUuid=HOMEWORK&targetTaskUuid=8a1e58c6f8de6b9623fab069fd68fd79&subject=english'
      );
    });

    test('relaitve url', () => {
      var url =
        '/course?course=9c9dabbf02a0e96fa8a8431c3029188d&targetCatalogUuid=ddb1a29e469246c3ffc7f6da8ca7d9a5&bizType=courseTask&businessConfigUuid=HOMEWORK&targetTaskUuid=8a1e58c6f8de6b9623fab069fd68fd79&subject=english';

      expect(NxUrlOperator.update({ course: 111 }, url)).toBe(
        '/course?course=111&targetCatalogUuid=ddb1a29e469246c3ffc7f6da8ca7d9a5&bizType=courseTask&businessConfigUuid=HOMEWORK&targetTaskUuid=8a1e58c6f8de6b9623fab069fd68fd79&subject=english'
      );
    });
  });

  describe('02/NxUrlOperator.methods: url type: hash', function () {
    test('operator should set/get/sets/gets curd method', function () {
      var operator = new NxUrlOperator({
        type: 'hash',
        url: 'https://www.abc.com/#/content/course?course=9c9dabbf02a0e96fa8a8431c3029188d&targetCatalogUuid=ddb1a29e469246c3ffc7f6da8ca7d9a5&bizType=courseTask&businessConfigUuid=HOMEWORK&targetTaskUuid=8a1e58c6f8de6b9623fab069fd68fd79&subject=english'
      });

      // 1. gets
      expect(operator.gets()).toEqual({
        course: '9c9dabbf02a0e96fa8a8431c3029188d',
        targetCatalogUuid: 'ddb1a29e469246c3ffc7f6da8ca7d9a5',
        bizType: 'courseTask',
        businessConfigUuid: 'HOMEWORK',
        targetTaskUuid: '8a1e58c6f8de6b9623fab069fd68fd79',
        subject: 'english'
      });

      // 2. get
      expect(operator.get('bizType')).toBe('courseTask');
      operator.set('bizType', 'ABC_TYPE');
      // 3. set
      expect(operator.get('bizType')).toBe('ABC_TYPE');

      // 4. sets
      operator.sets({
        course: '111',
        targetCatalogUuid: '222',
        bizType: '333',
        targetTaskUuid: '444',
        subject: '555'
      });

      expect(operator.gets()).toEqual({
        course: '111',
        targetCatalogUuid: '222',
        bizType: '333',
        businessConfigUuid: 'HOMEWORK',
        targetTaskUuid: '444',
        subject: '555'
      });
    });

    test('operator should get object params', function () {
      var operator = new NxUrlOperator({
        type: 'hash',
        url: 'https://www.abc.com/#/content/course?course=9c9dabbf02a0e96fa8a8431c3029188d&targetCatalogUuid=ddb1a29e469246c3ffc7f6da8ca7d9a5&bizType=courseTask&businessConfigUuid=HOMEWORK&targetTaskUuid=8a1e58c6f8de6b9623fab069fd68fd79&subject=english'
      });

      expect(operator.params).toEqual({
        course: '9c9dabbf02a0e96fa8a8431c3029188d',
        targetCatalogUuid: 'ddb1a29e469246c3ffc7f6da8ca7d9a5',
        bizType: 'courseTask',
        businessConfigUuid: 'HOMEWORK',
        targetTaskUuid: '8a1e58c6f8de6b9623fab069fd68fd79',
        subject: 'english'
      });

      expect(operator.update({ course: 111 })).toBe(
        'https://www.abc.com/#/content/course?course=111&targetCatalogUuid=ddb1a29e469246c3ffc7f6da8ca7d9a5&bizType=courseTask&businessConfigUuid=HOMEWORK&targetTaskUuid=8a1e58c6f8de6b9623fab069fd68fd79&subject=english'
      );
    });

    test('operator should update params & get the url', function () {
      var operator = new NxUrlOperator({
        type: 'hash',
        url: 'https://www.abc.com/#/content/course?course=9c9dabbf02a0e96fa8a8431c3029188d&targetCatalogUuid=ddb1a29e469246c3ffc7f6da8ca7d9a5&bizType=courseTask&businessConfigUuid=HOMEWORK&targetTaskUuid=8a1e58c6f8de6b9623fab069fd68fd79&subject=english'
      });

      expect(operator.update({ course: 111 })).toBe(
        'https://www.abc.com/#/content/course?course=111&targetCatalogUuid=ddb1a29e469246c3ffc7f6da8ca7d9a5&bizType=courseTask&businessConfigUuid=HOMEWORK&targetTaskUuid=8a1e58c6f8de6b9623fab069fd68fd79&subject=english'
      );
    });
  });
})();
