import { OrderStatusEnum } from "@/utils/enums";
import { Tag as TagAntd } from "antd";

interface TagType {
    status: string;
    type?: any;
}

const Tag = ({ status, type }: TagType) => {
    let color = '';
    color = 'cyan';
    
    if (type === OrderStatusEnum) {
        switch (status) {
            case OrderStatusEnum.SUCESSFULLY:
                color = 'green';
                break;
            case OrderStatusEnum.PENDING:
                color = 'yellow';
                break;
            case OrderStatusEnum.DELIVERED:
                color = 'blue';
                break;
            case OrderStatusEnum.DELIVERING:
                color = 'purple';
                break;
            case OrderStatusEnum.CANCELLED:
                color = 'red';
                break;
        }
    }

    return (
        <TagAntd color={color} key={status}>
            {status.toUpperCase()}
        </TagAntd>
    )
}

export default Tag;