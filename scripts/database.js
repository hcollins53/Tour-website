//make the array of objects for the venues, bookings, and bands
//export a function that copies the array
//each venue has 2 bans per night
//each band plays 1 or two venues per night

const database = {
    bands: [
        {
            id: 1,
            name: "The Civil Wars",
            members: 2,
            genre: "folk",
            yearFormed: 2008
        },
        {
            id: 2,
            name: "Dan + Shay",
            members: 2,
            genre: "pop",
            yearFormed: 2013
        },
        {
           id: 3,
           name: "Judah & the Lion" ,
           members: 3,
           genre: "alternative rock",
           yearFormed: 2011
        },
        {
           id: 4,
           name: "Moon Taxi",
           members: 5,
           genre: "alternative rock",
           yearFormed: 2006 
        },
        {
            id: 5,
            name: "Lady A",
            members: 3,
            genre: "country",
            yearFormed: 2006
        },
    ],
    venues: [
        {
            id: 1,
            name: "The Basement",
            address: "1604 8th Ave S Ste 330, Nashville, TN 37203",
            squareFootage: 2000,
            maxOccupancy: 400
        },
        {
            id: 2,
            name: "Mercy Lounge",
            address: "1 Cannery Row, Nashville, TN 37203",
            squareFootage: 2300,
            maxOccupancy: 500

        },
        {
            id: 3,
            name: "The Station Inn",
            address: "402 12th Ave S, Nashville, TN 37203",
            squareFootage: 1200,
            maxOccupancy: 200
        },
        {
            id: 4,
            name: "Ryman Auditorium",
            address: "116 5th Ave N, Nashville, TN 37219",
            squareFootage: 5000,
            maxOccupancy: 2000
        }
    ],
    bookings: [
        {
            id: 1,
            bandId: 1,
            venueId: 1,
            date: "01/07/2023"
        },
        {
            id: 2,
            bandId: 1,
            venueId: 2,
            date: "01/07/2023"
        },
        {
            id: 3,
            bandId: 1,
            venueId: 4,
            date: "01/12/2023"
        },
        {
            id: 4,
            bandId: 2,
            venueId: 2,
            date: "01/12/2023"
        },
        {
            id: 5,
            bandId: 2,
            venueId: 3,
            date: "01/12/2023"
        },
        {
            id: 6,
            bandId: 3,
            venueId: 3,
            date: "01/12/2023"
        },
        {
            id: 7,
            bandId: 3,
            venueId: 4,
            date: "01/12/2023"
        },
        {
            id: 8,
            bandId: 4,
            venueId: 2,
            date: "01/12/2023"
        },
        {
            id: 9,
            bandId: 4,
            venueId: 4,
            date: "01/19/2023"
        },
        {
            id: 10,
            bandId: 4,
            venueId: 4,
            date: "01/23/2023"
        },
        {
            id: 11,
            bandId: 5,
            venueId: 1,
            date: "01/07/2023"
        },
        {
            id: 12,
            bandId: 5,
            venueId: 4,
            date: "01/19/2023"
        },
    ],
    members: [
        {
            id: 1,
            firstName: "Joy",
            lastName: "Williams",
            yearBorn: 1982,
            role: "singer and pianist",
            bandId: 1
        },
        {
            id: 2,
            firstName: "John Paul",
            lastName: "White",
            yearBorn: 1972,
            role: "singer and guitarist",
            bandId: 1
        },
        {
            id: 3,
            firstName: "Dan",
            lastName: "Smyers",
            yearBorn: 1987,
            role: "singer and guitarist",
            bandId: 2
        },
        {
            id: 4,
            firstName: "Shay",
            lastName: "Mooney",
            yearBorn: 1991,
            role: "singer",
            bandId: 2
        },
    ],
}


export const getBands = () => {
    return database.bands.map((band) => ({...band}));
};

export const getVenues = () => {
    return database.venues.map((venue) => ({...venue}));
}

export const getBookings = () => {
    return database.bookings.map((booking) => ({...booking}))
}

export const getMembers = () =>  {
    return database.members.map((member) => ({...member}))
}


