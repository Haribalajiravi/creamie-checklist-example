
import Boot from './container-boot.js';

export default {
    template: `container-component.html`,
    style: `container-component.css`,
    tag: 'container-component',
    isShadowDom: false,
    shadowMode: 'open',
    binder: 'data',
    boot: Boot
}