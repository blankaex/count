var app = new Vue({
    el: '#app',
    data: {
        message: 'Count'
    },
	methods: {
		showView: function(id) {
            var leaders = ["elf", "royal", "witch", "dragon", "necromancer", "vampire", "bishop", "nemesis"]

            for(i = 0; i < leaders.length; i++)
                if(leaders[i] != id)
                    document.getElementById(leaders[i]).style.display = "none"

            if(document.getElementById(id).style.display === "none")
            {
                document.getElementById(id).style.display = "flex"
                document.getElementById("home").style.display = "none"
                document.getElementById("reset").style.display = "block"
            }
            else
            {
                document.getElementById(id).style.display = "none"
                document.getElementById("home").style.display = "block"
                document.getElementById("reset").style.display = "none"
            }
		},
		inc: function(id) {
            document.getElementById(id).innerText++
		},
		dec: function(id) {
            if(document.getElementById(id).innerText > 0)
                document.getElementById(id).innerText--
		},
		reset: function() {
            console.log("hi")
            var counters = document.getElementsByClassName("counter")
            for(i = 0; i < counters.length; i++)
            {
                counters[i].innerText = 0
            }
		}
  	}
})
