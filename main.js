//for each role section the lists will be generated based from objects with ajax
//there will be role object > role-offensive > role-defensive > role-etc > role-heros >role-heros-heroname
//bunch of switch statements which will allocate information e.g
//if role = tanks then for tanks.offensive do x, for tanks.defensive do x, for tanks.etc do x
// for tanks.heros.length() get tanks.heros[i] = currHero for currHero do x

/* list-item */
function supDrop(value) {
    console.log(value);
    switch (value) {
        case 0:
            var drop = document.getElementById("tank-drop");
            if ((drop.style.display == "list-item")) {
                drop.style.display = "none";
            } else {
                drop.style.display = "list-item";
            }
            break;
        case 1:
            var drop = document.getElementById("dps-drop");
            if ((drop.style.display == "list-item")) {
                drop.style.display = "none";
            } else {
                drop.style.display = "list-item";
            }
            break;
        case 2:
            var drop = document.getElementById("sup-drop");
            if ((drop.style.display == "list-item")) {
                drop.style.display = "none";
            } else {
                drop.style.display = "list-item";
            }
            break;
    }
}