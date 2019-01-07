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
                else if(counters[i].id.includes('bayle'))
                    counters[i].innerText = 7
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
		},
        disp: function(id) {
            var curr = document.getElementById(id)
            var panes = document.getElementsByClassName("sub-pane")
            for(i = 0; i < panes.length; i++)
                if(panes[i] != curr)
                    panes[i].style.display = "none"
            curr.style.display = "block"
        }
  	}
})
