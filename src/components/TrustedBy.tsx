import React from 'react'

import styled from '@emotion/styled'
import { sizes } from '../styles/variables'

const StyledTrustedBy = styled.section<{ dontDisplayTheArrow?: boolean }>`
    /* ------------------------------------------- */
    /* ----- Section Trusted By ----- */
    /* ------------------------------------------- */

    padding: 0rem 0 4rem;
    margin-top: 2rem;

    h2 {
        margin-bottom: 2rem;
    }

    .logos {
        display: flex;
        transition: all 0.6s cubic-bezier(0.22, 1, 0.36, 1);
        padding: 1rem 0 1rem;
        overflow-x: scroll;

        a {
            display: flex;
            border: 2px solid transparent;

            &:not(:last-of-type) {
                margin-right: 4.5rem;
            }
        }
    }

    .grey-logo {
        filter: grayscale(100%) contrast(0%) brightness(116%);
        -webkit-filter: grayscale(100%) contrast(0%) brightness(116%);
    }

    .fcc {
        filter: grayscale(100%) contrast(0%);
        -webkit-filter: grayscale(100%) contrast(0%);
        width: 14rem;

        @media(max-width: ${sizes.breakpoints.md}) {
            width: 13rem;
        }

        @media(max-width: ${sizes.breakpoints.md}) {
            width: 12rem;
        }
    }

    .dwave-logo {
        transform: scale(1.2);
        filter: grayscale(100%) contrast(0%) brightness(112%);
        -webkit-filter: grayscale(100%) contrast(0%) brightness(112%);
    }

    .four-geeks {
        transform: scale(.9);
    }

    .gatsby-logo {
        filter: grayscale(100%) opacity(47%);
        -webkit-filter: grayscale(100%) opacity(47%);
    }

    .vue-logo {
        filter: grayscale(100%) opacity(62%);
        -webkit-filter: grayscale(100%) opacity(62%);
    }
`

const StyledBrandImage = styled.img<{ transform?: string }>`
    width: 11.6rem;

    @media(max-width: ${sizes.breakpoints.lg}) {
        width: 11rem;   
    }

    @media(max-width: ${sizes.breakpoints.md}) {
        width: 9rem;
    }

    @media(min-width: ${sizes.breakpoints.lg}) {
        transform: ${ ({ transform }) => transform ? transform : 'none'};
    }
`

interface Brand {
    alt: string
    url: string
    svg: string
    transform?: string,
    className?: string
}

interface TrustedByProps {
    brands: Brand[]
}



const TrustedBy = ({ brands }: TrustedByProps) => (
    <StyledTrustedBy>
        <div className="row">
            <div className="logos">
                {
                    brands.map((b, i) => (
                        <a href={b.url} target="_blank" key={i} className="trustedBy">
                            <StyledBrandImage
                                src={b.svg}
                                alt={b.alt}
                                transform={b.transform}
                                className={b.className}
                            />
                        </a>
                    ))
                }
            </div>
        </div>
    </StyledTrustedBy>
)

export default TrustedBy
