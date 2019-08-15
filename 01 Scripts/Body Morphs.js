window.breastSize = function(breasts){
    var bString = "";
    if(breasts == "flat"){
        bString = "Your chest is flat and manly."
    } 

    else if(breasts == "AA"){
        bString = "You've got small bumps on your chest. You'll have to keep an eye on it - it might be an allergic reaction."
    }
    else if(breasts == "A"){
        bString = "Those small bumps have become more pronounced and the skin very sensitive. Sometimes your nipples stand erect."
    }
    else if(breasts == "B"){
        bString = "You didn't want to believe it, but these are clearly breasts. There has to be a way to reverse this!"
    }
    else if(breasts == "C"){
        bString = "Your breasts have gotten to the point where you can't even hope to hide them. They're around a c-cup, which you've always thought look nice... on women."
    }
    else if(breasts == "D"){
        bString = "When are these stupid breasts going to stop growing? These large mounds are pretty impossible to ignore, and you'd guess they're around a d-cup."
    }
    else{
        bString = "Error. Please let KittyChan know you got this message.";
    }
    return bString;
}

window.belly = function(days){
    var belly = "Your belly is flat and toned.";
    if(days >= 21){

    }
    else if(days >= 14){

    }
    else if(days >= 7){

    }
    return belly;
}

window.vagina = function(libido, race){
    var num = 0;
    var returnVal = "Your cock is gone, leaving you stuck with a vagina.";
    if(libido >= 40){
        num = 1;
    }
    if(libido >= 80){
        num = 2;
    }
    if(num == 1 && race == "nyapurr"){
        returnVal += " Worst of all, you're always wet and ready for sex. Lately you've found yourself blushing around men, unable to take your eyes off their crotch and wanting to... NO. Just, no. This stupid tower is messing with your head.";
    }
    if(num == 2){
        returnVal += " Worst of all, you're always wet and ready for sex. Even being near a man sends you into heat and you'll find yourself blushing as you think about being bent over, fucked, and filled with his cum, getting you nice and pregnant with his... NO. No, that's not right at all. What is this stupid tower doing to you?!";
    }
    return returnVal;
}

window.cockSize = function(penis){
    var size = "";
    if(penis == "large cock"){
        size = "You've always been proud of your large cock. It rests against your leg, twitching slightly at the thought of filling a woman."
    }
    else if(penis == "average cock"){
        size = "Oddly, your cock seems like it's shrunk a bit. It's still big enough to make women happy, but it just seems... average."
    }
    else if(penis == "small cock"){
        size = "Okay, your dick is definitely shrinking. Women would laugh if they saw this little thing. You HAVE to find a way to fix this!"
    }
    else if(penis == "infantile cock"){
        size = "Your infantile cock is pathetic. It's about an inch long and your little balls are easy to hide. It's like your cock never grew larger than an infant's."
    }
    else if(penis == "micro penis"){
        size = "Can your micropenis even be considered a cock? Your balls have retracted inside your body, making your crotch look flat in most clothing. You can barely pee while standing - you can forget about trying to penetrate a vagina."
    }
    else{
        size = "Error. Please let KittyChan know you got this message.";
    }
    return size;
}

window.muscles = function(muscles){
    var value = "";
    if(muscles == "muscular"){
        value = "You're muscular from years of hunting and swinging a sword."
    }
    else if(muscles == "lean"){
        value = "You're muscular, but it's become the lean sort of muscle you'd expect to see on an acrobat. Maybe you need to work out more."
    }
    else if(muscles == "weak"){
        value = "You're not sure what happened, but you're pretty weak. You don't really have a muscular build anymore, which is odd, because you've always been a bit muscular. And are you getting shorter?"
    }
    else if(muscles == "dainty"){
        value = "Dainty is the only word that can describe your body now. Not only do you not have any muscle, but you're slim like a girl and you are definitely shorter. Missing the gym wouldn't cause this - it has to be this stupid tower!"
    }
    else if(muscles == "curvy"){
        value = "Your body is soft and curvy. You're short enough that most men - and even some women - find themselves looking down at you. This is a body that screams femininity and you're stuck with it."
    }
    else{
        value = "Error. Please let KittyChan know you got this message.";
    }
    return value;
}   

window.bodyHair = function(hair){
    var returnString = "";
    if(hair == "none"){
        returnString = "No matter where you look, your skin is smooth and without hair. This is definitely not normal.";
    }
    else if(hair == "lacking"){
        returnString = "The beard you once loved is gone and cannot be grown back. You still have pubic hair and a little bit of chest hair, but overall it's like you've just barely hit puberty.";
    }
    else if(hair == "less-hairy"){
        returnString = "It's strange, but most of your beard seems to have fallen out. You've been left with a weak, patchy beard that looks a lot like what you were trying to grow when you were a teenager. Is the tower making you younger?";
    }
    else if(hair == "hairy"){
        returnString = "You're quite happy with your beard. Your chest is hairy, as a man's should be, and you're sure women love it.";
    }
    else{
        returnString = "Error. Please let KittyChan know you got this message.";
    }
    return returnString;
}

window.butt = function(butt){
    var returnString;
    if(butt == "flat"){
        returnString = "Your butt is flat and muscular.";
    }
    else if(butt == "large"){
        returnString = "You have a bit more cushion in your butt than you used to.";
    }
    else if(butt == "feminine"){
        returnString = "Your butt is starting to get a bit on the large side. Worst of all your hips have grown wider, giving you a feminine shape.";
    }
    else if(butt == "round"){
        returnString = "Your butt is perky and round. Your body fat has redistributed so that while your waist is narrow, you now have wide, feminine hips. You naturally walk with a feminine gait.";
    }
    else{
        returnString = "Error. Please let KittyChan know you got this message.";
    }
    return returnString;
}

window.playerFace = function(face){
    var returnString;
    if(face == "manly"){
        returnString = "You have a rugged, masculine face with a strong jaw and thick eyebrows."
    }
    else if(face == "boyish"){
        returnString = "It's subtle, but something about your face looks different. You look younger, perhaps?";
    }
    else if(face == "androgynous"){
        returnString = "Okay, seriously, what the hell? You were fine with looking younger, but your face is starting to look a bit on the feminine side. Even your nose and jaw have clearly shrunk.";
    }
    else if(face == "girly"){
        returnString = "With your full lips and thin eyebrows, anyone who looks at you is going to think you're a girl. Somehow your nose and jaw have shrunk even more, taking on a delicate look.";
    }
    else if(face == "doll-like"){
        returnString = "You hate to admit it, but your face is beautiful. You've got smooth, flawless skin with a cute nose. Your big, pouty lips look like they're made for sucking cock. Even your eyes look different; they're larger, almost doe-like.";
    }
    else{
        value = "Error. Please let KittyChan know you got this message.";
    }
    return returnString;
}

window.getRace = function(hair, human, nyapurr){
    var race = "";
    if(nyapurr >= 20){
        race += `A pair of ${hair} cat ears sits on top of your head, which twitch at the slightest sound of movement. `;
    }
    if(nyapurr >= 40){
        race += `A ${hair} cat tail swings behind you. `;
    }
    return race;
}

window.felicityTest = function(muscle, chest, butt, race, humanity, nyapurr, femininity, sex, libido){
    var felicity = "";

    //detect muscle
    if(muscle == 3){
        felicity += "No signs of muscular atrophy";
    }
    else{
        felicity += "Signs of muscular atrophy";
    }

    felicity += ", with ";

    //detect chest
    if(chest == 0){
        felicity += "no tissue development in chest. Could this hyuman be an exception...?";
    }
    else if(chest == 1){
        felicity += "some tissue development in chest.";
    }
    else if(chest == 2){
        felicity += "significant tissue development in chest. Hyuman will need to be watched for further development.";
    }
    else{
        felicity += "major tissue development detected in chest. Can confirm: hyuman has breasts.";
    }
    felicity += "\n\n"

    //detect race
    if(race == "human"){
        felicity += "Subject appears to have retained hyumanity so far. "
        if(humanity < 100){
            felicity += "However, hyuman shows signs of that changing. "
        }
        if(nyapurr >= 20 && nyapurr < 40){
            felicity += "Changes are subtle, but hyuman shows signs of becoming nyapurr.";
        }
        if(nyapurr >= 40 && nyapurr < 50){
            felicity += "Subject is becoming nyapurr. Soon he - she? - will join sister race nya~";
        }
        if(nyapurr >= 50){
            felicity += "Subject is half hyuman, half nyapurr. I expect her to join sister race very soon nya~";
        }
    }
    else if(race == "nyapurr"){
        felicity += "Subject is healthy sister nyapurr. ";
        if(humanity <= 50 && humanity > 30){
            felicity += "Some hyuman traits remain for now. ";
        }
        else if(humanity <= 30 && humanity > 10){
            felicity += "Most hyuman traits are gone. ";
        }
        else if(humanity <= 10 && humanity > 0){
            felicity += "Subject's hyumanity is almost nonexistent. ";
        }
        else if(humanity == 0){
            felicity += "Subject is 100% nyapurr. Nyot a trace of hyumanity detected in DNA. "
        }
    }
    felicity += "\n\n";

    //fertility
    if(sex == "female"){
        if(race == "nyapurr"){
            if(libido >= 80){
                felicity += "Tests confirm that subject is extremely fertile female nyapurr. Breasts and tail are very sensitive. Smelling male sweat sends her into heat, causing her body to release powerful pheromone that will drive nyapurr men crazy with lust. Even I feel a slight urge to pounce on her, and females should be immune. I foresee lots of nyapurr babies in her future nya~";
            }
            else if(libido >= 40){
                felicity += "Tests confirm that subject is fertile female nyapurr. Breasts and tail are as sensitive as average female of my race, and subject releases pheromone when aroused that will attract nyapurr men. Subject will need to be very careful around nyapurr men if she doesn't want to get pregnant nya~";
            }
            else{
                felicity += "Subject is female nyapurr capable of giving birth. She doesn't appear to release pheromones like most of my race, and is unaffected by pheromones released by males.";
            }
        }
    }
    else{
        felicity += "Subject retains male genitalia.";
    }
    return felicity;
}