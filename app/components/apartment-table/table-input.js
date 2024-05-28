import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ApartmentTableTableInputComponent extends Component {
  @service database;
  @tracked value = this.args.value;

  @action
  handleInput(event) {
    this.value = event.target.value;
  }

  @action
  update() {
    let rowEntryName = this.args.entry;

    let apartment = this.args.model.findBy('name', rowEntryName);
    apartment[this.args.column] = this.value;

    const body = {
      valueToUpdate: this.args.column,
      value: this.value,
    };

    this.database.update(body, rowEntryName);
  }
}
