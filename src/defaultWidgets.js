import CurrentDateTime from "./widgets/CurrentDateTime";
import CurrentWeather from "./widgets/CurrentWeather";
import BusTimes from "./widgets/BusTimes";
import StudioMessages from "./widgets/StudioMessages";
import LastPlayed from "./widgets/LastPlayed";
import Marketing from "./widgets/Marketing";
import Webcams from "./widgets/Webcams";

/**
 * defaultWidgets.js - An array of default widgets, that defines and describes each widget.
 *
 * Widgets should be written so as to transform the *exact* data response from any http(s) request, defined by the dataURL.
 *
 * @param {string} name - The verbose name of the widget.
 * @param {component} component - A direct reference to the component function.
 * @param {string} dataURL - The URL from which to fetch data to feed the component.
 * @param {number} refreshInterval - The frequency the dataURL should be visited.
 * @param {object} props - An object to be passed to the widget as props.
 * --> @param {object} err - An object containing any error information.
 * --> @param {object} data - An object containing the exact data from the endpoint response.
 */
export const defaultWidgets = [
  {
    name: "Date & Time",
    component: CurrentDateTime,
    dataURL: null,
    refreshInterval: null,
    props: { err: null, data: {} }
  },
  {
    name: "Weather",
    component: CurrentWeather,
    dataURL: "/api/weather",
    refreshInterval: 480,
    props: {
      err: null,
      data: null
    }
  },
  {
    name: "Bus Times",
    component: BusTimes,
    dataURL: "/api/bus",
    refreshInterval: 180,
    props: {
      err: null,
      data: null
    }
  },
  {
    name: "Messages",
    component: StudioMessages,
    dataURL: "/api/messages",
    refreshInterval: 240,
    props: {
      err: null,
      data: null
    }
  },
  {
    name: "Last Played",
    component: LastPlayed,
    dataURL: "/api/lastplayed",
    refreshInterval: 45,
    props: {
      err: null,
      data: null
    }
  },
  {
    name: "Marketing",
    component: Marketing,
    dataURL: "/api/images/marketing",
    refreshInterval: 1800,
    props: {
      err: null,
      data: null
    }
  },
  {
    name: "Webcam ST1",
    component: Webcams,
    dataURL: null,
    refreshInterval: null,
    props: {
      err: null,
      data: {
        success: true,
        webcam: {
          name: "Studio One",
          images: [
            {
              id: "st1_dj",
              url: "https://webcams.radio.warwick.ac.uk/st1-dj.jpg"
            },
            {
              id: "st1_guest",
              url: "https://webcams.radio.warwick.ac.uk/st1-guest.jpg"
            }
          ]
        }
      }
    }
  },
  {
    name: "Webcam ST2",
    component: Webcams,
    dataURL: null,
    refreshInterval: null,
    props: {
      err: null,
      data: {
        success: true,
        webcam: {
          name: "Studio Two",
          images: [
            {
              id: "st1_dj",
              url: "https://webcams.radio.warwick.ac.uk/st2-dj.jpg"
            },
            {
              id: "st1_guest",
              url: "https://webcams.radio.warwick.ac.uk/st2-guest.jpg"
            }
          ]
        }
      }
    }
  }
];