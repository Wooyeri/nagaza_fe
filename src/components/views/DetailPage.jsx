import ListDetail from "@/components/list/ListDetail"
import CategoryLinkButtons from "./CategoryLinkButtons"

export default function DetailPage(){
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: "50px 0"
    }

    return(
        <div style={containerStyle}>
            <CategoryLinkButtons />
            <ListDetail />
        </div>
    )
}