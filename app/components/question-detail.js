import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement: function() {
    $('.tooltipped').tooltip({delay: 50});
  },

  actions: {
    delete(question) {
      if(confirm('Are you sure you want to delete this rental?')) {
        this.sendAction('destroyQuestion', question);
      }
    }
  }
});
