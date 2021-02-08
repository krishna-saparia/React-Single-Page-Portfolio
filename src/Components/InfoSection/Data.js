import svg1 from '../../images/svg1.svg';
import svg2 from '../../images/svg2.svg';
import svg3 from '../../images/svg3.svg';
import svg4 from '../../images/svg4.svg';

export const homeObjOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDec: true,
    topLine: "Premium Bank",
    headLine: 'Unlimited Transaction with zero fees.',
    description: 'Get access to our exclusive app that allows you to send unlimited transaction without getting charged any fees.',
    buttonLabel: 'Get Started',
    imgStart: false,
    img: svg1,
    alt: 'Car',
    dark: true,
    primary: true,
    darkText: false
};

export const homeObjTwo = {
    id: 'discover',
    lightBg: true,
    lightText: false,
    lightTextDec: false,
    topLine: 'Unlimited Access',
    headLine: 'Unlimited Transaction with zero fees.',
    description: 'Get access to our exclusive app that allows you to send unlimited transaction without getting charged any fees.',
    buttonLabel: 'Learn More',
    imgStart: true,
    img: svg2,
    alt: 'Piggy Bank',
    dark: false,
    primary: false,
    darkText: true
};

// export const homeObjThree = {
//     id: 'services',
//     lightBg: false,
//     lightText: true,
//     lightTextDec: true,
//     topLine: "Services",
//     headLine: 'Unlimited access and zero maintainance',
//     description: 'Get access to our exclusive app that allows you to send unlimited transaction without getting charged any fees and zero maintainance.',
//     buttonLabel: 'Services',
//     imgStart: false,
//     img: svg4,
//     alt: 'service',
//     dark: true,
//     primary: true,
//     darkText: false
// };

export const homeObjThree = {
    id: 'signup',
    lightBg: true,
    lightText: false,
    lightTextDec: false,
    topLine: "Connect me",
    headLine: 'Do Contact',
    description: 'Get Connected by clicking it.',
    buttonLabel: 'Sign Up',
    imgStart: false,
    img: svg3,
    alt: 'paper',
    dark: false,
    primary: false,
    darkText: true
};