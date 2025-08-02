import React from "react";
import OfficeCard from "./components/OfficeCard";

const officeSpaces = [
  {
    id: 1,
    name: "Cognizant Technology Solutions1",
    rent: 55000,
    address: "F3, Manyata Tech Park Rd, Manayata Tech Park, Nagavara, Bengaluru, Karnataka 560045",
    image: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4noI_rk1TYbyN9_8VSxACq_OVMytTDkOMhDLIlu0NJdlsXy-ObFwnrAAEgei_zxDx6GygldYyYamHbz6xo5S9xYUQAa_9HcNYn_UjWokBly9rW5Uc-r0uE-wHC1hA9703VKMn4KukQ=s1360-w1360-h1020-rw",
  },
  {
    id: 2,
    name: "Cognizant Technology Solutions2",
    rent: 75000,
    address: "Kundalahalli Colony, Brookefield, Bengaluru, Karnataka 560037",
    image: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrI6frDs-269_vag7IZ9_z9t1XmupFrY_L9pF1Xqb6qX_Gleokz3iGG5Ev-2v6iysUczzBn0Ogt3xXKPak32YGgP0WGn6oRq6AtT-C7UHThccjZmXBVrrvxOtffwTn2_wetceDuiA=s1360-w1360-h1020-rw",
  },
];

const App = () => {
  return (
    <div
      style={{
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
        padding: 24,
        maxWidth: 960,
        margin: "0 auto",
      }}
    >
      <header style={{ marginBottom: 24, textAlign: "center" }}>
        <h1>Office Space Rental App</h1>
        <p>Find your ideal workspace based on rent and location.</p>
      </header>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 8,
          justifyContent: "space-between",
        }}
      >
        {officeSpaces.map((office) => (
          <OfficeCard key={office.id} office={office} />
        ))}
      </div>
    </div>
  );
};

export default App;
