var app = new Vue({
    el: '#app',
    data: {
        title: 'Count'
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
                if(counters[i].id.includes('lishena'))
                    counters[i].innerText = 10
                else
                    counters[i].innerText = 0
		}
  	}
})
