var app = new Vue({
    el: '#app',
    data: {
        message: 'Count'
    },
	methods: {
		inc: function(id) {
            document.getElementById(id).innerText++
		},
		dec: function(id) {
            if(document.getElementById(id).innerText > 0)
                document.getElementById(id).innerText--
		},
		reset: function() {
            var counters = document.getElementsByClassName("counter")
            for(i = 0; i < counters.length; i++)
                counters[i].innerText = 0
		}
  	}
})
