const http = require('./');

describe('@haensl/http', () => {
  it('contains status code "ok"', () => {
    expect(http.statusCodes.ok)
      .toEqual(200);
  });

  it('contains method "patch"', () => {
    expect(http.methods.patch)
      .toEqual('patch');
  });

  it('contains header "authorization"', () => {
    expect(http.headers.authorization)
      .toEqual('Authorization');
  });

  it('contains header "forwarded authorization"', () => {
    expect(http.headers.forwardedAuthorization)
      .toEqual('X-Forwarded-Authorization');
  });
});
