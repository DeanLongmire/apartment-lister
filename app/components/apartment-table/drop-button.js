import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ApartmentTableDropButtonComponent extends Component {
  @service database;
  @service store;
  @service router;

  @action
  drop() {
    let rowEntryName = this.args.entry;

    this.database.delete(rowEntryName);
    let record = this.store.peekRecord('apartment', rowEntryName);
    record.deleteRecord();

    window.location.reload();
  }
}
