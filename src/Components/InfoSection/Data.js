import svg8 from '../../images/svg8.svg';
import svg10 from '../../images/svg10.svg';
import svg3 from '../../images/svg3.svg';
import svg4 from '../../images/svg4.svg';

export const homeObjOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDec: true,
    topLine: "student.webDev()",
    headLine: 'I\'m a Student of computer science ',
    description: 'Developing Skills for Full Stack Developer, \n With experience of working on ReactJs, Angular and spring boot frameworks; Build Games and AR app using Unity. ',
    buttonLabel: 'Click .toResume()',
    imgStart: false,
    img: svg8,
    alt: 'about',
    dark: true,
    primary: true,
    darkText: false
};

export const homeObjTwo = {
    id: 'resume',
    lightBg: true,
    lightText: false,
    lightTextDec: false,
    topLine: 'resume();',
    headLine: 'Download Resume',
    description: '',
    buttonLabel: 'Download',
    imgStart: true,
    img: svg10,
    alt: 'resume',
    dark: false,
    primary: false,
    darkText: true,
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