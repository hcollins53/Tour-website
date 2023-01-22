//import the getVenues function from database
//export and create a function that creates a for of loop to iterate through the array
//as we are iterating trough we will <li> the id and properties
//create an addEventListener and match the primary key band to the booking bandId and then match the bandId to the venues primary key
//window alert to show the venues the band has booked

import { getVenues, getBands, getBookings } from "./database.js";

const bookings = getBookings()
const bands = getBands()
const venues = getVenues()

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if(itemClicked.id.startsWith("venue")) {
            const [,venuePrimaryKey] = itemClicked.id.split("--")

            let matchingVenue = null
            let allBands = ` `
            for(const venue of venues) {
                if(parseInt(venuePrimaryKey) === venue.id){
                   matchingVenue = venue
                }
            
            }
            for(const booking of bookings) {
                if(parseInt(venuePrimaryKey) === booking.venueId) {
                    for(const band of bands){
                        if(band.id === booking.bandId){
                            allBands += `${band.name}\n `
                            
                        }
                        
                    }
                }
                //window.alert(`${allBands.name} are playing here`)
            }
            
           window.alert(`${allBands}are playing here`)
        }
    }
)



export const Venues = () => {
    let html = "<ul>"

    for(const venue of venues) {
        html += `<li id="venue--${venue.id}">${venue.name}</li>`
    }
    html += "</lu>"
    return html
}

