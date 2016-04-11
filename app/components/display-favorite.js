import Ember from 'ember';

export default Ember.Component.extend({
  favoriteList: Ember.inject.service(),

  // didInsertElement: function() {
  //   this.$('.collapsible').collapsible({
  //     accordion: true
  //   });
  // },

  didInsertElement: function() {
    this.$('.carousel').carousel();
  },
});
