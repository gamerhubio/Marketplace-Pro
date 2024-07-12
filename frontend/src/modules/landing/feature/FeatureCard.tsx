import styled from "styled-components";
import arrowDown from "./arrow-down.png"

export const FeatureCardStyle = styled.div`
    max-width: 750px;
    div {
        display: flex;
        align-items: center;
    }
    h3 {
        font-family: Space Grotesk;
        font-size: 32px;
        font-weight: 700;
        line-height: 40px;
        text-align: left;
        margin-left: 6px;
        strong {
            color: #CE0076;
        }
    }
    p {
        font-family: Space Grotesk;
        font-size: 20px;
        font-weight: 700;
        line-height: 32px;
        text-align: left;
        color: #B4B6BB;
    }
    @media screen and (max-width: 768px) {
        h3 {
          font-size: 20px;
          line-height: 28px;
        }
        p {
            font-size: 14px;
            line-height: 20px;
        }
    }

`

interface IProps {
    keynote: string;
    title: string;
    description: string;
    dataAos: string;
    end?: boolean;
}

const FeatureCard = ({ keynote, title, description, end, dataAos } : IProps) => {

    return (
        <div data-aos={dataAos} style={{display: "flex", justifyContent: end ? "end" : "start"}}>
            <FeatureCardStyle>

                <div>
                    <img src={arrowDown} alt="i" />
                    <h3>
                        <strong> {keynote} </strong>{title}
                    </h3>
                </div>

                <p>{description}</p>   

            </FeatureCardStyle>
        </div>
    )
}

export default FeatureCard