import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import PropTypes from 'prop-types';
import ListDetail from "@/components/list/ListDetail"
import CategoryLinkButtons from "./common/CategoryLinkButtons"
import { getMovieDetails, getHotelDetails, getRestaurantDetails } from "@/services/listServices";

export default function DetailPage({ category }){
    const { id } = useParams();
    const [contents, setContents] = useState();
    const containerStyle = {
        width: "100%",
        justifyContent: "center",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: "50px 0"
    }
    useEffect(() => {
        const token = sessionStorage.getItem('jwtToken');
        if(category === 'movie') {
            getMovieDetails(token, id)
            .then(res => {
                setContents(res.data)
            })
            .catch(err => console.error(err))
        } else if (category === 'hotel') { 
            getHotelDetails(token, id)
            .then(res => {
                setContents(res.data)
            })
            .catch(err => console.error(err))
        } else if (category === 'restaurant') {
            getRestaurantDetails(token, id)
            .then(res => {
                setContents(res.data)
            })
            .catch(err => console.error(err))
        }
    }, [category, id])

    return(
        <div style={containerStyle}>
            <CategoryLinkButtons />
            {contents && <ListDetail category={category} contents={contents} id={id} />}
        </div>
    )
}
DetailPage.propTypes = {
    category: PropTypes.string
}