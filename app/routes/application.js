import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class ApplicationRoute extends Route {
  @service database;
  @service store;

  async model() {
    const response = await this.database.get();
    let data = await response.json();

    data = data.slice().sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      } else if (a.name > b.name) {
        return 1;
      } else {
        return 0;
      }
    });

    data.forEach((item) => {
      this.store.createRecord('apartment', {
        id: item.name,
        name: item.name,
        rent: item.rent,
        numOfChecks: item.numOfChecks,
        washerDryer: item.washerDryer,
        twoBathrooms: item.twoBathrooms,
        connectedBathrooms: item.connectedBathrooms,
        porch: item.porch,
      });
    });

    return data;
  }
}
