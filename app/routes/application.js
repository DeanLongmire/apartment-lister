import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ApplicationRoute extends Route {
  @service database;

  async model() {
    const response = await this.database.get();
    const data = await response.json();

    console.log(data);

    return data;
  }
}
