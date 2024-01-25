import { Button } from "forging-react";
import Column from "./Column";

const PageRow = () => {
        
    return (
        <div>
            <div className="flex flex-row gap-4 p-4 justify-end w-full">
                <Button type="light" leftIcon={"layout-wtf"} />
                <Button type="light" leftIcon={"gear-fill"} />
            </div>
            <Column />
        </div>
    )
}

export default PageRow;