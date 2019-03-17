import React, { useState, useEffect } from "react";
import Map from "../components/Map/Map";
import * as Actions from "src/Actions";

const MapContainer = props => {
  // we'll feed the user's current location to the maps at first
  const [usersLocation, setUsersLocation] = useState({});

  useEffect(() => {
    const getUsersLocation = async () => {
      const coords = await Actions.fetchUsersCurrentLocation();
      setUsersLocation(coords);
    };
    getUsersLocation();
  }, []);

  return <Map initialRegion={usersLocation} />;
};

export default MapContainer;
