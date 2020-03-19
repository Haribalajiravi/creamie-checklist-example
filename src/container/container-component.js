import Creamie from 'creamie';
import ContainerConfig from './container-config';
import Checklist from './../checklist/checklist-component';
export default class Container extends Creamie {
    constructor() {
        super(ContainerConfig);
        this.initEvents();
    }

    initEvents() {
        let containerRef = this;
        this.events.init({
            addChecklist: (e) => {
                // prevent submit refresh functionality
                e.preventDefault();
                if (containerRef.data.checklist.length) {
                    let checklist = new Checklist(containerRef.data.checklist);
                    document.getElementById('checklistPanel').appendChild(checklist);
                    containerRef.data.checklist = '';
                }
            }
        })
    }
}
window.customElements.define(ContainerConfig.tag, Container);