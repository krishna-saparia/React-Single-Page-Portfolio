import styled from 'styled-components'

export const ServiceContainer = styled.div`
    max-height: 1100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #010606;

    @media screen and (max-width: 760px) {
        max-height: 2500px;
    }
    
    @media screen and (max-width: 480px) {
        max-height: 2500px;
    }`

export const ServicesWrapper = styled.div`
    max-width: 1000px;
    max-height: 2500px;
    margin: 0 auto 30px auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0;
    
    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr;
    }
    
    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }`

export const ServicesCard = styled.div`
        display: flex;
        background: #fff;
        justify-content: flex-start;
        flex-direction: column;
        align-items: center;
        border-radius: 10px;
        height: 282px;
        padding: 30px;
        width: 340px;
        box-shadow: 0 1px 3px rgba(0,0,0,0.2);
        transition: all 0.2s ease-in-out;
        
        &:hover {
            transform: scale(1.02);
            transition: all 0.2s ease-in-out;
            cursor: pointer;
        }`

export const ServicesIcon = styled.img`
    height: 160px;
    width:160px;
    margin-bottom: 10px;
    `
export const ServicesH1 = styled.h1`
    font-size: 2.5rem;
    color: #773db4;
    margin: 30px auto 32px auto;

@media screen and (max-width: 480px) {
    font-size: 2rem;
}
`

export const ServicesH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
    `
export const ServicesP = styled.p`
    font-size: 1rem;
    text-align: center;
    `
export const bold = styled.b`
    font-weight: 400px;
    `