import { useParams } from "react-router-dom"
import PropTypes from 'prop-types';
import ListDetail from "@/components/list/ListDetail"
import CategoryLinkButtons from "./common/CategoryLinkButtons"
import { useEffect, useState } from "react";
import { getMovieDetails, getHotelDetails, getRestaurantDetails } from "../../services/listServices";


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
        if(category === 'movie') {
            getMovieDetails(id)
            .then(res => {
                setContents(res.data)
            })
            .catch(err => console.error(err))
        } else if (category === 'hotel') { 
            getHotelDetails(id)
            .then(res => {
                setContents(res.data)
            })
            .catch(err => console.error(err))
        } else if (category === 'restaurant') {
            getRestaurantDetails(id)
            .then(res => {
                setContents(res.data)
            })
            .catch(err => console.error(err))
        }
    })

    return(
        <div style={containerStyle}>
            <CategoryLinkButtons />
            <ListDetail category={category} contents={contents} />
        </div>
    )
}
DetailPage.propTypes = {
    category: PropTypes.string
}