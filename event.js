const event = require("events")

const myEvent = new event.EventEmitter()

myEvent.on("firstEvent", ()=> {
    console.log("first event was fired...")
})

myEvent.on("firstEvent", ()=> {
    console.log("second event was fired...")
})

myEvent.emit("firstEvent")