import Ember from 'ember';

export default Ember.Component.extend({
  upDateAnswerForm: false,

  actions: {
    // update(answer, params) {
    //   this.sendAction('update', answer, params);
    // },

    delete(answer) {
      if(confirm('Are you sure you want to delete this answer?')) {
        this.sendAction('destroyAnswer', answer);
      }
    },

    increaseRating(answer) {
      this.sendAction('increaseRating', answer);
    },

    decreaseRating(answer) {
      this.sendAction('decreaseRating', answer);
    }
  }
});
