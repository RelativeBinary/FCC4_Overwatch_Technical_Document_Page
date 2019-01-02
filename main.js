//for each role section the lists will be generated based from objects with ajax
//there will be role object > role-offensive > role-defensive > role-etc > role-heros >role-heros-heroname
//bunch of switch statements which will allocate information e.g
//if role = tanks then for tanks.offensive do x, for tanks.defensive do x, for tanks.etc do x
// for tanks.heros.length() get tanks.heros[i] = currHero for currHero do x

/* list-item */
function Drop(value) {
    console.log(value);
    switch (value) {
        case 0:
            var drop = document.getElementById("tank-drop");
            if (drop.style.display == "list-item") {
                drop.style.display = "none";
            } else {
                drop.style.display = "list-item";
            }
            break;
        case 1:
            var drop = document.getElementById("dps-drop");
            if (drop.style.display == "list-item") {
                drop.style.display = "none";
            } else {
                drop.style.display = "list-item";
            }
            break;
        case 2:
            var drop = document.getElementById("sup-drop");
            if (drop.style.display == "list-item") {
                drop.style.display = "none";
            } else {
                drop.style.display = "list-item";
            }
            break;
    }
}

//Objects
var tanks = [];
console.log("created tanks var");
tanks.push({
    id: "001",
    name: "D.VA",
    type: "tank",
    intro: "D.Va’s mech is nimble and powerful—its twin Fusion Cannons blast away with autofire at short range, and she can use its Boosters to barrel over enemies and obstacles, or deflect attacks with her projectile-dismantling Defense Matrix.",
    abilities: [
        { "ab-id": "001", "ab-name": "defense matrix", "ab-desc": "does things" }
    ]
});
console.log("added D.VA");
tanks.push({
    id: "002",
    name: "Orisa",
    type: "tank",
    intro: "Orisa serves as the central anchor of her team, and defends her teammates from the frontline with a protective barrier. She can attack from long range, fortify her own defenses, launch graviton charges to slow and move enemies, and deploy a Supercharger to boost the damage output of multiple allies at once.",
    abilities: [{ "ab-id": "001", "ab-name": "n/a", "ab-desc": "does things" }]
});
console.log("added Orisa");
//When each array is loaded serveral things will happen
//1. the name will be added to side-bar menu under the appropriate category e.g if obj[i].type="tank" then tank-drop.innerhtml += '<a href="#'+obj[i].name+'">'+obj[i].name+'</a>';
function display() {
    console.log("executing tanks display function");
    html = "";
    var tank_sidebar = document.getElementById("tank-drop");
    var tank_segment = document.getElementById("tank-results");
    for (var i = 0; i < tanks.length; i++) {
        //adding to side bar
        var tank_item = tanks[i];
        html += '<a href="#' + tank_item.name + '">' + tank_item.name + "</a>";
    }
    tank_sidebar.innerHTML = html;
    console.log("adding tank drop down options");

    //get current #tanks html content
    html = tank_segment.innerHTML;
    console.log(html);
    for (var i = 0; i < tanks.length; i++) {
        //adding to main content
        var tank_item = tanks[i];
        html +=
            "<tr id='" +
            tank_item.name +
            "'><td><section class='main-section'><h4>" +
            tank_item.name +
            "</h4><hr><div>" +
            tank_item.intro +
            "</div></section></td></tr>";
        //will be adding more content soon
    }
    console.log(html);
    tank_segment.innerHTML = html;
    console.log("adding tank content to tank results segment");
    html = "";
}