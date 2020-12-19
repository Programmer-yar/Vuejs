//Below 'components' are global
Vue.component('plan', {
	template: '#plan-template',
	//"props" define attributes to be accepted by the element (see Notes p#1)
	//can also be defined using an array but below practice is best
	props:{				//This can contain multiple attributes
		//(name: type)
		name: {   // type can be an object which can contain more parameters
			type: String,
			required: true
		} ,  
		price: {        
			type:Number,
			default: 10,
		} 
	}
	         
	/* 'data()' here is not an object here as it is below in Vue instance
	data is a  function which must return an object
	*/	
})


Vue.component('plan-picker', {
	template: '#plan-picker-template',
	data () {  //Having plans here makes the component independant of instance
		return {   //'plans' array from here are used by 'plan-picker' component
		plans:['The Single', 'The Curious', 'The Addict']	
		}
	}
})


new Vue({
	el: '#app',
	data: {    //'plans' array from here are used by 'plan' component
		plans:['The Single', 'The Curious', 'The Addict']
	}
})