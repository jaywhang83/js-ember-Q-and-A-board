import Ember from 'ember';

export default Ember.Component.extend({
  updateAnswerForm: false,
  actions: {
    updateAnswerForm() {
      this.set('updateAnswerForm', true);
    },

    update(answer) {
      var params = {
        author: this.get('author'),
        content: this.get('content'),
      };
      this.set('updateAnswerForm', false);
      this.sendAction('update', answer, params);
    },

    formHide() {
      this.set('updateAnswerForm', false);
    }
  }
});
