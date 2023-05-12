import { ReactComponent as ADILogo } from "./media/logo-adi.svg";
import { ReactComponent as USAFLogo } from "./media/logo-usaf.svg";
import { ReactComponent as InterlinkLogo } from "./media/logo-interlink.svg";

/**
 * Array of job histories
 * @type {array}
 */
export const HISTORY = [
    {
        company: "Analog Devices, Inc",
        image: ADILogo,
        positions: [
            {
                years: {
                    start: 2020
                },
                description: "Coordinated with business owners, analysts, and stake holders to realize front-end execution. Directed and coordinated all aspects of front-end development on the commerical website and worked with section leads of other departments to meet business goals, innovate, and move the commercial website forward.",
                title: "Senior UI Architect",
            },
            {
                years: {
                    start: 2017,
                    end: 2020
                },
                description: "Lead a team to develop and maintain the commercial website and convert the current code base to implement SSR and client side React apps.",
                title: "Senior Front-End Developer",
            }
        ],
        url: "https://analog.com"
    },
    {
        company: "interlinkONE, Inc.",
        image: InterlinkLogo,
        positions: [
            {
                years: {
                    start: 2013,
                    end: 2017
                },
                description: "Used skills with Node, Angular, SQL, ASP, XHTML, CSS, Javascript, and AJAX, while working as part of a team to develop innovative logistics, marketing, and contact management technologies.",
                title: "Senior Developer & Tech Support",
            },
            {
                years: {
                    start: 2006,
                    end: 2009
                },
                description: "Worked directly with the Fuels Service Center at Dover AFB to distribute jet fuel and ground fuels, as well as issuing cryogenics products in a timely manner. Also, performed hydrant systems operations, including refuels, defuels, flushes, transfers, and receipts",
                title: "Junior Developer",
            }
        ],
        url: "https://interlinkone.com/"
    },
    {
        company: "United States Air Force",
        image: USAFLogo,
        positions: [
            {
                years: {
                    start: 2013,
                    end: 2018
                },
                description: "Worked with the mission operations control center at Westover ARB to coordinate and dispatch personnel to successfully refuel aircraft in a timely and efficient manner. Also, maintained accurate billing records and accounting for all fuels and cryogenics products.",
                title: "Fuels Service Center Supervisor and Lead Accountant",
            },
            {
                years: {
                    start: 2009,
                    end: 2013
                },
                description: "Worked directly with the Fuels Service Center at Dover AFB to distribute jet fuel and ground fuels, as well as issuing cryogenics products in a timely manner. Also, performed hydrant systems operations, including refuels, defuels, flushes, transfers, and receipts",
                title: "Fuels Specialist and Fuels Service Center Accountant",
            }
        ],
        url: "https://www.airforce.com/careers/detail/fuels-specialist/"
    }
];