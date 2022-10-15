var teams =[{
    team_name :"Mamelodi Sundowns",
    province : "GP",
    age : 17,
    positions : ["CM","ST"],
    contacts : {
        phone: "011 789 4252",
        email: "sundowns@diski.co.za"
    }
},
{
    team_name :"Kaizer Chiefs",
    province : "GP",
    age : 17,
    positions : ["CM","ST"],
    contacts : {
        phone: "011 778 9252",
        email: "kaizer.chiefs@diski.co.za"
    }
},
{
    team_name :"Richards Bay",
    province : "EC",
    age : 19,
    positions : ["GK","ST"],
    contacts : {
        phone: "017 789 4252",
        email: "rbay@diski.co.za"
    }
},
{
    team_name :"Moroka Swallows",
    province : "MP",
    age : 17,
    positions : ["CM","ST"],
    contacts : {
        phone: "015 852 4252",
        email: "swallows@diski.co.za"
    }
},
{
    team_name :"Stellenbosch",
    province : "WC",
    age : 13,
    positions : ["CM","ST"],
    contacts : {
        phone: "012 789 8521",
        email: "stellenbosch@diski.co.za"
    }
},
{
    team_name :"Orlando Pirates",
    province : "LP",
    age : 17,
    positions : ["DF"],
    contacts : {
        phone: "013 125 4568",
        email: "orlandop@diski.co.za"
    }
},
{
    team_name :"Royal AM",
    province : "KZ",
    age : 15,
    positions : ["GK","DF","CM","ST"],
    contacts : {
        phone: "016 952 2485",
        email: "royalam@diski.co.za"
    }
}];



function searchTeam() {
    var filtered = teams;

    var date = document.getElementById("dob");
    if(date.value) {
        var dob = new Date(date.value);
        var age = new Date().getFullYear() - dob.getFullYear();

        filtered = filtered.filter(t => t.age >= age);
    }

    var province = document.getElementById("province"); 
    if(province.value) {
        filtered = filtered.filter(t => t.province == province.value);
    }

    var position = document.getElementById("position");
    if(position.value) {
        filtered = filtered.filter(t => t.positions.includes(position.value));
    }

    console.log(filtered);
    var html = "";
    filtered.forEach(t => {
        html += "<div class='card'>";
        html += "<div>";
        html += "<span>Team</span>";
        html += "<span>" + t.team_name + "</span>";
        html += "</div>";
        html += "<div>";
        html += "<span>Province</span>";
        html += "<span>" + t.province + "</span>";
        html += "</div>";
        html += "<div>";
        html += "<span>Phone</span>";
        html += "<span>" + t.contacts.phone + "</span>";
        html += "</div>";
        html += "<div>";
        html += "<span>Email</span>";
        html += "<span>" + t.contacts.email + "</span>";
        html += "</div>";
        html += "</div>";
    });

    document.getElementById("card").innerHTML = html;
    return filtered;
}