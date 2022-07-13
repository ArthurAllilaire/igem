'use strict';

function Header(props){
    return(
    <header className="header_div_cont" style="z-index: 2;">
        <a href="/Team:City_of_London_UK" className="logo-cont">
            <video id="logo-video" className="logo" poster="https://static.igem.org/mediawiki/2021/6/6b/T--City_of_London_UK--white.png" preload="true" muted="">
                <source src="https://static.igem.org/mediawiki/2021/6/64/T--City_of_London_UK--Logo_enter_animation.mp4" type="video/mp4" />
            </video>
        </a>
        <nav className="links-cont">
            <div className="menu-toggle">
                <i className="menu-toggle-i"></i>
            </div>
            <ul className="nav">
                <li className="dropdown">
                    <a href="/Team:City_of_London_UK" className="keychainify-checked">Project</a>
                    <ul className="dropdown-content">
                        <li><a href="/Team:City_of_London_UK/Description" className="keychainify-checked">Description</a></li>
                        <li><a href="/Team:City_of_London_UK/Design" className="keychainify-checked">Design</a></li>
                        <li><a href="/Team:City_of_London_UK/Parts" className="keychainify-checked">Parts</a></li>
                        <li><a href="/Team:City_of_London_UK/Engineering" className="keychainify-checked">Engineering</a></li>
                        <li><a href="/Team:City_of_London_UK/Contribution" className="keychainify-checked">Contribution</a></li>
                        <li><a href="/Team:City_of_London_UK/Implementation" className="keychainify-checked">Implementation</a></li>
                        <li><a href="/Team:City_of_London_UK/Proof_Of_Concept" className="keychainify-checked">Proof of Concept</a></li>
                        <li><a href="/Team:City_of_London_UK/Results" className="keychainify-checked">Results</a></li>
                    </ul>
                </li>
                <li className="dropdown">
                    <a href="/Team:City_of_London_UK/Notebook" className="keychainify-checked">Labwork</a>
                    <ul className="dropdown-content">
                        <li><a href="/Team:City_of_London_UK/Measurement" className="keychainify-checked">Measurement &amp; Results</a></li>
                        <li><a href="/Team:City_of_London_UK/Experiments" className="keychainify-checked">Experiments</a></li>
                        <li><a href="/Team:City_of_London_UK/Safety" className="keychainify-checked">Safety</a></li>
                        <li><a href="/Team:City_of_London_UK/Notebook" className="keychainify-checked">Notebook</a></li>
                    </ul>
                </li>
                <li className="dropdown">
                    <a href="/Team:City_of_London_UK/Human_Practices" style="text-align: center;" className="keychainify-checked">Human Practices</a>
                    <ul className="dropdown-content">
                        <li><a href="/Team:City_of_London_UK/Human_Practices" className="keychainify-checked">Silver HP</a></li>
                        <li><a href="/Team:City_of_London_UK/Human_Practices" className="keychainify-checked">Integrated HP</a></li>
                        <li><a href="/Team:City_of_London_UK/Communication" className="keychainify-checked">Communication</a></li>
                        <li><a href="/Team:City_of_London_UK/Collaborations" className="keychainify-checked">Collaborations</a></li>
                    </ul>
                </li>
                <li className="dropdown">
                    <a href="/Team:City_of_London_UK/Model" className="keychainify-checked">Modelling</a>
                    <ul className="dropdown-content">
                        <li><a href="/Team:City_of_London_UK/Model#MAK" className="keychainify-checked">Mass Action Model</a></li>
                        <li><a href="/Team:City_of_London_UK/Model#NUPACK" className="keychainify-checked">NUPACK model</a></li>
                        <li><a href="/Team:City_of_London_UK/Model#Cost_model" className="keychainify-checked">Cost model</a></li>
                    </ul>
                </li>
                <li className="dropdown">
                    <a href="/Team:City_of_London_UK/Software" className="keychainify-checked">Software</a>
                    <ul className="dropdown-content">
                        <li><a href="/Team:City_of_London_UK/Software" className="keychainify-checked">ToeholdTools</a></li>
                    </ul>
                </li>
                <li className="dropdown">
                    <a href="/Team:City_of_London_UK/Hardware" className="keychainify-checked">Hardware</a>
                    <ul className="dropdown-content">
                        <li><a href="/Team:City_of_London_UK/Hardware" className="keychainify-checked">Overview</a></li>
                        <li><a href="/Team:City_of_London_UK/Hardware#Luminometer" className="keychainify-checked">Luminometer</a></li>
                        <li><a href="/Team:City_of_London_UK/Hardware#Design" className="keychainify-checked">Design</a></li>
                        <li><a href="/Team:City_of_London_UK/Hardware#Detection" className="keychainify-checked">Detection</a></li>
                        <li><a href="/Team:City_of_London_UK/Hardware#miRNA" className="keychainify-checked">miRNA</a></li>
                    </ul>
                </li>
                <li className="dropdown" style="position: relative">
                    <a href="/Team:City_of_London_UK/Team" className="keychainify-checked">People</a>
                    <ul className="dropdown-content" id="people-dropdown">
                        <li><a href="/Team:City_of_London_UK/Attributions" className="keychainify-checked">Attributions</a></li>
                        <li><a href="/Team:City_of_London_UK/Team" className="keychainify-checked">Team</a></li>

                    </ul>
                </li>
            </ul>
        </nav>
    </header>
    )
}

function HeroDiv(props){
    return(
    <div classNameName="hero_div_cont">
        <div classNameName="text_cont">
            <h1 classNameName="hero_text">Breakthrough technology for masks.</h1>
            <hr/>
            <nav classNameName="hero_nav">
                <ButtonLink text="Join the team" icon="arrow"/>
                <ButtonLink text="Watch the update" icon="arrow"/>
            </nav>
        </div>

    </div>
    )
}

function ButtonLink(props){
    /* props.text - text to be displayed
        props.icon - type of icon to be displayed - arrow
    */
   let icon;
   if (props.icon){
        icon = <div></div>
   }
    return(
        <a classNameName="button-link">
            <div>{props.text}</div>
            {icon}

        </a>
    )
}

class App extends React.Component {
    render() {
        return (
        <div>
            <div classNameName="full_page_cont">
                <Header />
                <HeroDiv />
            </div>
        </div>
    
    );
}
}

const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);
const e = React.createElement;
root.render(e(App));