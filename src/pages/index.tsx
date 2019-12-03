import React from 'react'

import styled from '@emotion/styled'
import { Global, css } from '@emotion/core'
import { Link } from 'gatsby'
import { colors, sizes, shadows, borders } from '../styles/variables'

import IndexLayout from '../layouts/index'
import ReflectionScreenshot from '../resources/reflection-screenshot.png'
import IconLine from '../resources/icon-line.png'
import HourGlass from '../resources/hourglass.png'
import ArrowOnTarget from '../resources/arrow-on-target.png'
import ToolIntegration from '../resources/tool-integration.svg'
import FullDevEnvironments from '../resources/full-dev-environments.png'
import ReadyToCode from '../components/ReadyToCode'
import PrefixImage from '../resources/prefix-image.png'
import { projects } from '../utils/projects'
import Project from '../components/Project'
import AntDesignWorkspace from '../resources/ant-design-workspace.png'
import Details from '../components/Details'
import TrustedBy from '../components/TrustedBy'
import DWave from '../resources/dwave.svg'
import AppliToolsLogo from '../resources/aplitools.svg'
import Gatsby from '../resources/gatsby.svg'
import FreeCodeCamp from '../resources/freecodecamp.svg'
import CodeInstituteLogo from '../resources/code.png'
import TheiaIDELogo from '../resources/theia-grey.svg'

const StyledIndexPage = styled.div`
    /* ------------------------------------------- */
    /* ----- Banner ----- */
    /* ------------------------------------------- */


    .banner {
        display: flex;
        padding-bottom: 10rem;

        @media(min-width: ${sizes.breakpoints.lg}) {
            padding-top: 5rem;
        }

        @media(max-width: ${sizes.breakpoints.lg}) {
            flex-direction: column;
            padding-bottom: 5rem;
        }

        &-container {
            background: ${colors.offWhite};
        }

        &__text-box {
            margin-top: 12rem;

            @media(max-width: ${sizes.breakpoints.lg}) {
                text-align: center;
                margin: 5rem 0 0;

                br {
                    display: none;
                }
            }

            @media(min-width: ${sizes.breakpoints.lg}) {
                width: 40%;
            }

        }

        .btn {
            margin: 0 2.5rem 2.5rem 0;

            @media(max-width: ${sizes.breakpoints.sm}) {
                margin: 2.5rem 2.5rem 0 2.5rem;

                &:first-of-type {
                    margin-top: 0;
                }
            }
        }

        &__screenshot {
            width: 100%;

            @media(max-width: ${sizes.breakpoints.lg}) {
                width: 100%;
            }

            @media(min-width: ${sizes.breakpoints.lg}) {
                transform: scale(1.3) translate(6rem, 6rem);

                &-container {
                    width: 50%;
                }
            }
        }

        h1 {
            font-weight: 600;

            span {
                display: block;
                font-weight: 400;
            }
        }

        p {
            margin: 2.5rem 0;
        }
    }

    /* ------------------------------------------- */
    /* ----- Section Intro ----- */
    /* ------------------------------------------- */

    .intro {
        &__box {
            display: flex;

            @media(min-width: ${sizes.breakpoints.md}) {
                width: 50%;
            }

            @media(max-width: ${sizes.breakpoints.md}) {
                max-width: 50rem;

                &:not(:last-child) {
                    margin-bottom: 5rem;
                }
            }

            @media(max-width: ${sizes.breakpoints.sm}) {
                flex-direction: column;
            }

            &-container {
                display: flex;

                @media(max-width: ${sizes.breakpoints.md}) {
                    flex-direction: column;
                    align-items: center;
                }
            }
        }

        &__icon {
            display: flex;
            height: 9rem;
            margin-right: 3rem;
        }

        &__text {
            font-size: 2.2rem;
            font-weight: 400;

            @media(min-width: ${sizes.breakpoints.md}) {
                width: 25ch;
            }

            span {
                font-weight: 600;
            }
        }
    }

    /* ------------------------------------------- */
    /* ----- Line ----- */
    /* ------------------------------------------- */

    .line {
        width: 100vw;

        &-container {
            padding-bottom: 10rem;

            @media(max-width: ${sizes.breakpoints.sm}) {
                padding-bottom: 0;
            }
        }
    }

    /* ------------------------------------------- */
    /* ----- Section Why Gitpod? ----- */
    /* ------------------------------------------- */

    .why-gitpod {

        &__box {
            display: flex;
            border-radius: 3px;
            border: ${borders.light};
            box-shadow: ${shadows.light};

            @media(max-width: ${sizes.breakpoints.md}) {
                flex-direction: column;
            }

            &:not(:last-child) {
                margin-bottom: 8rem;
            }

            &-container {
                display: flex;
                flex-direction: column;
            }

            &--1 {
                @media(min-width: ${sizes.breakpoints.md}) {
                    height: 475px;
                }
            }
        }

        &__text {
            padding: 6rem 4rem;
            background: ${colors.offWhite};

            @media(max-width: 900px) {
                padding: 3rem 1rem;
            }

            p:last-of-type {
                margin-bottom: 5rem;
            }

            @media(min-width: ${sizes.breakpoints.md}) {
                width: 40%;
            }
        }

        &__img {
            height: 100%;
            width: 100%;

            &-container {
                display: flex;
                justify-content: center;
                align-items: center;

                min-height: 36rem;
                @media(min-width: ${sizes.breakpoints.md}) {
                    width: 60%;
                }
            }
        }

        img {
            transition: transform 0.7s cubic-bezier(0.55, 0.085, 0.68, 0.53);
        }

        .toggle {
            display: inline-block;
            padding: 1rem 3rem;
            font-weight: 600;
            color: ${colors.white};
            background: ${colors.offWhite2};
            border: none;

            @media(max-width: 1100px) {
                font-size: 1.4rem;
                padding: .5rem 1rem;
            }

            &--active {
                background: ${colors.link};
            }
        }

    }

    /* ------------------------------------------- */
    /* ----- Section Testimonials ----- */
    /* ------------------------------------------- */

    .teimonials {
        background: ${colors.offWhite};
    }

    /* ------------------------------------------- */
    /* ----- Section Get Started ----- */
    /* ------------------------------------------- */

    .get-started {

        h3 {
            font-weight: 400;
        }

        &__prefix {
            display: flex;
            margin-bottom: 12rem;
            box-shadow: ${shadows.light};
            border: ${borders.light};

            @media(max-width: ${sizes.breakpoints.md}) {
                flex-direction: column;
            }

            &-image {
                height: 20rem;
                width: 100%;

                @media(max-width: ${sizes.breakpoints.md}) {
                    width: 100%;
                }

                &-container {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 2rem 0;
                    background: ${colors.offWhite};

                    @media(min-width: ${sizes.breakpoints.md}) {
                        width: 65%;
                    }

                    @media(max-width: ${sizes.breakpoints.md}) {
                        flex-direction: columns;
                    }
                }

            }

            &-text {
                margin: 0;
                font-size: 2.1rem;

                @media(max-width: ${sizes.breakpoints.md}) {
                    padding: 5rem 2rem;
                }

                &-container {
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    @media(min-width: ${sizes.breakpoints.md}) {
                        width: 35%;
                    }
                }

                span {
                    color: ${colors.link};
                    font-weight: 600;
                }
            }
        }

        /* ----- Projects ----- */

        &__projects {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;

            @media(max-width: ${sizes.breakpoints.md}) {
                flex-direction: column;
                align-items: center;
            }

            & > .project {
                margin-bottom: 3rem;

                @media(min-wdith: ${sizes.breakpoints.md}) {
                    width: 18%;
                }
            }
        }
    }

    /* ------------------------------------------- */
    /* ----- Section Open Source ----- */
    /* ------------------------------------------- */

    .open-source {
        background: ${colors.offWhite};

        &__content {
            display: flex;
            align-items: center;

            @media(max-width: ${sizes.breakpoints.md}) {
                flex-direction: column;

                img {
                    width: 100%;
                }
            }

            img {
                max-width: 85rem;
            }
        }

        &__text {
            padding: 8rem 2rem;
            background: ${colors.white};
            box-shadow: ${shadows.light};
            transform: translateY(-1rem);
        }
    }

`

const IndexPage: React.SFC<{}> = () => (
    <IndexLayout canonical='/'>
        <StyledIndexPage>
            <Global
                styles={
                    css`
                        html {
                            scroll-behavior: smooth;
                        }
                    `
                }
            />

            {/* ----- Banner ----- */}

            <div className="banner-container">
                <div className="row">
                    <header role="banner" className="banner">
                        <div className="banner__text-box">
                            <h1>
                                Are You Ready-To-Code?
                                <span>Start Instantly. Anywhere.</span>
                            </h1>
                            <p>Gitpod launches ready-to-code dev environments<br />for your Github or Gitlab project with a single click.</p>
                            <a href="#get-started" className="btn btn--normal btn--cta">Start for Free</a>
                            <Link to="/self-hosted/" className="btn btn--normal">Host Yourself</Link>
                        </div>
                        <div className="banner__screenshot-container">
                            <img alt="Gitpod Screenshot" src={ReflectionScreenshot} className="banner__screenshot"/>
                        </div>
                    </header>
                </div>
            </div>

            {/* ----- Section Intro ----- */}

            <section className="intro">
                <div className="intro__box-container row">
                    <div className="intro__box">
                        <img className="intro__icon" alt="Hour Glass" src={HourGlass} />
                        <p className="intro__text">Every day <span>developers waste millions of hours</span> waiting for builds to finish.</p>
                    </div>
                    <div className="intro__box">
                        <img className="intro__icon" alt="Arrow on Wooden Target" src={ArrowOnTarget} />
                        <p className="intro__text"><span>Gitpod eliminates this friction</span> by providing prebuilt, ready-to-code dev environments with just one click.</p>
                    </div>
                </div>
            </section>

            {/* ----- Line ----- */}

            <div className="line-container">
                <img alt="Icon Line" src={IconLine} className="line"/>
            </div>

            {/* ----- Section Trusted By ----- */}

            <TrustedBy
                brands={[
                    {
                        alt: 'DWave Logo',
                        url: 'https://www.dwavesys.com/',
                        svg: DWave
                    },
                    {
                        alt: 'Aplitools Logo',
                        url: 'https://applitools.com/',
                        svg: AppliToolsLogo
                    },
                    {
                        alt: 'Gatsby Logo',
                        url: 'https://www.gatsbyjs.org/',
                        svg: Gatsby
                    },
                    {
                        alt: 'Theia Ide Logo',
                        url: 'https://theia-ide.org',
                        svg: TheiaIDELogo
                    },
                    {
                        alt: 'freeCodeCamp.org',
                        url: 'https://www.freecodecamp.org/',
                        svg: FreeCodeCamp
                    },
                    {
                        alt: 'Code Institute',
                        url: 'https://codeinstitute.net/',
                        svg: CodeInstituteLogo
                    }
                ]}
            />

            {/* ----- Section Why Gitpod? ----- */}

            <div className="row">
                <section className="why-gitpod">
                    <h2>Why Gitpod?</h2>

                    <div className="why-gitpod__box-container">

                        <ReadyToCode />

                        <div className="why-gitpod__box">
                            <div className="why-gitpod__img-container">
                                <img
                                    alt="Full Dev Environments"
                                    src={FullDevEnvironments}
                                    style={{transform: 'translate(-2rem)'}}
                                    className="why-gitpod__img"/>
                            </div>
                            <div className="why-gitpod__text">
                                <h3>Full Dev Environments</h3>
                                <p>Gitpod is not just another online playground IDE, but a full featured dev environment, just like your local IDE.</p>
                                <p>It includes comprehensive <strong>Linux terminals</strong>, you can install any <strong>VS Code extensions</strong> and it's all based on <strong>Theia</strong>, the vendor neutral and highly extensible VS Code alternative.</p>
                                <p>Read more about <a href="#">Full Dev Environments.</a></p>
                            </div>
                        </div>

                        <div className="why-gitpod__box">
                            <div className="why-gitpod__text">
                                <h3>Integration with Your Tool Chain</h3>
                                <p>Gitpod let’s you stay in the flow by blending seamlessly into your existing tools chain.</p>
                                <p>For instance, it integrates with git based environments like GitHub and GitLab, with external clusters like Kubernetes and continue integration tools like Jenkins, Circle CI and Travis.</p>
                                <p>Read more about <a href="#">Integration.</a></p>
                            </div>
                            <div className="why-gitpod__img-container">
                                <img
                                    alt="Tools Integration"
                                    src={ToolIntegration}
                                    className="why-gitpod__img"
                                    style={{transform: 'scale(.8)'}}
                                />
                            </div>
                        </div>

                    </div>
                </section>
            </div>

            {/* ----- Section Testimonials ----- */}

            <section className="testimonials">
                <div className="row">
                    <h2>Don’t just Take Our Word for It</h2>
                </div>
            </section>

            {/* ----- Section Getting Started ----- */}

            <div className="row">
                <section className="get-started" id="get-started">
                    <h2>Get Started</h2>

                    <div className="get-started__prefix">
                        <div className="get-started__prefix-text-container">
                            <h3 className="get-started__prefix-text">Prefix any GitHub or GitLab<br aria-hidden={true} />URL with <span>gitpod.io/#</span></h3>
                        </div>
                        <div className="get-started__prefix-image-container">
                            <img
                                alt="Prefix any GitHub or GitLab URL with gitpod.io/#"
                                src={PrefixImage}
                                className="get-started__prefix-image"
                            />
                        </div>
                    </div>

                    <h3>Or Select a Project</h3>

                    <div className="get-started__projects">
                        {
                            projects.map(
                                (project, i) => (
                                    <Project
                                        key={i}
                                        image={<img alt={project.alt} src={project.image}/>}
                                        title={project.title}
                                        href={project.href}
                                    />
                                )
                            )
                        }
                    </div>

                </section>
            </div>

            {/* ----- Section Open Source ----- */}

            <section className="open-source">
                <div className="row">
                    <h2>Free for Open-Source</h2>
                    <div className="open-source__content">
                            <img alt="Ant Design Workspace" src={AntDesignWorkspace} />
                            <div className="open-source__text">
                                <h3>Giving Back to<br/>Open-Source!</h3>
                                <p>Gitpod is built on open-source and wouldn’t exist without it.</p>
                                <p>Did you know that you can see all contributor-friendly open-source projects at one glance?</p>
                                <p>Find your next project on <a href="https://contribute.dev" target="_blank">contribute.dev!</a></p>
                            </div>
                    </div>
                </div>
            </section>

            {/* ----- Section Explore Gitpod ----- */}

            <Details
                title="Explore Gitpod"
                text="Learn about collaboration, workspace snapshots, supported programming languages, and much more."
                anchors={[{href: '/blog', text: 'See Blog'}, {href: '/features', text: 'See Features'}]}
            />

        </StyledIndexPage>
    </IndexLayout>
)

export default IndexPage
