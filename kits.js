// scroll 3d

const zSpacing = -1000
let
    frames = [...document.getElementsByClassName('kits_item')],
    zVals = frames.map((item, index) => zSpacing * (index + 1)),
    lastPos = document.documentElement.scrollTop

zVals[zVals.length - 1] += zSpacing * 2.5

window.addEventListener('scroll', () => {
    const 
        top = document.documentElement.scrollTop,
        delta = top - lastPos
    lastPos = top
    frames.forEach(function(frame, i) {
        zVals[i] += delta * 5.5
        const
            transform = `translateZ(${zVals[i]}px)`,
            opacity = zVals[i] < Math.abs(zSpacing) / 1.8 ? 1 : 0
        frame.setAttribute('style', `
            transform: ${transform};
            opacity: ${opacity}
        `)
    })
})

const lastDiv = document.querySelector("div.kits_item:last-child")

lastDiv.addEventListener("click", (event) => {
    if(event.target == lastDiv || event.target == lastDiv.querySelector("video") && event.currentTarget != lastDiv)
        if(lastDiv.querySelector("video").paused)
            lastDiv.querySelector("video").play()
        else    
            lastDiv.querySelector("video").pause()
})

window.onbeforeunload = () => { scrollTo(0,0) }
scrollTo(0,1)