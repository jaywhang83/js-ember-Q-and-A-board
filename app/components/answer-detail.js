import Ember from 'ember';

export default Ember.Component.extend({
  favoriteList: Ember.inject.service(),

  actions: {
    delete(answer) {
      if(confirm('Are you sure you want to delete this answer?')) {
        this.sendAction('destroyAnswer', answer);
      }
    },

    addToFavorite(favorite) {
      this.get('favoriteList').add(favorite);
    },

    increaseRating(answer) {
      this.sendAction('increaseRating', answer);
    },

    decreaseRating(answer) {
      this.sendAction('decreaseRating', answer);
    }
  }
});
