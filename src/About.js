import PapaGoji from "./images//PapaGoji.png";

function About() {
    return (
    <>
    <br>
    </br>
    <h1>ABOUT</h1>
    
    <h2><span>Hi, I'm Tom! Ever since I was a young boy I've been fascinated by monsters.
        Now that might come across as a little strange and counterintuitive to some. 
        I mean, monsters are dangerous! But so is fire, tornadoes, and falling from great heights -- 
        yet we have firefighters, tornado chasers, and skydivers. There's a sense of thrill went facing
        the unknown, and monsters are one big question mark.</span> </h2>

        <h2><span>Monsters come in all shapes and sizes! From Count Dracula to Godzilla. There are so 
        many to choose from. One constant theme that is explored in monster stories is how misunderstood they are.
        It resonates because it helps us empathize with things we once thought were scary and bad because of the 
        way it looked. Now that doesn't mean it's time to hug the Wolfman and sing Kumbaya. More apropos, 
        we'd be better off understanding how the Wolfman became to be so that we, too, don't share a similar fate. It's
        in our best interest to not only see the signs coming but to learn from them and better ourselves in the process. </span></h2>
        <br></br>

    <h3><span>Below is a photo of my son playing with his plushy Godzilla toy.</span></h3> 

    <br></br>  

    <div className="PapaGoji">
    <img src={PapaGoji} alt="first page"/>
    </div>
    </> 
    )   
}

export default About