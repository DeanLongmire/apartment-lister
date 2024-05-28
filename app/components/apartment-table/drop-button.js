import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ApartmentTableDropButtonComponent extends Component {
  @service database;
  @service store;
  @service router;

  @action
  async drop() {
    let rowEntryName = this.args.entry;

    let record = this.store.peekRecord('apartment', rowEntryName);
    record.deleteRecord();

    await this.database.delete(rowEntryName).then(() => {
      window.location.reload();
    });
  }
}
