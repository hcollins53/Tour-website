//import the functions
//write the html formatting here & pushing it to html
import { Bands } from "./bands.js";
import { Venues } from "./venues.js";
import { Bookings } from "./bookings.js";

const mainContainer = document.querySelector("#container")

const applicationHtml = `
<h1>Tour Some Sugar on Me</h1>
<article class="details">
    <section class="detail--column list details__venues">
    <h2>Venues</h2>
    ${Venues()}
    </section>
    <section class="detail--column list details__bands">
        <h2>Bands</h2>
        ${Bands()}
    </section>
</article>

<article class="bookings">
<h2>Bookings</h2>
${Bookings()}
</article>
`

mainContainer.innerHTML = applicationHtml
