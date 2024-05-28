import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ApartmentTableTableButtonsComponent extends Component {
  @service database;
  @tracked isPressed = this.args.value;

  @service store;

  async calculateCheckCount(rowEntryName) {
    let apartmentUpdating = await this.store.peekRecord(
      'apartment',
      rowEntryName
    );

    if (this.isPressed == true) {
      apartmentUpdating.numOfChecks = apartmentUpdating.numOfChecks + 1;
      return apartmentUpdating.numOfChecks;
    } else {
      apartmentUpdating.numOfChecks = apartmentUpdating.numOfChecks - 1;
      return apartmentUpdating.numOfChecks;
    }
  }

  @action
  async pressed() {
    this.isPressed = !this.isPressed;

    let rowEntryName = this.args.entry;
    const checkCount = await this.calculateCheckCount(rowEntryName);

    let apartment = this.args.model.findBy('name', rowEntryName);
    apartment[this.args.column] = this.isPressed;
    apartment.numOfChecks = checkCount;

    const body = {
      valueToUpdate: this.args.column,
      value: this.isPressed,
      numOfChecks: checkCount,
    };

    this.database.update(body, rowEntryName);
  }
}
