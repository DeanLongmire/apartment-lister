import { module, test } from 'qunit';
import { setupRenderingTest } from 'apartment-lister/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module(
  'Integration | Component | apartment-table/sort-button',
  function (hooks) {
    setupRenderingTest(hooks);

    test('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await render(hbs`<ApartmentTable::SortButton />`);

      assert.dom(this.element).hasText('');

      // Template block usage:
      await render(hbs`
      <ApartmentTable::SortButton>
        template block text
      </ApartmentTable::SortButton>
    `);

      assert.dom(this.element).hasText('template block text');
    });
  }
);
