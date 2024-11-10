import { IBreadcrumbItem } from "../../../../interface/InterfaceBreadcrumbs/interface.breadcrumbs";
import { ROUTES } from "../../../../routes/paths";

export const BreadcrumbLive: IBreadcrumbItem[] = [
  {
    label: "Home",
    path: ROUTES.DASHBOARD,
  },
  {
    label: "Lives",
    path: ROUTES.LIVES_DASHBOARD,
  },
];

export const BreadcrumbLiveRegister: IBreadcrumbItem[] = [
  {
    label: "Home",
    path: ROUTES.DASHBOARD,
  },
  {
    label: "Lives",
    path: ROUTES.LIVES_DASHBOARD,
  },
  {
    label: "Registrar",
    path: ROUTES.LIVES_DASHBOARD_REGISTER,
  },
];

export const BreadcrumbLiveEdit = ({
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
      label: "Lives",
      path: ROUTES.LIVES_DASHBOARD,
    },
    {
      label: name ?? "Nome da aula",
      path: `/dashboard/class/${id}/edit`,
    },
    {
      label: "Editar",
      path: ROUTES.LIVES_DASHBOARD_EDIT,
    },
  ];
};

export const columnsLives = [
  { id: "name", label: "Nome", align: "left" },
  { id: "description", label: "Descrição", align: "left" },
  { id: "course", label: "Curso", align: "left" },
  { id: "category", label: "Categoria", align: "left" },
  { id: "tag", label: "Tag", align: "left" },
  { id: "tutor", label: "Tutor", align: "left"}

];