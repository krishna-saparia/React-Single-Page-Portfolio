import styled from 'styled-components';

export const InfoContainer = styled.div`
    color: #fff;
    background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#010606')};

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 860px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;

    @media screen and (max-width: 768px) {
        height: 1000px;
    }
`;

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};
    
    @media screen and (max-width: 768px) {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
        justify-content: center;
        ${'' /* text-align: center; */}
    }
`;

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`;

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`;

export const TextWrapper = styled.div`
    max-width: 540x;
    padding-top: 0;
    padding-bottom: 60px;
`;

export const TopLine = styled.div`
    color: #773db4;
    font-size: 32px;
    line-height: 16px;
    font-weight: 700;
    latter-spacing: 1.4px;
    text-transformation: uppercase;
    margin-bottom: 16px;
`;

export const Heading = styled.h1`
    color: ${({lightText}) => (lightText ? '#f7f8a0' : '#010606')};
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    margin-bottom: 24px;
    
    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

export const SubTitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height:24px;
    color: ${({darkText}) => (darkText ? '#010606' : '#fff')};
`;

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`;

export const ImgWrap = styled.div`
    max-width: 400px;
    height: 100%;
`

export const Img = styled.img`
    width: 100%;
    ${'' /* height: 140%; */}
    margin: 0 0 30px 0;
    padding-right: 0;
`;
