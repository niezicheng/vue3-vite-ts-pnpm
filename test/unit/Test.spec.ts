import { mount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';

describe('Welcome Component Test', () => {
  const wrapper = mount(HelloWorld, {
    props: { msg: 'Hello Test!' }
  });

  it('load component', () => {
    const html = wrapper.text();
    console.log(html);
    expect(html).toContain('Hello Test!');
  });
});
