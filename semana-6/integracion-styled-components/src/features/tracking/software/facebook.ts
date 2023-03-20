import { Initializable, TrackingSoftware } from 'features/tracking/tracking.types';

class FacebookTrackingSoftware implements Initializable, TrackingSoftware {
  private initialized = false;

  initialize(): void {
    this.initialized = true;
    // DO EXTRA LOGIC
  }

  /**
   * Location is ignored in this example
   * @param eventName the tracked event
   */
  trackEvent(eventName: string): void {
    if (this.initialized) {
      console.log('Facebook tracking event: ' + eventName);
    }
  }
}

export default FacebookTrackingSoftware;
