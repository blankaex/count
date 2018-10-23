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
		},
        view: function(id) {
            var e = document.getElementById(id)
            if(e.classList.contains("active")) {
                document.getElementById("home").style.display = ""
                document.getElementById("reset").style.display = "none"
                e.classList.remove("active")
                e.classList.remove("show")
            }
            else {
                document.getElementById("home").style.display = "none"
                document.getElementById("reset").style.display = "block"
                var counters = document.getElementsByClassName("tab-pane")
                for(i = 0; i < counters.length; i++) {
                    counters[i].classList.remove("active")
                    counters[i].classList.remove("show")
                }
                e.classList.add("active")
                e.classList.add("show")
            }
        }
  	}
})
