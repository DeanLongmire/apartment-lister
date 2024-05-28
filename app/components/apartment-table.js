import Component from '@glimmer/component';
import { A } from '@ember/array';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ApartmentTableComponent extends Component {
  @service store;

  @tracked apartments = A(this.args.model);
  @tracked cardIsOpen = false;
  @tracked selectedApartment = '';

  constructor() {
    super(...arguments);
  }

  @action
  closeCard() {
    this.cardIsOpen = false;
  }

  @action
  openApartmentCard(apartment) {
    this.cardIsOpen = true;
    this.selectedApartment = apartment;
  }

  @action
  sortByRent() {
    this.apartments = this.apartments.slice().sort((a, b) => {
      if (a.rent == '') {
        return 1;
      } else if (b.rent == '') {
        return -1;
      }

      const rentA = parseFloat(a.rent);
      const rentB = parseFloat(b.rent);

      if (rentA < rentB) {
        return -1;
      } else if (rentA > rentB) {
        return 1;
      } else {
        return 0;
      }
    });
  }

  @action
  sortByName() {
    this.apartments = this.apartments.slice().sort((a, b) => {
      if (a.name == '') {
        return 1;
      } else if (b.name == '') {
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

  @action
  sortByChecks() {
    this.apartments = A(this.args.model);

    this.apartments = this.apartments.slice().sort((a, b) => {
      if (a.numOfChecks == '') {
        return 1;
      } else if (b.numOfChecks == '') {
        return -1;
      }

      if (a.numOfChecks < b.numOfChecks) {
        return 1;
      } else if (a.numOfChecks > b.numOfChecks) {
        return -1;
      } else {
        return 0;
      }
    });
  }
}
