import Date from "./file data/Date"
import Number from "./file data/Number"
import Client from "./file data/Client"
import Workplace from "./file data/Workplace"
import Object from "./file data/Object"
import Price from "./file data/Price"

import "../src/app/styles/file-creator.scss"

const FileCreator = () => {

    return (
        <div className="file-data">
            <div className="date">
                <Date />
            </div>
            <div className="number">
                <Number />
            </div>
            <div className="client">
                <Client />
            </div>
            <div className="workplace">
                <Workplace />
            </div>
            <div className="object">
                <Object />
            </div>
            <div className="price">
                <Price />
            </div>
        </div>
    )
}

export default FileCreator