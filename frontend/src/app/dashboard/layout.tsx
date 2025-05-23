import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

const data: {
  navMain: {
    title: string;
    url: string;
    items: {
      title: string;
      url: string;
      isActive?: boolean;
    }[];
  }[];
} = {
  navMain: [
    {
      title: "Race",
      url: "#",
      items: [
        {
          title: "Show Races",
          url: "/dashboard/race",
          isActive: true,
        },
        {
          title: "Add Race",
          url: "/dashboard/race/add",
        },
      ],
    },
    {
      title: "Subrace",
      url: "#",
      items: [
        {
          title: "Show Subraces",
          url: "/dashboard/subrace",
        },
        {
          title: "Add Subrace",
          url: "/dashboard/subrace/add",
        },
      ],
    },
  ],
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <AppSidebar data={data} />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b">
          <div className="flex items-center gap-2 px-3">
            <SidebarTrigger />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Building Your Application
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <main className="flex flex-1 flex-col overflow-hidden">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
