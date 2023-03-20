export interface NavItemProps {
  title: string;
  url: string;
  showCurrentPageName: (pageName: string) => void;
}
