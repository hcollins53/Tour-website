//import the getBands function from database
//export and create a function that uses a for of loop to iterate through the array
//as we are iterating trough we will <li> the id and name
//create an addEventListener and match the primary key venue to the booking venueId and then match the venueId to the bands primary key
//window alert to show the bands booked at that venue

import { getBands, getMembers } from "./database.js";
import { getBookings } from "./database.js";
import { getVenues } from "./database.js";

const bookings = getBookings()
const bands = getBands()
const venues = getVenues()
const members = getMembers()

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if(itemClicked.id.startsWith("band")) {
            const [,bandPrimaryKey] = itemClicked.id.split("--")

            let matchingBand = null
            let allVenues = ` `
            let allMembers = ''
            for(const band of bands) {
                for(const member of members) {
                if(parseInt(bandPrimaryKey) === band.id && band.id === member.bandId) {
                       allMembers += `${member.firstName} ${member.lastName} (${member.role})\n` 
                    }
                }
            }
            
            
            for(const booking of bookings) {
                if(parseInt(bandPrimaryKey) === booking.bandId) {
                    for(const venue of venues){
                        if(venue.id === booking.venueId){
                            allVenues += `${venue.name}\n `
                            
                        }
                        
                    }
                }
                //window.alert(`${allBands.name} are playing here`)
            }
            
           window.alert(`${allMembers}\n Upcoming shows:\n${allVenues}`)
        }
        
    }
)



export const Bands = () => {
    let html = "<ul>"

    for(const band of bands) {
        html += `<li id="band--${band.id}">${band.name}</li>`
    }
    html += "</lu>"
    return html
}