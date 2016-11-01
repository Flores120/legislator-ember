import config from '../config/environment';
import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    var key = config.myApiKey;
    var url = 'http://congress.api.sunlightfoundation.com/legislators/locate?apikey=' +key+ '&zip=' +params.zip;
    var url2 = 'http://congress.api.sunlightfoundation.com/committees?apikey=' +key;

    return Ember.RSVP.hash({
      legislators: Ember.$.getJSON(url).then(function(responseJSON) {
        console.log(responseJSON.results);
        return responseJSON.results;
      }),
      committees: Ember.$.getJSON(url2).then(function(responseJSON) {
        console.log(responseJSON.results);
        return responseJSON.results;
      })
    });
  }
});
