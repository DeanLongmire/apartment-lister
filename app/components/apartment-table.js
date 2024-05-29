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
  @tracked washerDryerFilter = false;
  @tracked twoBathroomsFilter = false;
  @tracked connectedBathroomsFilter = false;
  @tracked porchFilter = false;
  @tracked rentFilter = false;
  @tracked nameFilter = true;

  constructor() {
    super(...arguments);
  }

  clearFilters() {
    this.washerDryerFilter = false;
    this.twoBathroomsFilter = false;
    this.connectedBathroomsFilter = false;
    this.porchFilter = false;
    this.rentFilter = false;
    this.nameFilter = false;
  }

  doSort() {
    if(!(this.twoBathroomsFilter || this.washerDryerFilter || this.connectedBathroomsFilter || this.porchFilter)) {
      this.sortByName();
      return;
    }

    this.apartments = this.apartments.slice().sort((a, b) => {
      let aCount = 0;
      let bCount = 0;

      if (a.washerDryer && this.washerDryerFilter) aCount++;
      if (a.twoBathrooms && this.twoBathroomsFilter) aCount++;
      if (a.connectedBathrooms && this.connectedBathroomsFilter) aCount++;
      if (a.porch && this.porchFilter) aCount++;

      if (b.washerDryer && this.washerDryerFilter) bCount++;
      if (b.twoBathrooms && this.twoBathroomsFilter) bCount++;
      if (b.connectedBathrooms && this.connectedBathroomsFilter) bCount++;
      if (b.porch && this.porchFilter) bCount++;

      if (aCount < bCount) {
        return 1;
      } else if (aCount > bCount) {
        return -1;
      } else {
        return 0;
      }
    });
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
    this.clearFilters();
    this.rentFilter = true;
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
    this.clearFilters();
    this.nameFilter = true;
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
  advancedSort(filter) {
    this.nameFilter = false;
    this.rentFilter = false;

    if (filter == 'wd') {
      this.washerDryerFilter = !this.washerDryerFilter;
    } else if (filter == 'tb') {
      this.twoBathroomsFilter = !this.twoBathroomsFilter;
    } else if (filter == 'cb') {
      this.connectedBathroomsFilter = !this.connectedBathroomsFilter;
    } else if (filter == 'p') {
      this.porchFilter = !this.porchFilter;
    }

    this.doSort();
  }
}
