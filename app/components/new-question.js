import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,

  didInsertElement: function() {
    $('.tooltipped').tooltip({delay: 50});
  },

  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },

    saveQuestion() {
      var params = {
        title: this.get('title') ? this.get('title') : "",
        author: this.get('author') ? this.get('author') : "",
        notes: this.get('notes') ? this.get('notes') : "",
      };
      this.set('addNewQuestion', false);
      this.sendAction('saveQuestion', params);
    },

    formHide() {
      this.set('addNewQuestion', false);
    },
  }
});
