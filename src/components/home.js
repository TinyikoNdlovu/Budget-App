import AddItem from './addItem'
import {DisplayTransaction} from './displayTransaction';

function Home () {
    return (
        <div className="container">
            <DisplayTransaction list={props.list} />
            <AddItem add={props.add} />
        </div>
    )
}

export default Home;