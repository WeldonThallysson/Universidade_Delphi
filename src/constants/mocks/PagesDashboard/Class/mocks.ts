import { IBreadcrumbItem } from "../../../../interface/InterfaceBreadcrumbs/interface.breadcrumbs";
import { ROUTES } from "../../../../routes/paths";

export const BreadcrumbClass: IBreadcrumbItem[] = [
  {
    label: "Home",
    path: ROUTES.DASHBOARD,
  },
  {
    label: "Aulas",
    path: ROUTES.CLASS_DASHBOARD,
  },
];

export const BreadcrumbClassRegister: IBreadcrumbItem[] = [
  {
    label: "Home",
    path: ROUTES.DASHBOARD,
  },
  {
    label: "Aulas",
    path: ROUTES.CLASS_DASHBOARD,
  },
  {
    label: "Registrar",
    path: ROUTES.CLASS_DASHBOARD_REGISTER,
  },
];

export const BreadcrumbClassEdit = ({
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
      label: "Aulas",
      path: ROUTES.CLASS_DASHBOARD,
    },
    {
      label: name ?? "Nome da aula",
      path: `/dashboard/class/${id}/edit`,
    },
    {
      label: "Editar",
      path: ROUTES.CATEGORIES_DASHBOARD_EDIT,
    },
  ];
};

export const columnsClass = [
  { id: "name", label: "Nome", align: "left" },
  { id: "description", label: "Descrição", align: "left" },
  { id: "tag", label: "Tag", align: "left" },
  { id: "tutor", label: "Tutor", align: "left"}

];
