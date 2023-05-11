// import MyAnalogLogo from './media/logo-myanalog.svg';
import MyAnalogSS from './media/ss-myanalog.png';
import PstSS from './media/ss-pst.png';
import { ReactComponent as ReactIcon } from './media/react.svg';
import { ReactComponent as NodeIcon } from './media/node.svg';
import { ReactComponent as SolidityIcon } from './media/solidity.svg';
import { ReactComponent as AwsIcon } from './media/aws.svg';

/**
 * Array of job histories
 * @type {array}
 */
export const PIECES = [
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
        name: "Parametric Search Table",
        image: PstSS,
        owner: 'Analog Devices, Inc.',
        featuredTechnologies: [{
            label: 'ReactJS',
            icon: ReactIcon
        }],
        description: "Application allows engineers to select and compare parts based on user input specifications",
        url: "https://my.analog.com"
    },
    {
        name: "Sudoku Game",
        description: "A sudoku game, built in react. Includes functionality of saving and loading games, resetting a current game, difficulties selection, and tracks personal records.",
        owner: 'Personal',
        featuredTechnologies: [{
            label: 'ReactJS',
            icon: ReactIcon
        },
        {
            label: 'S3 & Route53',
            icon: AwsIcon
        }],
        url: "http://games.dave.maison/"
    },
    {
        name: "What's Their Name?",
        image: "http://assets.dave.maison/img/logo/whats-their-name-white.png",
        owner: 'Personal',
        description: "An application that utilizes computer vision and AI to identify a person based on a user input description, image, and/or video.<br><br><em>This was removed from prodution due to its very alpha state. I expect to finish this \"soon\".</em>",
        featuredTechnologies: [{
            label: 'ReactJS',
            icon: ReactIcon
        },
        {
            label: 'NodeJS',
            icon: NodeIcon
        }]
    },
    {
        name: "Chain of Events",
        image: "http://assets.dave.maison/img/logo/whats-their-name-white.png",
        owner: 'Private',
        description: "A tool designed to allow communities to create immutable evidence boards, recounting a crime or conspiracy, and publish it permantly to the Ethereum blockchain as an NFT.",
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
            label: 'Lambda, Rekognition, API Gateway, S3, Route53, & CloudFront',
            icon: AwsIcon
        }
    ],
        url: "https://chainofevents.app"
    }
    
];