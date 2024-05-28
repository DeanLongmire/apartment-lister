import Component from '@glimmer/component';
import { A } from '@ember/array';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ApartmentTableComponent extends Component {
    @tracked apartments = A(this.args.model);

    constructor() {
      super(...arguments);
    }

    @action
    sortByRent() {
      this.apartments = this.apartments.slice().sort((a, b) => {
        if(a.rent == '') {
            return 1;
        } else if(b.rent == '') {
            return -1;
        }  

        if (a.rent < b.rent) {
          return -1;
        } else if (a.rent > b.rent) {
          return 1;
        } else {
          return 0;
        }
      });
    }

    @action
    sortByName() {
      this.apartments = this.apartments.slice().sort((a, b) => {
        if(a.name == '') {
            return 1;
        } else if(b.name == '') {
            return -1;
        }  

        if (a.name < b.name) {
          return -1;
        } else if (a.name > b.name) {
          return 1;
        } else {
          return 0;
        }
      });
    }
}
