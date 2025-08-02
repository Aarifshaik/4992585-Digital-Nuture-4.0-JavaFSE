const OfficeCard = ({ office }) => {
    const { name, rent, address, image } = office;
  
    const rentColor =
      rent < 60000 ? "red" : rent > 60000 ? "green" : "black";
  
    return (
      <div
        style={{
          border: "1px solid #ccc",
          borderRadius: 8,
          padding: 16,
          maxWidth: 320,
          marginBottom: 16,
          boxShadow: "0 4px 8px rgba(0,0,0,0.05)",
        }}
      >
        <h3>{name}</h3>
        <img
          src={image}
          alt={`Office space: ${name}`}
          style={{ width: "100%", borderRadius: 4, marginBottom: 8 }}
        />
        <p>
          <strong>Address:</strong> {address}
        </p>
        <p>
          <strong>
            Rent:{" "}
            <span style={{ color: rentColor }}>
              ₹{rent.toLocaleString()}
            </span>
          </strong>
        </p>
      </div>
    );
  };
  
export default OfficeCard;