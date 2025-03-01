import React, { useRef, useState } from "react";
import Sidebar from "./Slider";
import { Button } from "@mui/material";
import ReactPlayer from "react-player";
import ContentCutIcon from "@mui/icons-material/ContentCut";
import VideocamIcon from '@mui/icons-material/Videocam';
import PodcastsIcon from '@mui/icons-material/Podcasts';
import MicNoneIcon from '@mui/icons-material/MicNone';
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';

const Home = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const videoRef = useRef(null);


  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };



  const styles = {
    container: {
      display: "flex",
      backgroundColor: "#eaeaea",
    },
    mainContent: {
      marginLeft: isSidebarOpen ? "10px" : "0",
      transition: "margin-left 0.3s",
      padding: "20px",
      width: "100%",
    },
    toggleButton: {
      top: "5px",
      left: isSidebarOpen ? "260px" : "10px",
      zIndex: "1000",
      color: "black",
      border: "none",
      cursor: "pointer",
    },
    searchBar: {
      padding: "10px",
      fontSize: "16px",
      margin: "10px 10px",
      width: "150%",
      innerHeight: '50%',
      BorderColor: 'none',
      border: '1px',
      boxSizing: "border-box",
      borderRadius: "50px",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      transition: "box-shadow 0.3s ease",
    },
    TopButtonStyle1: {
      border: "1px",
      color: 'black',
      borderRadius: "10px",
      backgroundColor: '#fec76f',
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      transition: "box-shadow 0.3s ease"

    },
    TopButtonStyle2: {
      border: "1px",
      marginInline: '10px',
      borderRadius: "10px",
      backgroundColor: 'white',
      color: 'black',
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      transition: "box-shadow 0.3s ease",
    },
    buttonStyle: {
      border: "1px",
      paddingInline: "20px",
      width: '15%',
      height: '15%',
      borderRadius: "10px",
      backgroundColor: 'white',
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      transition: "box-shadow 0.3s ease",
    },

    videoPlayerContainer: {
      width: '20%',
      padding: "10px",
      opacity: "30px",

    },

    avatar: {
      width: '50px',
      height: '50px',
      borderRadius: '50%',
      marginBottom: '-20px',
    },
    videocontainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',

    },

    mainVideo: {
      width: '80%',
      height: 'auto',
      marginBottom: '20px',

    },

    frameContainer: {
      width: '80%',
      overflowX: 'auto',
      whiteSpace: 'nowrap',
      display: 'flex',
      justifyContent: 'center',
    },

    frameVideo: {
      width: '500%',
      height: 'auto',
      display: 'inline-block',
    },
    /* RecentVideos.css */

    projects: {
      display: "flex",
      flexDirection: "column",
      gap: '2rem', /* Use rem for spacing consistency */
    },

    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },

    title: {
      fontSize: '2rem',
      fontWeight: '600', /* Semi-bold */
    },

    viewAll: {
      fontSize: '1rem',
      fontWeight: '500', /* Medium */
      textUnderlineOffset: '2px', /* Better accessibility */
      cursor: 'pointer',
    },

    projectGrid: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '1rem',
    },

    projectItem: {
      maxWidth: '100%',
    },

    projectThumbnail: {
      width: '20rem',
      height: '13rem',
      backgroundColor: 'black',
      borderRadius: '0.5rem', /* Rounded corners */
       /* Responsive for small screens */
    },

    projectName: {
      fontSize: '1.2rem',
      fontWeight: '500', /* Medium */
      paddingTop: '0.5rem', /* Spacing above the text */
      cursor: 'pointer',
    },


  };
  const ProjectItem = ({ name }) => {
    return (
      <div style={styles.projectItem}>
        <div style={styles.projectThumbnail}></div>
        <div style={styles.projectName}>{name}</div>
      </div>
    );
  };

  const projects = [
    'Project Name - 1',
    'Project Name - 2',
    'Project Name - 3',
  ];

  return (
    <div style={styles.container}>
      <Sidebar isOpen={isSidebarOpen} />
      <div style={styles.mainContent}>
        <div style={{
          display: "flex",
          justifyContent: "space-between",
        }}>
          <div style={{ display: "flex", gap: "20px" }}>
            <div style={styles.toggleButton} onClick={toggleSidebar}>
              <h2 style={{ margin: "10px 0px" }}>{isSidebarOpen ? ">" : "<"}</h2>
            </div>
            <div>
              <input
                type="text"
                placeholder="Search..."
                value=""
                style={styles.searchBar}
              />
            </div>
          </div>
          <div style={{}}>
            <Button startIcon={<BoltOutlinedIcon />} style={styles.TopButtonStyle1} >Upgrade</Button>
            <Button startIcon={<PersonAddAltIcon />} style={styles.TopButtonStyle2} >Invite</Button>
            <img src="/images/avatar.png" alt="Avatar" style={styles.avatar} />
          </div>

        </div>
        <p style={{ fontSize: "24px", marginTop: '40px', marginLeft: '20px' }}>
          Let's Create some <span style={{ fontWeight: "bold" }}>Videos!</span>{" "}
        </p>
        <div style={{ display: "flex", padding: "15px", gap: "10px", flexDirection: 'row', marginTop: '-15px' }}>
          <div style={styles.buttonStyle}>
            <Button startIcon={<ContentCutIcon />} style={{ color: 'black' }}>
              <p style={{ fontSize: '15px', fontWeight: '10px', color: 'black' }}>Create Project</p>
            </Button>
          </div>
          <div style={styles.buttonStyle}>
            <Button startIcon={<VideocamIcon />} style={{ color: 'black' }} >
              <p style={{ fontSize: '15px', fontWeight: '10px', color: 'black' }}>Record Video</p>
            </Button>
          </div>
          <div style={styles.buttonStyle}>
            <Button startIcon={<PodcastsIcon />} style={{ color: 'black' }} >
              <p style={{ fontSize: '15px', fontWeight: '10px', color: 'black' }}>Go Live</p>
            </Button>
          </div>
        </div>
        <div style={{ marginLeft: '10px', fontSize: '25px', marginBottom: '-20px' }}>
          <p >My Recent Videos</p>
        </div>
        <div style={styles.projects}>
          <div style={styles.header}>
            <h1 style={styles.title}>Recent Videos</h1>
            <button style={styles.viewAll}>
              All Videos &gt;
            </button>
          </div>
          <div style={styles.projectGrid}>
            {projects.map((project, index) => (
              <ProjectItem key={index} name={project} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};


export default Home;
