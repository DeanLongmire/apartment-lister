import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ApartmentTableTableButtonsComponent extends Component {
  @tracked isPressed = this.args.value;

  @action
  pressed() {
    console.log(this.isPressed);
    this.isPressed = !this.isPressed;
  }
}
