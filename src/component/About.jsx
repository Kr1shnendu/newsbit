import "../css/About.css";

const About = () => {
    return (
        <div className="about-container" id="about">
        <div className="news-section">
            <h1><span>Breaking News </span>From Around The World</h1>
            <p>
            Get real-time updates on global events with our comprehensive news
            coverage powered by NewsAPI.
            </p>
            <button className="read-more">Read Full Story</button>
        </div>
        <div className="news-placeholder">
            <h3>Getting the recent updates...</h3>
        </div>
        </div>
    );
};

export default About;