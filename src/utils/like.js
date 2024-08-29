import { saveLike, getIsLiked } from "@/services/likeServices"

export const checkLike = (category, itemId) => {
    const token = sessionStorage.getItem('jwtToken');
    return getIsLiked(category, itemId, token)
    .then(res => {
        console.log(`like ${category}/${itemId}: ${res.data}`);
        if(res.status == 200 && typeof(res.data) == 'boolean') return res.data;
    })
    .catch(err => console.error(err));
};

export const handleLikeClick = (category, itemId) => {
    const token = sessionStorage.getItem('jwtToken');
    return saveLike(category, itemId, token)
    .then(res => {
        if(res.status == 200) return true;
        else return false;
    })
    .catch(err => console.error(err));
};