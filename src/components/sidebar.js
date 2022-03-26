import './sidebar.css';

function SideBtn(props) {
    return (
        <div className="side-btn">
            <p>{props.children}</p>
        </div>
    )
}

function SideCopyright() {
    return (
        <div id="side-copyright">
            <p>© 2022 by Rivo Juicer Wowor</p>
            <p>All Rights Reserved</p>
        </div>
    )
}

export default function Sidebar() {
    return (
        <div id="sidebar">
            <SideBtn>Hotels</SideBtn>
            <SideBtn>Flight</SideBtn>
            <SideBtn>Car Rentals</SideBtn>
            <SideBtn>Tool</SideBtn>
            <SideCopyright />
        </div>
    )
}