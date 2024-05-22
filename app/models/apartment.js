import Model, { attr } from '@ember-data/model';

export default class ApartmentModel extends Model {
  @attr('string') name;
  @attr('number') rent;
  @attr('boolean') washerDryer;
  @attr('boolean') twoBathrooms;
  @attr('boolean') connectedBathrooms;
  @attr('boolean') porch;
}