import {useLocation} from 'react-router-dom';
import LinkTo from 'components/atoms/LinkTo/LinkTo';
import './DetailPokemon.scss'
function DetailPokemon() {

    const {state} = useLocation();
   console.log("data:",state)
        return (

            <>
            
    <LinkTo url={"home"} text={"Home"} />
    <LinkTo url={"list-pokemon"} text={"Pokemon List"} />
    <div className='detail'>
    <h2 className="detail__title">Details</h2>
    </div>
            </>
        )
    }

export default DetailPokemon;