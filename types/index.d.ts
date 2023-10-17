export type SiteConfig = {
    mainNav: MainNavItem[];
    sidebarNav: SidebarNavItem[];
  };
  
  export type NavItem = {
    title: string;
    href: string;
    disabled?: boolean;
  };
  export type SidebarNavItem = {
    title: string
    disabled?: boolean
    external?: boolean
    icon?: keyof typeof Icons
  } & (
    | {
        href: string
        items?: never
      }
    | {
        href?: string
        items: NavLink[]
      }
  )


  export type Post = {
    id: number;
    title: string;
    content: string | null;
    published: boolean;
    authorId: number;
    createdAt: Date;
    updatedAt: Date;
    url: string
  };
  
  export type Posts = Post[];