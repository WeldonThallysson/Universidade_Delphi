import { Breadcrumbs, Link, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { IBreadcrumbItem } from '../../interface/InterfaceBreadcrumbs/interface.breadcrumbs';
import { useDashboards } from '../../store/dashboard';


interface BreadcrumbsProps {
  items: IBreadcrumbItem[];
}

const CustomBreadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  const {handleSelectTab} = useDashboards()

  return (
    <Breadcrumbs aria-label="breadcrumb">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return isLast ? (
          <Typography
            key={item.label}
            color="text.primary"
            sx={{ fontWeight: 'bold',fontSize: 18 }}
          >
            {item.label}
          </Typography>
        ) : (
          <Link
            key={item.label}
            component={RouterLink}
            to={item.path || '#'}
            onClick={() => {handleSelectTab(item.path)}}
            underline="hover"
            color="inherit"
            sx={{
              fontSize: 18
            }}
          >
            {item.label}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
};

export default CustomBreadcrumbs;
