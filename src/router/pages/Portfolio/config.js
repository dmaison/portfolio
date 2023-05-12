// import MyAnalogLogo from './media/logo-myanalog.svg';
import MyAnalogSS from './media/ss-myanalog.png';
import PstSS from './media/ss-pst.png';
import sudokuSS from './media/ss-sudoku.png';
import CoeSS from './media/ss-coe.png';
import portfolioSS from './media/ss-portfolio.png';
import WtnSS from './media/ss-wtn.png';
import { ReactComponent as ReactIcon } from './media/react.svg';
import { ReactComponent as NodeIcon } from './media/node.svg';
import { ReactComponent as SolidityIcon } from './media/solidity.svg';
import { ReactComponent as AwsIcon } from './media/aws.svg';
import { ReactComponent as OpenCvIcon } from './media/openCV.svg';
import { ReactComponent as OpenAiIcon } from './media/openai.svg';
import { ReactComponent as MongoIcon } from './media/mongodb.svg';
import { ReactComponent as IpfsIcon } from './media/ipfs.svg';

/**
 * Array of job histories
 * @type {array}
 */
export const PIECES = [
    {
        name: "Chain of Events",
        image: CoeSS,
        owner: 'Personal',
        description: `
            A tool designed to allow communities to create immutable evidence boards, recounting a crime, and publish it permantly 
            to the Ethereum, and soon PulseChain, blockchains as an NFT.<br><br>
            Finally an NFT with a practical use.
        `,
        featuredTechnologies: [{
                label: 'ReactJS',
                icon: ReactIcon
            },
            {
                label: 'NodeJS',
                icon: NodeIcon
            },
            {
                label: 'Solidity',
                icon: SolidityIcon
            },
            {
                label: 'Lambda, Rekognition, & many more',
                icon: AwsIcon
            },
            {
                label: 'OpenAI',
                icon: OpenAiIcon
            },
            {
                label: 'IPFS',
                icon: IpfsIcon
            }
        ],
        url: "https://chainofevents.app"
    },
    {
        name: "Portfolio Website",
        image: portfolioSS,
        owner: 'Personal',
        description: "A basic React website meant to showcase my expertise in the area of web development, among some other things.",
        featuredTechnologies: [{
            label: 'ReactJS',
            icon: ReactIcon
        },
        {
            label: 'S3 & Route53',
            icon: AwsIcon
        }],
        github: 'https://github.com/dmaison/portfolio'
    },
    {
        name: "Sudoku Game",
        image: sudokuSS,
        description: "A sudoku game, built in React. Includes functionality of saving and loading games, resetting a current game, difficulties selection, and tracks personal records.",
        owner: 'Personal',
        featuredTechnologies: [{
            label: 'ReactJS',
            icon: ReactIcon
        },
        {
            label: 'S3 & Route53',
            icon: AwsIcon
        }],
        url: "http://games.dave.maison/",
        github: 'https://github.com/dmaison/sudoku'
    },
    {
        name: "myAnalog",
        image: MyAnalogSS,
        owner: 'Analog Devices, Inc.',
        description: "Application allows engineers who use analog.com website have a more personalized experience, build and manage engineer projects, save products, manage their notifications, and more!",
        featuredTechnologies: [{
            label: 'ReactJS',
            icon: ReactIcon
        }],
        url: "https://my.analog.com"
    },
    {
        name: "What's Their Name?",
        image: WtnSS,
        owner: 'Personal',
        description: "An application that utilizes AI to identify a person based on a user input description, image, and/or video.<br><br>This was removed from prodution due to its very alpha state. After becomming a father, I don't know if I'll ever have time to finish it.",
        featuredTechnologies: [
            {
                label: 'ReactJS',
                icon: ReactIcon
            },
            {
                label: 'NodeJS',
                icon: NodeIcon
            },
            {
                label: 'MongoDB',
                icon: MongoIcon
            },
            {
                label: 'OpenCV',
                icon: OpenCvIcon
            },
            {
                label: 'EC2, S3',
                icon: AwsIcon
            }
        ]

        
    },
    {
        name: "Parametric Search Table",
        image: PstSS,
        owner: 'Analog Devices, Inc.',
        featuredTechnologies: [{
            label: 'ReactJS',
            icon: ReactIcon
        }],
        description: "Application allows engineers to select and compare parts based on user input specifications",
        url: "https://www.analog.com/en/parametricsearch/12998"
    }
    
];