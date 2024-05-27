import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class CreateModalComponent extends Component {
    @action
    closeModal() {
        this.args.close();
    }
}
