import { useParams } from "react-router-dom"
import { gameList } from "../pages/dashboard/data"

const useGame = () => {
    const { id } = useParams()
    return gameList[Number(id) - 1]
}

export default useGame