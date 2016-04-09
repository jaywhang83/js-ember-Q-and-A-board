import Ember from 'ember';

export default Ember.Component.extend({
  favoriteList: Ember.inject.service(),

  actions: {
    pressed: function() {
      this.$('.collapsible').collapsible({
        accordion: true
      });
    }
  }
});
