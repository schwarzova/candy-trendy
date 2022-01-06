This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## How to add new cards

1. Add web scraping fetch function to get data
2. Create new `<Card />` component in `TrendList` folder
   1. Create new type for data
   2. Update render method and UI of new `Card`
   3. Add categories + source link
3. Render new `Cards` in `TrendList.tsx`
4. Pass data to your `Cards` component
5. Add categories for your new `Card` in `Select` in `ConfigForm.tsx`
6. Update Readme -> Pages used for scraping

## Pages used for scraping

- [Games](https://www.twitchmetrics.net/games/viewership) - 20 Twitch trending games
- [Jokes](http://www.laughfactory.com/jokes/latest-jokes) - 12 Latest jokes
- [Movies](https://editorial.rottentomatoes.com/guide/popular-movies/) - 30 latest popular movies
- [Netflix Movies](https://flixpatrol.com/top10/netflix/) - 10 top movies + 10 top shows
- [Music](https://www.aria.com.au/charts/singles-chart) - 50 top songs
