import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarSeparator,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  ChevronDown,
  PanelLeft,
  Newspaper,
  BookCheck,
  NotebookPen,
  LibraryBig,
  Code,
  Package,
  Swords,
  Server,
  Image,
  ScrollText,
  BookUser,
  BookOpen,
  Eye,
} from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import React from "react";

export function AppSidebar() {
  const { toggleSidebar } = useSidebar();
  const [sidebar_collapsible_1_open, sidebar_collapsible_1_setOpen] =
    React.useState(() => {
      const savedOpenState = sessionStorage.getItem(
        "main-sidebar-collapsible-1Open"
      );
      return savedOpenState ? JSON.parse(savedOpenState) : true;
    });
  React.useEffect(() => {
    sessionStorage.setItem(
      "main-sidebar-collapsible-1Open",
      JSON.stringify(sidebar_collapsible_1_open)
    );
  }, [sidebar_collapsible_1_open]);
  const [sidebar_collapsible_2_open, sidebar_collapsible_2_setOpen] =
    React.useState(() => {
      const savedOpenState = sessionStorage.getItem(
        "main-sidebar-collapsible-2Open"
      );
      return savedOpenState ? JSON.parse(savedOpenState) : true;
    });
  React.useEffect(() => {
    sessionStorage.setItem(
      "main-sidebar-collapsible-2Open",
      JSON.stringify(sidebar_collapsible_2_open)
    );
  }, [sidebar_collapsible_2_open]);
  const [sidebar_collapsible_3_open, sidebar_collapsible_3_setOpen] =
    React.useState(() => {
      const savedOpenState = sessionStorage.getItem(
        "main-sidebar-collapsible-3Open"
      );
      return savedOpenState ? JSON.parse(savedOpenState) : true;
    });
  React.useEffect(() => {
    sessionStorage.setItem(
      "main-sidebar-collapsible-3Open",
      JSON.stringify(sidebar_collapsible_3_open)
    );
  }, [sidebar_collapsible_3_open]);
  const [sidebar_collapsible_4_open, sidebar_collapsible_4_setOpen] =
    React.useState(() => {
      const savedOpenState = sessionStorage.getItem(
        "main-sidebar-collapsible-4Open"
      );
      return savedOpenState ? JSON.parse(savedOpenState) : false;
    });
  React.useEffect(() => {
    sessionStorage.setItem(
      "main-sidebar-collapsible-4Open",
      JSON.stringify(sidebar_collapsible_4_open)
    );
  }, [sidebar_collapsible_4_open]);
  const [sidebar_collapsible_5_open, sidebar_collapsible_5_setOpen] =
    React.useState(() => {
      const savedOpenState = sessionStorage.getItem(
        "main-sidebar-collapsible-5Open"
      );
      return savedOpenState ? JSON.parse(savedOpenState) : false;
    });
  React.useEffect(() => {
    sessionStorage.setItem(
      "main-sidebar-collapsible-5Open",
      JSON.stringify(sidebar_collapsible_5_open)
    );
  }, [sidebar_collapsible_5_open]);
  const [sidebar_open, sidebar_setOpen] = React.useState(() => {
    const savedOpenState = sessionStorage.getItem("main-sidebarOpen");
    return savedOpenState ? JSON.parse(savedOpenState) : true;
  });
  return (
    <Sidebar collapsible='icon' variant='floating'>
      <SidebarHeader />
      <SidebarContent>
        <Collapsible
          className='group/collapsible'
          open={sidebar_collapsible_1_open}
          onOpenChange={sidebar_collapsible_1_setOpen}
        >
          <SidebarGroup>
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger>
                BCUW
                <ChevronDown className='ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180' />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a href='/blog'>
                        <Newspaper />
                        <span>Blog</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a href='/tutorials'>
                        <BookOpen />
                        <span>Tutorials</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a href='/credits'>
                        <ScrollText />
                        <span>Credits</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>
        <SidebarSeparator />
        <Collapsible
          className='group/collapsible'
          open={sidebar_collapsible_2_open}
          onOpenChange={sidebar_collapsible_2_setOpen}
        >
          <SidebarGroup>
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger>
                Resources
                <ChevronDown className='ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180' />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a href='/OfficialResources'>
                        <BookCheck />
                        <span>Official Resources</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a href='/UserMadeResources'>
                        <NotebookPen />
                        <span>User-made Resources</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a href='/DiscordResources'>
                        <LibraryBig />
                        <span>Discord Resources</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>
        <SidebarSeparator />
        <Collapsible
          className='group/collapsible'
          open={sidebar_collapsible_3_open}
          onOpenChange={sidebar_collapsible_3_setOpen}
        >
          <SidebarGroup>
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger>
                Docs
                <ChevronDown className='ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180' />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a href='/ranks'>
                        <BookUser />
                        <span>Ranks</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a href='/crates'>
                        <Package />
                        <span>Crates</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a href='/items'>
                        <Swords />
                        <span>Items</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>
        <SidebarSeparator />
        <Collapsible
          className='group/collapsible'
          open={sidebar_collapsible_4_open}
          onOpenChange={sidebar_collapsible_4_setOpen}
        >
          <SidebarGroup>
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger>
                Contribute
                <ChevronDown className='ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180' />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a href='/contributing'>
                        <Code />
                        <span>Contributing</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a href='/cdn'>
                        <Server />
                        <span>CDN</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a href='/logos'>
                        <Image />
                        <span>Logos</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>
        <Collapsible
          className='group/collapsible'
          open={sidebar_collapsible_5_open}
          onOpenChange={sidebar_collapsible_5_setOpen}
        >
          <SidebarGroup>
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger>
                Other
                <ChevronDown className='ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180' />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a href='/privacy'>
                        <Eye />
                        <span>Privacy</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>
      </SidebarContent>
      <SidebarSeparator />
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton onClick={toggleSidebar}>
              <PanelLeft />
              <span className='ml-auto'>Toggle Sidebar</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
