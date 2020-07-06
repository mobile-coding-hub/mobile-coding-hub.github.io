var script = document.createElement('script')
script.setAttribute('src', 'https://cdn.jsdelivr.net/npm/@widgetbot/crate@3')
script.setAttribute('async', 'true')
script.setAttribute('defer', 'true')

script.onload = function() {
    document.body.classList.add('crate-loaded')
    var crate = new Crate({
        server: '595908576061554688',
        channel: '595908576795426853',
        color: '#697EC7',
        shard: 'https://disweb.deploys.io'
    })
    crate.notify({
        content: "Need help? **DON'T ASK IF YOU CAN ASK**. Just ask the question!",
        timeout: 5000,
        avatar: '/images/MCH.png'
    })
}

document.head.appendChild(script)