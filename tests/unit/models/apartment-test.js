import { module, test } from 'qunit';

import { setupTest } from 'apartment-lister/tests/helpers';

module('Unit | Model | apartment', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('apartment', {});
    assert.ok(model);
  });
});
