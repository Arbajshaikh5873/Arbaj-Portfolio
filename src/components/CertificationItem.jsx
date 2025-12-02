import React from "react";

function CertificationItem({ cert }) {
  return (
    <div className="cert-item">
      <h5>{cert.name}</h5>
      <small>{cert.date}</small>
    </div>
  );
}

export default CertificationItem;
