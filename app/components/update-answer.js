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
        author: this.get('author'),
        content: this.get('content')
      };
      this.set('updateAnswerForm', false);
      this.sendAction('update', answer, params);
    },

    formHide() {
      this.set('updateAnswerForm', false);
    }
  }
});
