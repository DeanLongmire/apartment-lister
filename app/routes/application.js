import Route from '@ember/routing/route';

export default class ApplicationRoute extends Route {
    data;

    async beforeModel() {
        this.data = (await fetch("/db.json")).json();
    }

    model() {
        return this.data;
    }
}
