import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('committees-tile', 'Integration | Component | committees tile', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{committees-tile}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#committees-tile}}
      template block text
    {{/committees-tile}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
