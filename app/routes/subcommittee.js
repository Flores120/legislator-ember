import config from '../config/environment';
import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    console.log("Key params" + params.committee_id);
    var key = config.myApiKey;
     var url =  'http://congress.api.sunlightfoundation.com/committees?subcommittee=true&parent_committee_id='+ params.committee_id +'&apikey=' +key;
    return Ember.$.getJSON(url).then(function(responseJSON) {
     console.log(responseJSON.results);
     console.log('TEST!');
     return responseJSON.results;
   });
  }
});
