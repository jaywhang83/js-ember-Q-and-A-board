import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: true,

  didInsertElement: function() {
    $('.modal-trigger').leanModal();
  },

    // didInsertElement: function() {
    //   $('.tooltipped').tooltip({delay: 50});
    // },

    actions: {
      answerFormShow() {
        this.set('addNewAnswer', true);
      },

      saveAnswer() {
        var params ={
          author: this.get('author'),
          content: this.get('content'),
          question: this.get('question')
        };
        this.set('addNewAnswer', false);
        this.sendAction('saveAnswer', params);
      },

      formHide() {
        this.set('addNewAnswer', false);
      },

    }
});
