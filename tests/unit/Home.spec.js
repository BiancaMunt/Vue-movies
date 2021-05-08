import { shallowMount } from '@vue/test-utils';
import Home from "@/views/Home.vue";
import Search from "@/components/Search.vue";
import Shows from "@/components/Search.vue";

const wrapper = shallowMount(Home);

describe('Home view Testing', () => {
  it("should render Search component", () => {
  expect(wrapper.findComponent(Search).exists()).toBe(true)
  });

  it("should render Shows component", () => {
    expect(wrapper.findComponent(Shows).exists()).toBe(true)
  });
});
