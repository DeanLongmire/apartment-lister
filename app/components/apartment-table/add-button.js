import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ApartmentTableAddButtonComponent extends Component {
  @tracked createModalOpen = false;

  @action
  createModal() {
    this.createModalOpen = true;
  }

  @action
  closeModal() {
    this.createModalOpen = false;
  }
}
