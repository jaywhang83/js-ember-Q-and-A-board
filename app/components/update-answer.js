import Ember from 'ember';

export default Ember.Component.extend({
  updateAnswerForm: false,
  actions: {
    updateAnswerForm() {
      this.set('updateAnswerForm', true);
    },

    update(answer) {
      var params = {
        author: this.get('author', {defaultValue: 'author'}),
        content: this.get('content', {defaultValue: 'content'}),
      };
      this.set('updateAnswerForm', false);
      this.sendAction('update', answer, params);
    },

    formHide() {
      this.set('updateAnswerForm', false);
    }
  }
});
