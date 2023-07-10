import ReactGA from 'react-ga';

export const initGA = () => {
  ReactGA.initialize(process.env.GOOGLE_ANALYTICS_ID); // Replace with your Measurement ID
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};
