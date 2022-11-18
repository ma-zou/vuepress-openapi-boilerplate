import { defaultTheme, defineUserConfig } from "vuepress"
import { path } from "@vuepress/utils"
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { viteBundler } from '@vuepress/bundler-vite'
import postcssNesting from 'postcss-nesting'

export default defineUserConfig({
    lang: 'en-US',
    title: "Documentation",
    description: "Vuepress documentation boilerplate",
    bundler: viteBundler({
        viteOptions: {
            css: {
                postcss: {
                    plugins: [
                        postcssNesting
                    ]
                }
            }
        },
    }),
    plugins: [
        registerComponentsPlugin({
            componentsDir: path.resolve(__dirname, './components')
        })
    ],
    theme: defaultTheme({
        logo: '/images/logo.svg',
        logoDark: '/images/logo-dark.svg',
        repoLabel: 'Github',
        repo: 'https://github.com/ma-zou',
        navbar: [
            {
                text: 'Category 1',
                link: '/category1'
            }
        ]
    })
})