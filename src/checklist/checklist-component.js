import Creamie from 'creamie';
import ChecklistConfig from './checklist-config';
export default class Checklist extends Creamie {
    // Pass checklist through object initialization
    constructor(checklistContent) { 
        super(ChecklistConfig);
        // Set content in 'checklist' binder
        this.data.checklistContent = checklistContent;
        // Init events
        this.events.init({
            check: () => {
                // get current dom access through 'this'
                this.style.textDecoration = 'line-through';
            }
        })
    }
}
window.customElements.define(ChecklistConfig.tag, Checklist);