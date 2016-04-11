import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionForm: false,

  didInsertElement: function() {
    $('.modal-trigger').leanModal();
  },

  actions: {
    updateQuestionForm() {
      this.set('updateQuestionForm', true);
    },

    update(question) {
      var params = {
        title: this.get('question.title'),
        author: this.get('question.author'),
        notes: this.get('question.notes'),
        date: new Date(),
      };
      this.set('updateQuestionForm', false);
      this.sendAction('update', question, params);
    },

    formHide() {
      this.set('updateQuestionForm', false);
    }
  }
});
