import "./Dashboard.scss";
import Hero from "./components/Hero/Hero";
import { useTripContext } from "../../context/TripContext";

export default function Dashboard() {
  const { tripData } = useTripContext();
  const hasInquiry = !!tripData;

  const handleStartPlanning = () => {
    console.log("Start planning clicked");
    // TODO: Scroll to header form or open trip modal
  };

  if (!hasInquiry) {
    // Pre-inquiry: Show hero section
    return (
      <div className="dashboard">
        <Hero onStartPlanning={handleStartPlanning} />
      </div>
    );
  }

  // Post-inquiry: Show trip planning view (to be implemented)
  return (
    <div className="dashboard dashboard--planning">
      <div className="dashboard__sidebar">
        <p>Trip Planner Sidebar (Coming soon)</p>
      </div>
      <div className="dashboard__map">
        <p>Map View (Coming soon)</p>
      </div>
    </div>
  );
}
