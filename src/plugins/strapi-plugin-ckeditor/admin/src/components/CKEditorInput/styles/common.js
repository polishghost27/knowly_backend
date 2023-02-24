import { css } from 'styled-components'
import { baseTheme, darkTheme } from './theme'

const theme = { ...baseTheme, ...darkTheme }

export const style = css`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

    .ck-word-count {
        display: flex;
        gap: 0.5rem;
        justify-content: flex-end;
        padding-block: 0.2rem;
        font-size: 0.875rem;
    }

    .ck-editor__main {
        --ck-font-face: 'Poppins', sans-serif;
        /* --ck-font-face: "Source Sans Pro", system-ui, Roboto, "Poppins", "Helvetica Neue", "Helvetica", Arial, sans-serif; */
        color: var(--ck-color-editor-base-text);
        font-family: var(--ck-font-face);
        line-height: 1.6;
        font-size: 18px;

        * {
            /* font: revert; */
            /* margin: revert; */
            margin: 0;
            padding: 0;
        }

        // higher specificity needed
        .ck.ck-content.ck-editor__editable {
            line-height: initial;
            min-height: 12.5rem;
            border-bottom-left-radius: 0.25rem;
            border-bottom-right-radius: 0.25rem;

            h1,
            h2,
            h3,
            h4,
            h5 {
                margin: 4rem 0 2rem;
                /* font-weight: 400; */
                line-height: 1.3;
            }

            h1 {
                margin-top: 0;
                font-size: ${theme.font.size.h1};
            }
            h2 {
                font-size: ${theme.font.size.h2};
            }
            h3 {
                font-size: ${theme.font.size.h3};
            }
            h4 {
                font-size: ${theme.font.size.h4};
            }
            p {
                font-size: ${theme.font.size.p};
                margin-bottom: 1rem !important;
            }

            figcaption {
                background-color: var(--ck-color-image-caption-background);
                caption-side: bottom;
                color: var(--ck-color-image-caption-text);
                display: table-caption;
                font-size: 0.75em;
                outline-offset: -1px;
                padding: 0.6em;
                word-break: break-word;
            }

            blockquote {
                margin: 2rem 0;
                border-left: 0.6rem solid ${theme.color.background200};
                padding: 1rem 3rem;
                font-size: ${theme.font.size.small};
                font-style: italic;
                color: ${theme.color.secondaryText};

                p {
                    margin: 0;
                }
            }
            .table {
                margin: 0;
            }

            ul.todo-list {
                list-style: none;
                margin: revert;
                color: revert;
                font-family: revert;
            }

            ul,
            ol {
                list-style: initial;
                margin: 1rem 0 2rem 4rem !important;
            }

            li {
                margin: 0.5rem 0 !important;
            }

            ol {
                list-style: decimal;
            }

            sub {
                vertical-align: sub;
            }

            sup {
                vertical-align: super;
            }

            figure {
                margin: 3.2rem 0 !important;
            }
            strong {
                font-weight: bold;
            }

            pre {
                padding: 1.5rem 3rem;
                margin: 1rem 0;
                background-color: #08090a;
                border-radius: 0.6rem;
                font-size: ${theme.font.size.small};
                color: ${theme.color.secondaryText};
                border: unset;
            }

            code {
                font-family: 'Fira Code', monospace;
            }

            // so it's more Strapi alike
            &.ck-focused:not(.ck-editor__nested-editable) {
                border: 1px solid rgb(73, 69, 255);
                box-shadow: rgb(73 69 255) 0 0 0 0.125rem;
                border-top-left-radius: 0.25rem;
                border-top-right-radius: 0.25rem;
                transition-property: border-color, box-shadow;
                transition-duration: 0.2s;
            }
        }

        table {
            font-size: ${theme.font.size.small};
        }
    }
`
