import amplitude from 'amplitude-js';

export const Amplitude = (eventName = '', payload = {}) => {
  setTimeout(() => {
    amplitude.getInstance().logEvent(eventName, payload);
  }, 100);
};
