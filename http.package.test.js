describe('@haensl/http', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  describe('import via full uri', () => {
    const http = require('@haensl/http');

    it('exposes post method', () => {
      expect(http.methods.post)
      .toEqual('post');
    });

    it('exposes content type header', () => {
      expect(http.headers.contentType)
        .toEqual('Content-Type');
    });

    it('exposes status code: not found', () => {
      expect(http.statusCodes.notFound)
        .toEqual(404);
    });

    it('exposes status code: ok', () => {
      expect(http.statusCodes.ok)
        .toEqual(200);
    });
  });

  describe('spread import', () => {
    const { methods }  = require('@haensl/http');

    it('exposes delete method', () => {
      expect(methods.delete)
        .toEqual('delete');
    });
  });
});
