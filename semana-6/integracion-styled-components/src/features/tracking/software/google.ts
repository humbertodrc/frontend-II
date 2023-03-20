import { TrackingSoftware } from 'features/tracking/tracking.types';

class GoogleTrackingSoftware implements TrackingSoftware {
  trackEvent(eventName: string, location: string): void {
    console.log('Google tracking event: ' + eventName + ' from location: ' + location);
  }
}

export default GoogleTrackingSoftware;
