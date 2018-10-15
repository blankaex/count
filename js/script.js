var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    },
	methods: {
		showView: function(id) {
            console.log(id)
            var leaders = ["elf", "royal", "witch", "dragon", "necromancer", "vampire", "bishop", "nemesis"]

            for(i = 0; i < leaders.length; i++)
                if(leaders[i] != id)
                    document.getElementById(leaders[i]).style.display = "none"

            if(document.getElementById(id).style.display === "none")
            {
                document.getElementById(id).style.display = "block"
                document.getElementById("home").style.display = "none"
            }
            else
            {
                document.getElementById(id).style.display = "none"
                document.getElementById("home").style.display = "block"
            }
		}
  	}
})
