import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ApartmentTableTableButtonsComponent extends Component {
  @service database;
  @tracked isPressed = this.args.value;

  @action
  pressed() {
    this.isPressed = !this.isPressed;
    
    let rowEntryName = this.args.entry;

    const body = {
      valueToUpdate: this.args.column,
      value: this.isPressed
    }

    this.database.update(body, rowEntryName);
  }
}
