import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

class LeftSidebar extends Component {

    handleButtonClickLoginValidator = () => {
        // TO-DO
        // If not logged in, throw a SWAL error
    }

    render() {
        return (
            <ul className="nav flex-column children-margin-vert-10">
                <li className="nav-item">
                    <Button className="badge-pill" variant="info">
                        <img src={"https://image.flaticon.com/icons/png/128/92/92031.png"} height={32} width={32} alt="Icon of a raven" />
                    </Button>
                </li>
                <li className="nav-item">
                    <Button className="badge-pill" variant="outline-info"href="https://twitter.com/home"><img src={"https://www.rawshorts.com/freeicons/wp-content/uploads/2017/01/blue_repicthousebase_1484336386-1.png"}  height={32} width={32} alt="Icon of a house" /> Home</Button>
                </li>
                <li className="nav-item">
                    <Button className="badge-pill" variant="outline-info"href="https://twitter.com/explore"><img src={"https://cdn0.iconfinder.com/data/icons/huge-black-icons/512/Zoom_place.png"} height={32} width={32} alt="Icon of a house" /> Explore</Button>
                </li>
                <li className="nav-item">
                    <Button className="badge-pill" variant="outline-info" href="https://twitter.com/notifications"><img src={"https://s3.amazonaws.com/iconbros/icons/icon_pngs/000/003/037/original/notification.png?1572711433"} height={32} width={32} alt="Icon of a bell notification" /> Notifications</Button>
                </li>
                <li className="nav-item">
                    <Button className="badge-pill" variant="outline-info" href="https://twitter.com/messages"><img src={"https://cdn.iconscout.com/icon/free/png-512/message-537-461910.png"} height={32} width={32} alt="Icon of a message bubble" /> Messages</Button>
                </li>
                <li className="nav-item">
                    <Button className="badge-pill" variant="outline-info" href="https://twitter.com/i/bookmarks"><img src={"https://www.freeiconspng.com/uploads/bookmark-icon-1.png"} height={32} width={32} alt="Icon of a bookmark" /> Bookmarks</Button>
                </li>
                <li className="nav-item">
                    <Button className="badge-pill" variant="outline-info" href="https://twitter.com/i/lists"><img src={"https://cdn.onlinewebfonts.com/svg/img_446233.png"} height={32} width={32} alt="Icon of a to-do list" /> Lists</Button>
                </li>
                <li className="nav-item">
                    <Button className="badge-pill" variant="outline-info" href="https://twitter.com/i/profile"><img src={"https://i.ya-webdesign.com/images/profile-icon-png-9.png"} height={32} width={32} alt="Icon of a person's silhouette" /> Profile</Button>
                </li>
                <li className="nav-item">
                    <Button className="badge-pill w-100" variant="info" href="https://twitter.com/compose/tweet">Chirp</Button>
                </li>
            </ul>
        );
    }
}

export default LeftSidebar;