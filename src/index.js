import * as components from './components';

const defaultComponents = components?.default;
const vueCombonents = {
  install(Vue) {
    Object.keys(defaultComponents).forEach(name => {
      Vue.component(name, defaultComponents[name]);
    });
  },
}
export default vueCombonents;

export { SButton } from "./components/Button";
export { SCard } from "./components/Card";
export { SShape } from "./components/Shape";
