/* 'Vue' components previously were 'globally' defined
Global components can be used on any page 
but local components are used on the page/object where they are defined
- 'let' statement is used to define local components 
*/

//Communication between child and parent components

/*
the below is a local component and can only be used inside component
where it is include
*/
let PlanPickerItemComponent =  {    //local component (not available everywhere)
	template: '#plan-picker-item-template',
	
	props:{			//This can contain multiple attributes
		//(name: type)
		name: {   // type can be an object which can contain more parameters
			type: String,
			required: true
		},
		selectedPlan: {
			type: String
		}  	 
	},

	computed: {
		isSelected() {
			return this.name === this.selectedPlan
		}
	},


	methods: {
		select() {
			//communication from child to parent using "custom events"
			//$emit(event_name, payload/data)
			this.$emit('select', this.name) 
		}
	}         
	  
}


//'let' is used to declare local variables see JS codes for reminder
let PlanPickerComponent =  {
	template: '#plan-picker-template',
	components: {  //used to register local components inside parent component
		//name: component
		'plan-picker-item': PlanPickerItemComponent  //Use double word name (naming conventions)
	},

	data () {  
		return {
		plans: ['The Single', 'The Curious', 'The Addict'],
		selectedPlan: null
		}
	},

	methods: {
		selectPlan(plan) {
			this.selectedPlan = plan
		}
	}
}


new Vue({
	el: '#app',
	components: {
		'plan-picker': PlanPickerComponent,
	},

})