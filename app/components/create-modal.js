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
  async createApartment() {
    if (this.apartmentName) {
      this.args.close();
      await this.database.createApartment(this.apartmentName).then(() => {
        window.location.reload();
      });
    }
  }

  @action
  handleInput(event) {
    this.apartmentName = event.target.value;
  }
}
