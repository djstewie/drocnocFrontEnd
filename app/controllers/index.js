import Ember from 'ember';

export default Ember.Controller.extend({
	actions : {
		create () {
			
			if(this.get('phonenumber') == null || this.get('phonenumber') == ""){
				$('#result').html("wdwedwd")
				$('#hellobar-bar').fadeIn(1000).delay(3000).fadeOut()
			}

			else{
				this.server.post('/api/subscriptions', {

					phone : this.get('phonenumber')

				}).then(res => {
					this.set('phonenumber', '');


				 // alert('Yayy!')
				 $('#result').html("Thank you for subscribing to Drocnoc")
				 $('#hellobar-bar').fadeIn(1000).delay(3000).fadeOut()
				 
				}).fail(err => console.log(err));
			}
			
		}
	}
});
