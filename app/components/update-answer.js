import Ember from 'ember';

export default Ember.Component.extend({
  updateAnswerForm: false,

  didInsertElement: function() {
    $('.tooltipped').tooltip({delay: 50});
  },

  actions: {
    updateAnswerForm() {
      this.set('updateAnswerForm', true);
    },

    update(answer) {
      var params = {
        author: this.get('answer.author'),
        content: this.get('answer.content'),
        date: new Date()
      };
      this.set('updateAnswerForm', false);
      this.sendAction('update', answer, params);
    },

    formHide() {
      this.set('updateAnswerForm', false);
    }
  }
});
