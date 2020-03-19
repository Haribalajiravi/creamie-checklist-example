
import Boot from './checklist-boot.js';

export default {
    template: `checklist-component.html`,
    style: `checklist-component.css`,
    tag: 'checklist-component',
    isShadowDom: false,
    shadowMode: 'open',
    binder: 'data',
    boot: Boot
}