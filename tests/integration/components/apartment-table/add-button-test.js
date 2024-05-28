import { module, test } from 'qunit';
import { setupRenderingTest } from 'apartment-lister/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module(
  'Integration | Component | apartment-table/add-button',
  function (hooks) {
    setupRenderingTest(hooks);

    test('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await render(hbs`<ApartmentTable::AddButton />`);

      assert.dom(this.element).hasText('');

      // Template block usage:
      await render(hbs`
      <ApartmentTable::AddButton>
        template block text
      </ApartmentTable::AddButton>
    `);

      assert.dom(this.element).hasText('template block text');
    });
  }
);
