export type TrackingSoftwareType = 'GOOGLE_ANALYTICS' | 'FACEBOOK_PIXEL' | 'AMPLITUDE';

export interface TrackingSoftware {
  trackEvent: (eventName: string, location: string) => void;
}

export interface Initializable {
  initialize: () => void;
}

export function isInitializable(
  software: TrackingSoftware | Initializable
): software is Initializable {
  //magic happens here
  return (<Initializable>software).initialize !== undefined;
}
