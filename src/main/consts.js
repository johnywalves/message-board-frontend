let local = window.location.host
local = local.substr(0, (local.indexOf(':') != -1 ? local.indexOf(':') : local.length))
local = window.location.protocol + '//' + local + ':5000'

export default {
    API_URL: local + '/v1.0/'
}