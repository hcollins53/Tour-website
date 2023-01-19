//import getBands and getVenues
//export a function and create a function that will use a for of loop to match the primary keys of band and venues to the booking ids
//it will show an html of the band name are playing at venue name on booking date
//addEventListener which will check the primary keys of band  the bookings id
//window.alert will say band name and properties 
//


import { getBands, getVenues, getBookings } from "./database.js";
const bookings = getBookings()
const bands = getBands()
const venues = getVenues()

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if(itemClicked.id.startsWith("booking")) {
            const [,bookingPrimaryKey] = itemClicked.id.split("--")

            let matchingBooking = null
            let bandInformation = ` `
            for(const booking of bookings) {
                if(parseInt(bookingPrimaryKey) === booking.id){
                   matchingBooking = booking
                }
            
            }
            for(const band of bands) {
                if(band.id === matchingBooking.bandId) {
                   bandInformation = band
                }
            }
            window.alert(`${bandInformation.name} plays ${bandInformation.genre} music, was formed in ${bandInformation.yearFormed}, and has ${bandInformation.members} members.`)
        }
        
    }
)




const findBand = (booking, allBands) => {
    let bookingBand = null 

    for(const band of allBands) {
        if(band.id === booking.bandId) {
            bookingBand = band
        }
    }
    return bookingBand
}

const findVenue = (booking, allVenues) => {
    let bookingVenue = null

    for(const venue of allVenues) {
        if(venue.id === booking.venueId){
            bookingVenue = venue
        }
    }
    return bookingVenue
}

export const Bookings = () => {
    let html = "<ul>"
    for(const booking of bookings) {
        const band = findBand(booking, bands)
        const venue = findVenue(booking, venues)

        html += `<li id="booking--${booking.id}">${band.name} is playing at ${venue.name} on ${booking.date}</li>`
    }

    html += "</ul>"
    return html
}