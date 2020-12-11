import { shallowMount, createLocalVue } from '@vue/test-utils';
import App from '@/App.vue';

describe('App.vue', () => {
  let components;
  let wrapper;

  beforeAll(() => {
    const localVue = createLocalVue();

    components = {
      NavBar: jest.fn(),
      'router-view': jest.fn(),
    };

    wrapper = shallowMount(App, {
      components,
      localVue,
    });
  });

  it('Should match snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
