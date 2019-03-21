import moxios from "moxios";
import { stub, spy } from "sinon";
import MapActions from "src/Actions/MapActions";

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
      geolocationStub.restore();
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

  describe('getUsersLocation', () => {
      it('gets the users location and calls the callback with the coordinates', () => {
        const updateSpy = spy()
      })
  })
});
