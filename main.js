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
    quick_guide: ["Orisa requires good aim", "Position yourself infront of your team as a defensive tank.", "You primarily want to force your opponent to shoot your shield.", "Don't leave yourself out in the open to be flanked.", "Stay with your team.", "Durring open fights weave between your shield to create cover"]
});
console.log("added Orisa");
tanks.push({
    id: "003",
    name: "Reinhardt",
    type: "Anchor Tank",
    intro: "Reinhardt is a defensive tank, which can create a safe space for allies as well as punish enemies which get too close. His low mobility requires strong positioning and ability manaagement skills to ensure surviavbility and long term effectiveness. Without good positioning and skill management you can find yourself constantly without a shield and dying out in the open by flankers and brawlers.",
    quick_guide: ["Your team is relying on your shield to poke so be careful when you drop it.", "Charge requires team composition, enemy team observation and propper setup and positioning which makes it difficult to use. So don't use it unless your confident.", "Keep en eye on how often you keep your shield up. Be sure when to let it down and charge", "Save your ult to deny enemy ults or diffuse enemy pushes.", "Know when its safe to body block, so healers can charge their ults on you (preferrable early game you'd want healers to have their ults up).", "Durring brawls sperratically dropping shield and taking swings can stop your shield from going down too quickly, and also help diffuse the enemy attack.", "Your main source of ult charge is fire striking", "Make sure your actually shielding someone when your shield is up.", "When agaisnt another rein, knowing when he has ult, firestrike and barrier is key to abusing his cooldowns", "against snipers don't drop shield too often"]
});
console.log("added Rein");
tanks.push({
    id: "004",
    name: "Road Hog",
    type: "Brawler Tank",
    intro: "Roadhog uses his signature Chain Hook to pull his enemies close before shredding them with blasts from his Scrap Gun. He’s hardy enough to withstand tremendous damage, and can recover his health with a short breather.",
    quick_guide: ["Combo: Buck-shot (right-click), Hook, Shot-gun, Punch", "Using your alt fire before hooking as a good way to line up and aim your hook.", "Turing to the side after landing a hook can further displace your opponent putting them infront of your team or even off the edge of the map.", "Body shots on smaller targets will allow more of your bullets to hit, dealing more damage.", "Manage ammo propperly for your combo.", "Ulting is good to use post hook", "Flanking as hog can be good durring a fight to catch tunnel visioned enemy backlines.(warning flanking is only effective if you get several kills!)."]
});
console.log("added Hog");
tanks.push({
    id: "005",
    name: "Winston",
    type: "Mobility Tank",
    intro: "Winston wields impressive inventions—a jump pack, electricity-blasting Tesla Cannon, portable shield projector and more—with literal gorilla strength.",
    quick_guide: ["For oppenents with armor punching while zapping will help reduce their armor, without using up too much ammo", "Punching on  jump pack landing then zapping is a good way to get damage out on engage.", "You can use your jump pack to knock rod hogs who hook your team mates.", "Ideally engage with your bubble and weave between the barrier to avoid damage, before disengaging", "Never dive bastion, brig or other beefy brawlers alone.", "You want to use your primal rage to extent your life durring fights", "try to bait out any mobility abilities from opponents before leaping", "barrier can block all lucio AOE, zen ult, doomfist ult, brig passive, but not brig's AOE ult", "Bubble is key for denying ultimate damage.", ]
});
console.log("added Winston");
tanks.push({
    id: "006",
    name: "Hammond (Wreaking Ball)",
    type: "Mobility Tank",
    intro: "Hammond is a strong counter to the anchor style composition where the enemy is brawling and heavily grouped together. He requires a lot of skill due to his crowd control oriented play style which demands the proper use of mobility to displace the enemy.",
    quick_guide: ["Hammond is about depositioning enemy tanks and diving with his mobility.", "Constantly CC'ing enemey tanks by swinging into them can allow your team to brawl with the enemy offensive", "Be aware of where your knocking your enemies as your may very well knock them closer to their targets", "Combo: swing hit up, pile driver down, pop shield and shoot.", "Hammonds guns have good range of the damage so you don't have to be so up close and personal.", "Mines should be placed on your team in a close quarters fight, on choke points and objective defense", "engagement"]
});
console.log("added Hammond");
tanks.push({
    id: "007",
    name: "Zarya",
    type: "Brawler Tank",
    intro: "Deploying powerful personal barriers that convert incoming damage into energy for her massive Particle Cannon, Zarya is an invaluable asset on the front lines of any battle.",
    quick_guide: ["Tight spaces and choke points are where zarya excels at, as the enemy is forced onto her laser", "Bubble management is extrememly important, enabling offensive, protecting allies", "Getting charge fast can be done by forcing your enemy to shoot at you by stepping into their line of sight and bubbling allies which are brawling like reinhardt", "maintain bubble protection when your back line is under attack or when an enemy offensive is commiting ability resources to secure a kill.", "offensive bubbling is protecting an ulting offensive ally", "beam requires high tracking skill, right click can provide a high level of grav charge", "using grav at points where enemies funnel into a certain place in the map", "if the enemy team likes to split don't wait for when they decide to group, graving can be good for securing enemy supports."]
});
console.log("added Zarya");

//offense
var offense = [];
offense.push({
    id: "001",
    name: "Ashe",
    intro: "TBA",
    quick_guide: "TBA"
});
offense.push({
    id: "002",
    name: "Bastion",
    intro: "TBA",
    quick_guide: "TBA"
});
offense.push({
    id: "003",
    name: "Doomfist",
    intro: "TBA",
    quick_guide: "TBA"
});
offense.push({
    id: "004",
    name: "Genji",
    intro: "TBA",
    quick_guide: "TBA"
});
offense.push({
    id: "005",
    name: "Hanzo",
    intro: "TBA",
    quick_guide: "TBA"
});
offense.push({
    id: "006",
    name: "Junkrat",
    intro: "TBA",
    quick_guide: "TBA"
});
offense.push({
    id: "007",
    name: "Mcree",
    intro: "TBA",
    quick_guide: "TBA"
});
offense.push({
    id: "008",
    name: "Mei",
    intro: "TBA",
    quick_guide: "TBA"
});
offense.push({
    id: "009",
    name: "Pharah",
    intro: "TBA",
    quick_guide: "TBA"
});
offense.push({
    id: "010",
    name: "Reaper",
    intro: "TBA",
    quick_guide: "TBA"
});
offense.push({
    id: "011",
    name: "Solider: 76",
    intro: "TBA",
    quick_guide: "TBA"
});
offense.push({
    id: "012",
    name: "Sombra",
    intro: "TBA",
    quick_guide: "TBA"
});
offense.push({
    id: "013",
    name: "Symmetra",
    intro: "TBA",
    quick_guide: "TBA"
});
offense.push({
    id: "014",
    name: "Torbjorn",
    intro: "TBA",
    quick_guide: "TBA"
});
offense.push({
    id: "015",
    name: "Tracer",
    intro: "TBA",
    quick_guide: "TBA"
});
offense.push({
    id: "016",
    name: "Widowmaker",
    intro: "TBA",
    quick_guide: "TBA"
});

var support = [];
support.push({
    id: "001",
    name: "Ana",
    intro: "TBA",
    quick_guide: "TBA"
});
support.push({
    id: "002",
    name: "Brigitte",
    intro: "TBA",
    quick_guide: "TBA"
});
support.push({
    id: "003",
    name: "Lucio",
    intro: "TBA",
    quick_guide: "TBA"
});
support.push({
    id: "003",
    name: "Mercy",
    intro: "TBA",
    quick_guide: "TBA"
});
support.push({
    id: "004",
    name: "Moira",
    intro: "TBA",
    quick_guide: "TBA"
});
support.push({
    id: "005",
    name: "Zenyatta",
    intro: "TBA",
    quick_guide: "TBA"
});
//When each array is loaded serveral things will happen
//1. the name will be added to side-bar menu under the appropriate category e.g if obj[i].type="tank" then tank-drop.innerhtml += '<a href="#'+obj[i].name+'">'+obj[i].name+'</a>';
function display() {
    console.log("executing tanks display function");
    html = "";
    var sidebar = document.getElementById("tank-drop");
    var segment = document.getElementById("tank-results");
    for (var i = 0; i < tanks.length; i++) {
        //adding to side bar
        var tank_item = tanks[i];
        html += '<a href="#' + tank_item.name + '">' + tank_item.name + "</a>";
    }
    sidebar.innerHTML = html;
    console.log("adding tank drop down options");

    //get current #tanks html content
    html = segment.innerHTML;
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
    segment.innerHTML = html;
    console.log("adding tank content to tank results segment");

    console.log("executing Offense display function")
    html = "";

    sidebar = document.getElementById("dps-drop");
    segment = document.getElementById("offense-results");
    //adding to the sidebar
    for (var i = 0; i < offense.length; i++) {
        var off_item = offense[i];
        html += '<a href="#' + off_item.name + '">' + off_item.name + "</a>";
    }
    sidebar.innerHTML = html;
    console.log("added offense hero's to list");

    //get current #offense html content
    html = segment.innerHTML;
    for (var i = 0; i < offense.length; i++) {
        //adding to main content
        var off_item = offense[i];
        html +=
            "<tr id='" +
            off_item.name +
            "'><td><section class='main-section'><h4>" +
            off_item.name +
            "</h4><hr><div>" +
            off_item.intro;
        html += "<p><h6><b>Quick Guide</b></h6><ol>"
        for (var j = 0; j < off_item.quick_guide.length; j++) {
            html += "<li>" + off_item.quick_guide[j] + "</li>";
        }
        html += "</ol></p></div></section></td></tr>";
        //will be adding more content soon
    }
    segment.innerHTML = html;
    console.log("adding offense content to offense results segment");

    console.log("executing support display function")
    html = "";

    sidebar = document.getElementById("sup-drop");
    segment = document.getElementById("support-results");
    //adding to the sidebar
    for (var i = 0; i < support.length; i++) {
        var off_item = support[i];
        html += '<a href="#' + off_item.name + '">' + off_item.name + "</a>";
    }
    sidebar.innerHTML = html;
    console.log("added offense hero's to list");

    //get current #support html content
    html = segment.innerHTML;
    for (var i = 0; i < support.length; i++) {
        //adding to main content
        var supp_item = support[i];
        html +=
            "<tr id='" +
            supp_item.name +
            "'><td><section class='main-section'><h4>" +
            supp_item.name +
            "</h4><hr><div>" +
            supp_item.intro;
        html += "<p><h6><b>Quick Guide</b></h6><ol>"
        for (var j = 0; j < supp_item.quick_guide.length; j++) {
            html += "<li>" + supp_item.quick_guide[j] + "</li>";
        }
        html += "</ol></p></div></section></td></tr>";
        //will be adding more content soon
    }
    segment.innerHTML = html;
    console.log("adding offense content to offense results segment");

    console.log("executing support display function")
    html = "";
}