import React from "react";
import Style from "../css/Sidebar.module.css";

import {
  Menu,
  House,
  PlaySquare,
  History,
  ListVideo,
  Clock3,
  ThumbsUp,
  Download,
  ChevronRight,
} from "lucide-react";

const Sidebar = ({ toggle }) => {
  return (
    // <aside className={Style.sidebar}>
    <aside className={`${Style.sidebar} ${toggle ? Style.open : Style.close}`}>

      {/* Home Section */}
      <div className={Style.section}>

        <div className={`${Style.item} ${Style.active}`}>
          <House size={24} />
          <span>Home</span>
        </div>

        <div className={Style.item}>
          <PlaySquare size={24} />
          <span>Shorts</span>
        </div>

      </div>

      <hr />

      {/* Subscription */}
      <div className={Style.section}>

        <div className={Style.heading}>
          <span>Subscriptions</span>
          <ChevronRight size={18} />
        </div>

      </div>

      <hr />

      {/* You */}
      <div className={Style.section}>

        <div className={Style.heading}>
          <span>You</span>
          <ChevronRight size={18} />
        </div>

        <div className={Style.item}>
          <History size={24} />
          <span>History</span>
        </div>

        <div className={Style.item}>
          <ListVideo size={24} />
          <span>Playlists</span>
        </div>

        <div className={Style.item}>
          <Clock3 size={24} />
          <span>Watch Later</span>
        </div>

        <div className={Style.item}>
          <ThumbsUp size={24} />
          <span>Liked Videos</span>
        </div>

        <div className={Style.item}>
          <Download size={24} />
          <span>Downloads</span>
        </div>

      </div>

    </aside>
  );
};

export default Sidebar;