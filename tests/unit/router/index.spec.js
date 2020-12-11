import router from '@/router';

describe('router/index.js', () => {
  it('Should have router Home', () => {
    expect(router.options.routes[0].path).toEqual('/');
    expect(router.options.routes[0].name).toEqual('Home');
  });
});
