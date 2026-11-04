# Pizza Express — Premium Restaurant Website

A dark-luxury, responsive Next.js starter site for Pizza Express, Kalampur Bazar, Dhamrai, Dhaka.

## Run locally

1. Install Node.js (LTS).
2. In this folder run `npm install`.
3. Run `npm run dev`.
4. Open http://localhost:3000.

## Before publishing
- Confirm phone number, opening hours, current menu, prices, delivery coverage and social links with the restaurant.
- Replace illustrative stock food photos with approved photos downloaded from the restaurant's own Facebook page.
- Connect a real ordering/booking backend if online orders are required.
- Configure hosting (for example, Vercel) and the restaurant's domain.

## Official business details used

- Facebook page: https://www.facebook.com/PizzaExpress24
- Address: Gazi Market, 2nd Floor, Kalampur Bazar, Dhamrai, Dhaka (a public post also mentions the 2nd and 3rd floors).
- Phone: 01610-678748
- Services listed on Facebook: delivery, dine-in, takeout, online booking.
- Facebook posts mention enjoying food and coffee under the open sky.
- Current opening hours and full menu/prices were not confirmed, so the site asks visitors to contact the restaurant.

## Edit demo menu prices

Open `app/menu-data.ts`. Each menu item has a `samplePrice` value in BDT. Change the number to the restaurant's confirmed price, and edit the item name/description in the same file. The website labels these as demo prices until you replace them.
