import Route from '@ember/routing/route';

export default class ApplicationRoute extends Route {
    async model() {
        const response = await fetch("/db.json");
        const data = await response.json()

        return data.apartments;
    }
}
