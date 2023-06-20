import { Chip, Avatar } from '@mui/material';
import { getCategoryIcon } from '../../shared/utils';

const style = {
  background: 'rgb(255, 255, 255)',
  border: 'none',
  boxShadow: 'rgba(0, 0, 0, 0.04) 0px 2px 8px 0px',
  color: 'rgb(51, 51, 51)',
  fontWeight: 700,
  padding: '5px 10px',
};

function ChipComponent({ label, variant = 'outlined', href }) {
  return (
    <Chip
      label={label}
      variant={variant}
      href={href}
      sx={style}
      avatar={<Avatar src={getCategoryIcon(label)} alt={label} />}
    />
  );
}

export default ChipComponent;
