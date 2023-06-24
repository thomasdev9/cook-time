import { Chip, Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
import { getCategoryIcon } from '../../shared/utils';

const style = {
  background: 'rgb(255, 255, 255)',
  border: 'none',
  boxShadow: 'rgba(0, 0, 0, 0.04) 0px 2px 8px 0px',
  color: 'rgb(51, 51, 51)',
  fontWeight: 700,
  padding: '5px 10px',
  cursor: 'pointer',
};

function ChipComponent({ label, variant = 'outlined' }) {
  return (
    <Link to={`/${label}`} state={{ category: label }}>
      <Chip label={label} variant={variant} sx={style} avatar={<Avatar src={getCategoryIcon(label)} alt={label} />} />
    </Link>
  );
}

export default ChipComponent;
