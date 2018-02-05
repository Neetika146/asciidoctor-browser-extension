describe('Append a custom script', () => {
  it('should append before the content', (done) => {
    // Given
    const source = '= Hello world';
    spyOn(browser.storage.local, 'set').and.callFake(() => {
      // noop
    });
    spyOn(browser.storage.local, 'get').and.callFake((name, callback) => {
      const values = [];
      values[asciidoctor.browser.CUSTOM_ATTRIBUTES_KEY] = '';
      values[asciidoctor.browser.SAFE_MODE_KEY] = 'safe';
      values[asciidoctor.browser.JS_KEY] = 'bar';
      values[asciidoctor.browser.JS_LOAD_KEY] = 'before';
      values[asciidoctor.browser.CUSTOM_JS_PREFIX + 'bar'] = 'const bar = \'bar\';';
      callback(values);
    });
    // When
    asciidoctor.browser.update(source)
      .then(() => {
        // the custom script must be the first element in the <body>
        expect(document.body.children[0].innerText).toBe('const bar = \'bar\';');
        // the next element must be the content
        expect(document.body.children[1].id).toBe('content');
        done();
      });
  });

  it('should append after the content', (done) => {
    // Given
    const source = '= Hello world';
    spyOn(browser.storage.local, 'set').and.callFake(() => {
      // noop
    });
    spyOn(browser.storage.local, 'get').and.callFake((name, callback) => {
      const values = [];
      values[asciidoctor.browser.CUSTOM_ATTRIBUTES_KEY] = '';
      values[asciidoctor.browser.SAFE_MODE_KEY] = 'safe';
      values[asciidoctor.browser.JS_KEY] = 'foo';
      values[asciidoctor.browser.JS_LOAD_KEY] = 'after';
      values[asciidoctor.browser.CUSTOM_JS_PREFIX + 'foo'] = 'const foo = \'foo\';';
      callback(values);
    });
    // When
    asciidoctor.browser.update(source)
      .then(() => {
        // the content must be the first element in the <body>
        expect(document.body.children[0].id).toBe('content');
        // the custom script must be present in the <body>
        expect(Array.from(document.body.children).find(element => element.id === 'asciidoctor-custom-js').innerText).toBe('const foo = \'foo\';');
        done();
      });
  });
});