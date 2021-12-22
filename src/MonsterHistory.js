import monsterhistory from "./images//monsterhistory.jpeg";

function MonsterHistory() {
    return (
        <>
        <br>
        </br>
    
        <h1>MONSTERS & HISTORY</h1>

        <h2>Throughout history, monsters have been there with us every step of the way, 
        from lurking in the shadows to haunting our wildest imaginations. Speaking of
        imaginations, the human brain is capable of imagining all kinds of things -- including
        things that are not what they seem.</h2>

        <h2>What is a monster? Colloquially, monsters usually mean imaginary creature, 
            cruel person, or an out-of-control child (as a father of a toddler I can attest to this).
            But did you know monster was originally called <span>monstrum</span>, which in Latin means
            a sign or warning? In most story depictions, monsters are a clear and present danger, 
            but why is that? What can we do to learn from them?
        </h2>
        <br>
        </br>
        <div className="Pages">
        <img src={monsterhistory} alt="monster history"/>
        </div>
    <br>
    </br>
        </>
    )
}

export default MonsterHistory