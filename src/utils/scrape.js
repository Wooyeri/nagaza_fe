import { saveScrape, getIsScraped } from "@/services/scrapeServices"

export const checkScrape = (category, itemId) => {
    const token = sessionStorage.getItem('jwtToken');
    return getIsScraped(category, itemId, token)
    .then(res => {
        console.log(`like ${category}/${itemId}: ${res.data}`);
        if(res.status == 200 && typeof(res.data) == 'boolean') return res.data;
    })
    .catch(err => console.error(err));
};

export const handleScrapeClick = (category, itemId) => {
    const token = sessionStorage.getItem('jwtToken');
    return saveScrape(category, itemId, token)
    .then(res => {
        if(res.status == 200) return true;
        else return false;
    })
    .catch(err => console.error(err));
};