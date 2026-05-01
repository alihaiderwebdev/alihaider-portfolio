import { stats } from "../../data/portfolio";
import "./Stats.css";

export default function Stats() {
  return (
    <div className="stats-banner">
      <div className="container stats-banner__inner">
        {stats.map((stat, i) => (
          <div key={i} className="stats-banner__item">
            <span className="stats-banner__val">{stat.value}</span>
            <span className="stats-banner__lbl">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}