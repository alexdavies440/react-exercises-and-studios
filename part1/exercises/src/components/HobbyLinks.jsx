export default function HobbyLinks() {
    const hobbyLinks = ["https://store.steampowered.com/app/255710/Cities_Skylines/", "https://www.google.com/maps", "https://linuxmint.com/", "https://imslp.org/"];
    return (
        <div>
            <h3>My Hobbies</h3>
            <a href={hobbyLinks[0]}>Cities Skylines</a><br />
            <a href={hobbyLinks[1]}>Google Maps</a><br />
            <a href={hobbyLinks[2]}>Linux Mint</a><br />
            <a href={hobbyLinks[3]}>IMSLP</a><br />



        </div>
    )
}