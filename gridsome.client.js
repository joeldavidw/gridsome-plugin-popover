export default function (Vue, options, { isServer: disabled, router }) {
    if (process.isClient) {
        const {default: VPopover} = require('vue-js-popover')
        Vue.use(VPopover, options)
    }
}