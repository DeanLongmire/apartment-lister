import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class CreateModalComponent extends Component {
    @tracked apartmentName = '';
    @service database;

    @action
    closeModal() {
        this.args.close();
    }

    @action
    createApartment() {
        if(this.apartmentName) {
            this.args.close();
            this.database.createApartment(this.apartmentName);
            window.location.reload();
        }
    }

    @action
    handleInput(event) {
        this.apartmentName = event.target.value;
    }
}
