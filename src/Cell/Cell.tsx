import { FunctionComponent } from 'react';
import oImage from '../assets/o.png';
import xImage from '../assets/x.png';
import { NullAblePlayer } from '../types';
import './Cell.css';

interface CellProps {
    value: NullAblePlayer;
    setCellValue: () => void;
    className?: string;
}

const Cell: FunctionComponent<CellProps> = (props) => {
    const { value, setCellValue, className } = props;
    const imageSrc = value === 'X' ? xImage : oImage;

    const onClick = () => {
        if (value === null) {
            setCellValue();
        }
    };

    return (
        <div onClick={onClick} className={className}>
            {value ? (
                <img className='cell_image' src={imageSrc} alt={value} />
            ) : null}
        </div>
    );
};

export default Cell;
