/* Creating a new view component by "Vue.component" syntax
- It is a function which accepts 2 arguments: 
  1) Component name
  2)object with options (same option object that we used when we
    define the vue instance)
- components are made to be reusable
*/

Vue.component('click-counter', {
	/*1st method:
	template:'<button @click=count++ >{{ count }}</button>'
	*/
	//the template can be defined in 'index.html' under '<script>'
	//see index.html for the 2nd method
	// template should contain exactly 1 root element
	template: '#click-counter-template', //from 'index.html'
	/* 'data()' here is not an object here as it was in
	 Vue Fundamentals > "index (V1).html"
	Here data is a function which must return an object
	*/
	data() {
		return {
			count: 0
		}
	}
})


new Vue({
	el: '#app'
})