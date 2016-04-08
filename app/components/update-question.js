import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionForm: false,
  actions: {
    updateQuestionForm() {
      this.set('updateQuestionForm', true);
    },

    update(question) {
      var params = {
        title: this.get('title', {defaultValue: 'title'}),
        author: this.get('author', {defaultValue: 'author'}),
        notes: this.get('notes', {defaultValue: 'notes'}),
      };
      this.set('updateQuestionForm', false);
      this.sendAction('update', question, params);
    },

    formHide() {
      this.set('updateQuestionForm', false);
    }
  }
});
