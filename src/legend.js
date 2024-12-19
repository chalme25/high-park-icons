function Legend() {
  return (
    <div className="legend">
      <h2>Legend</h2>
      <div className="grid-legend">
        <div className="legend-details">
          <span className="icon-size legend-colour"></span>
          <p>Park Boundary</p>
        </div>
        <div className="legend-details">
          <img
            src="/high-park-icons/imgs/high-park-icon-fish.png"
            alt="A fish icon."
            className="icon-size"
          />
          <p>Fishing Pier</p>
        </div>
        <div className="legend-details">
          <img
            src="/high-park-icons/imgs/high-park-icon-sakura.png"
            alt="A sakura icon."
            className="icon-size"
          />
          <p>Cherry Blossoms</p>
        </div>
        <div className="legend-details">
          <img
            src="/high-park-icons/imgs/high-park-icon-soccer.png"
            alt="A soccer ball icon."
            className="icon-size"
          />
          <p>Football Pitch</p>
        </div>
        <div className="legend-details">
          <img
            src="/high-park-icons/imgs/high-park-icon-tower.png"
            alt="A tower icon."
            className="icon-size"
          />
          <p>Play Structure</p>
        </div>
        <div className="legend-details">
          <img
            src="/high-park-icons/imgs/high-park-icon-zoo.png"
            alt="A flamingo icon."
            className="icon-size"
          />
          <p>High Park Zoo</p>
        </div>
      </div>
      <p className="attribution">Map Data: Toronto Open Data.</p>
    </div>
  );
}

export default Legend;
