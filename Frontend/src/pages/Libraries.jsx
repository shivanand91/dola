import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api";

export default function Libraries() {
  const [libraries, setLibraries] = useState([]);

  useEffect(() => {
    api
      .get("/libraries")
      .then((res) => {
        console.log("API Response:", res.data);

        // Backend response could be an array or object with libraries key
        const libs = Array.isArray(res.data)
          ? res.data
          : Array.isArray(res.data.libraries)
          ? res.data.libraries
          : [];

        setLibraries(libs);
      })
      .catch((err) => {
        console.error("Error fetching libraries:", err);
        setLibraries([]); // fallback
      });
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Available Libraries</h2>
      {libraries.length === 0 ? (
        <p>No libraries available.</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {libraries.map((lib) => (
            <div key={lib._id} className="card p-4 border rounded shadow">
              <h3 className="text-lg font-semibold">{lib.name}</h3>

              {/* Handle location if it's object (GeoJSON) or string */}
              <p className="text-sm text-gray-600">
                {lib.location
                  ? typeof lib.location === "string"
                    ? lib.location
                    : lib.location.coordinates
                    ? `Lat: ${lib.location.coordinates[1]}, Lng: ${lib.location.coordinates[0]}`
                    : "Location data not available"
                  : "Location not available"}
              </p>

              <p className="text-sm text-gray-500">₹{lib.hourlyRate} / hr</p>
              <Link
                to={`/libraries/${lib._id}`}
                className="mt-3 inline-block px-4 py-2 bg-teal-500 text-white rounded"
              >
                View
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
