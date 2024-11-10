import { IBreadcrumbItem } from "../../../../interface/InterfaceBreadcrumbs/interface.breadcrumbs";
import { ROUTES } from "../../../../routes/paths";

export const BreadcrumbCategory: IBreadcrumbItem[] = [
  {
    label: "Home",
    path: ROUTES.DASHBOARD,
  },
  {
    label: "Cursos",
    path: ROUTES.COURSES_DASHBOARD,
  },
];

export const BreadcrumbRegister: IBreadcrumbItem[] = [
  {
    label: "Home",
    path: ROUTES.DASHBOARD,
  },
  {
    label: "Cursos",
    path: ROUTES.COURSES_DASHBOARD,
  },
  {
    label: "Registrar",
    path: ROUTES.COURSES_DASHBOARD_REGISTER,
  },
];

export const BreadcrumbEdit = ({
  id,
  name,
}: {
  id: string;
  name: string;
}): IBreadcrumbItem[] => {
  return [
    {
      label: "Home",
      path: ROUTES.DASHBOARD,
    },
    {
      label: "Cursos",
      path: ROUTES.CATEGORIES_DASHBOARD,
    },
    {
      label: name ?? "Nome da curso",
      path: `/dashboard/categories/${id}/edit`,
    },
    {
      label: "Editar",
      path: ROUTES.COURSES_DASHBOARD_EDIT,
    },
  ];
};

export const columnsCourses = [
  { id: "name", label: "Name", align: "left" },
  { id: "description", label: "Descrição", align: "left" },
  { id: "tag", label: "Tag", align: "left" },
];
