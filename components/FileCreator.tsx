import Date from "./file data/Date"
import Number from "./file data/Number"
import Client from "./file data/Client"
import Workplace from "./file data/Workplace"
import Object from "./file data/Service"
import Price from "./file data/Price"

import "../src/app/styles/file-creator.scss"

const FileCreator = () => {

    return (
        <div className="file-data">
            <div className="date data">
                <Date />
            </div>
            <div className="number data">
                <Number />
            </div>
            <div className="client data">
                <Client />
            </div>
            <div className="workplace data">
                <Workplace />
            </div>
            <div className="object data">
                <Object />
            </div>
            <div className="price data">
                <Price />
            </div>
        </div>
    )
}

export default FileCreator