import { module, test } from 'qunit';
import { setupTest } from 'apartment-lister/tests/helpers';

module('Unit | Service | database', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:database');
    assert.ok(service);
  });
});
