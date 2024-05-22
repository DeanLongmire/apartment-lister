import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class ApplicationRoute extends Route {
  @service database;
  @service store;

  async model() {
    const response = await this.database.get();
    const data = await response.json();

    data.forEach(item => {
      this.store.createRecord('apartment', {
        id: item.name,
        name: item.name,
        rent: item.rent,
        washerDryer: item.washerDryer,
        twoBathrooms: item.twoBathrooms,
        connectedBathrooms: item.connectedBathrooms,
        porch: item.porch
      });
    });

    return data;
  }
}
