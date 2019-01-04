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
    type: "Mobility Tank",
    intro: "Playing DVA is all about map control, maintaining a safeback line and pushing back aggresion. Efficient use of the Defense Matrix is key. A common misconception is to play DVA by head hunting in the frontline trying to take out healers, when you should be covering your team with maxtrix and harassing attackers.",
    quick_guide: [
        "DVAs Defense Matrix is a powerful but limited skill, use <b>efficiently</b>.",
        "Efficient use of Matrix can be done by timing it to catch enemy fire and dropping it when they reload. ",
        "A dive tactic would be to boost, missle, punch then auto cannons. The punch should allow you to stop infront of your target",
        "You can use micro missiles to bait out genji deflects or zarya bubbles.",
        "Enforce control over <b>high ground and backline</b> areas where you can isolate snipers and flankers.",
        "Avoid eating random spam with Matrix",
        "Bodyblock for your team",
        "DVA bomb requires awareness of enemy defenses, locations and possible escape directions",
        "DVA's head hunting is needed to chase those who are jumping on your team, not to duke it out on the front line."
    ]
});
console.log("added D.VA");
tanks.push({
    id: "002",
    name: "Orisa",
    type: "Anchor Tank",
    intro: "Orisa serves as the central anchor of her team, and defends her teammates from the frontline with a protective barrier. She can attack from long range, fortify her own defenses, launch graviton charges to slow and move enemies, and deploy a Supercharger to boost the damage output of multiple allies at once.",
    quick_guide: ["TBA", "TBA", "TBA"]
});
console.log("added Orisa");
tanks.push({
    id: "003",
    name: "Reinhardt",
    type: "Anchor Tank",
    intro: "Clad in powered armor and swinging his hammer, Reinhardt leads a rocket-propelled charge across the battleground and defends his squadmates with a massive energy barrier.",
    quick_guide: ["TBA", "TBA", "TBA"]
});
console.log("added Rein");
tanks.push({
    id: "004",
    name: "Road Hog",
    type: "Brawler Tank",
    intro: "Roadhog uses his signature Chain Hook to pull his enemies close before shredding them with blasts from his Scrap Gun. He’s hardy enough to withstand tremendous damage, and can recover his health with a short breather.",
    quick_guide: ["TBA", "TBA", "TBA"]
});
console.log("added Hog");
tanks.push({
    id: "005",
    name: "Winston",
    type: "Mobility Tank",
    intro: "Winston wields impressive inventions—a jump pack, electricity-blasting Tesla Cannon, portable shield projector and more—with literal gorilla strength.",
    quick_guide: ["TBA", "TBA", "TBA"]
});
console.log("added Winston");
tanks.push({
    id: "006",
    name: "Hammond (Wreaking Ball)",
    type: "Mobility Tank",
    intro: "Wrecking Ball rolls across the battlefield, using his arsenal of weapons and his mech’s powerful body to crush his enemies.",
    quick_guide: ["TBA", "TBA", "TBA"]
});
console.log("added Hammond");
tanks.push({
    id: "007",
    name: "Zarya",
    type: "Brawler Tank",
    intro: "Deploying powerful personal barriers that convert incoming damage into energy for her massive Particle Cannon, Zarya is an invaluable asset on the front lines of any battle.",
    quick_guide: ["TBA", "TBA", "TBA"]
});
console.log("added Zarya");
//When each array is loaded serveral things will happen
//1. the name will be added to side-bar menu under the appropriate category e.g if obj[i].type="tank" then tank-drop.innerhtml += '<a href="#'+obj[i].name+'">'+obj[i].name+'</a>';
function display_tank() {
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
            tank_item.intro;
        html += "<p><h6><b>Quick Guide</b></h6><ol>"
        for (var j = 0; j < tank_item.quick_guide.length; j++) {
            html += "<li>" + tank_item.quick_guide[j] + "</li>";
        }
        html += "</ol></p></div></section></td></tr>";
        //will be adding more content soon
    }
    console.log(html);
    tank_segment.innerHTML = html;
    console.log("adding tank content to tank results segment");
    html = "";
}