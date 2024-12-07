import { IconType } from "react-icons";
import { Button as ButtonAntd } from "antd";

export type ButtonType = {
    title?: string;
    icon?: IconType;
    color?: string;
    onClick?: () => void;
};

const Button = ({
    title,
    icon,
    color,
    onClick,
}: ButtonType) => {
    const Icon = icon;
    
    return (
        <ButtonAntd
            type="primary"
            onClick={onClick}
            style={{
                backgroundColor: color,
            }}
        >
            {Icon && <Icon size={25}/> } {title}
        </ButtonAntd>
    )
}

export default Button;