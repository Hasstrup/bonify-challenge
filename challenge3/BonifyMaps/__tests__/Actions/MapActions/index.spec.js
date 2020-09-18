import moxios from "moxios";
import { stub, spy } from "sinon";
import * as MapActions from "src/Actions/MapActions";
import GoogleMapData from "../../../__mocks__/googleData";


const geolocationStub = stub(navigator.geolocation, "getCurrentPosition");
const regionStub = stub(MapActions, "regionFromLatLong");

const mockCoords = {
  coords: {
    latitude: 0.01,
    longitude: 0.02,
    accuracy: 10
  }
};

describe("Map Actions", () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  geolocationStub.callsFake(callback => {
    callback(mockCoords);
  });

  describe("fetchUsersCurrentLocation", () => {
    afterAll(() => {
      regionStub.restore();
    });

    it("gets the current location of the user", async () => {
      await MapActions.fetchUsersCurrentLocation();
      expect(geolocationStub.called).toBe(true);
    });
  });

  describe("regionFromLatLong", () => {
    it("returns the longitudeDelta and Longitude delta of a region", () => {
      const coords = {
        latitude: 4,
        longitude: 6,
        accuracy: 10
      };
      const result = MapActions.regionFromLatLong(coords);
      expect(result.hasOwnProperty("latitudeDelta")).toBe(true);
      expect(result.hasOwnProperty("longitudeDelta")).toBe(true);
      expect(result.latitudeDelta).toBe(coords.accuracy / (111.32 * 1000));
    });
  });

  describe("getUsersLocation", () => {
    beforeAll(() => {
      geolocationStub.callsFake(callback => {
        callback(mockCoords);
      });
    });
    it("gets the users location and calls the callback with the coordinates", async () => {
      const updateSpy = spy();
      await MapActions.getUsersLocation(updateSpy);
      expect(updateSpy.called).toBe(true);
    });
  });

  describe("handleLocationChange", () => {
    it("calls the success callback after successful retrieval of the data", async () => {
      const successSpy = spy();
      await MapActions.handleLocationChange(mockCoords, successSpy, () => {});
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({ status: 200, response: { data: GoogleMapData } });
      });
      expect(successSpy.called).toBe(true);
      const {
        results: [desired]
      } = GoogleMapData;
      const result = {
        address: desired.formatted_address,
        latLng: `${desired.lat},${desired.lng}`,
        region: MapActions.regionFromLatLong({
          latitude: desired.lat,
          longitude: desired.lng,
          accuracy: 120
        })
      };
      expect(successSpy.calledWith(result)).toBe(true);
    });
  });
});
