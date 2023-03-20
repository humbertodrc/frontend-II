import { Initializable, TrackingSoftware } from 'features/tracking/tracking.types';

class AmplitudeTrackingSoftware implements Initializable, TrackingSoftware {
  private initialized = false;

  initialize(): void {
    this.initialized = true;
    // DO EXTRA LOGIC
  }

  trackEvent(eventName: string, location: string): void {
    if (this.initialized) {
      console.log('Event: ' + eventName + ' dispatched from: ' + location);
    }
  }
}

export default AmplitudeTrackingSoftware;
