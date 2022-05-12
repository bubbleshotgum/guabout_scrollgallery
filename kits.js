// scroll 3d

let zSpacing = -1000,
    lastPos = - zSpacing/5,

    $frames = document.getElementsByClassName('kits_item'),
    frames = Array.from($frames),
    zVals = []

window.addEventListener('scroll', ()=>  {
    let top = document.documentElement.scrollTop,
        delta = lastPos - top

    lastPos = top

    frames.forEach(function(n,i) {
        zVals.push((i * zSpacing) + zSpacing)
        zVals[i] += delta * -5.5
        let frame = frames[i],
            transform = `translateZ(${zVals[i]}px)`
            opacity = zVals[i] < Math.abs(zSpacing) / 1.8 ? 1 : 0
        frame.setAttribute('style', `
            transform: ${transform};
            opacity: ${opacity}
        `)
    })
})
window.scrollTo(0,1)