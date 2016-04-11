import Ember from 'ember';

export default Ember.Route.extend({
  displayFavorite: true,

  model() {
    return Ember.RSVP.hash({
      questions: this.store.findAll('question'),
      answers: this.store.findAll('answer')
    });
  },

  didInsertElement: function() {
    $('.modal-trigger').leanModal();
  },

  actions: {
    saveQuestion(params) {
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
      this.transitionTo('index');
    },

    // showFavorite() {
    //   this.set('displayFavorite', true);
    // },
  }
});
