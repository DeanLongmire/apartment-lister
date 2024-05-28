import Component from '@glimmer/component';
import { A } from '@ember/array';
import { tracked } from '@glimmer/tracking';

export default class ApartmentTableComponent extends Component {
    @tracked apartments = A(this.args.model);

    constructor() {
      super(...arguments);
    }
}
