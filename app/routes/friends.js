import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    delete: function(friend) {
      friend.destroyRecord();
      this.transitionToRoute('friends.index');
    }
  }
});
