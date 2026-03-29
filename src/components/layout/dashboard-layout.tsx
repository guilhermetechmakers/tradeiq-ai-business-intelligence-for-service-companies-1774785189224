import {
  BarChart3,
  Bot,
  Briefcase,
  CreditCard,
  FileText,
  HelpCircle,
  LayoutDashboard,
  Link2,
  Menu,
  Mic,
  PanelLeftClose,
  PanelLeft,
  Settings,
  Shield,
  User,
  Users,
  Bell,
  BookOpen,
} from 'lucide-react'
import { useEffect, useState } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { cn } from '@/lib/utils'

const STORAGE_KEY = 'tradeiq-sidebar-collapsed'

const mainNav = [
  { to: '/app', label: 'Dashboard', icon: LayoutDashboard, end: true },
  { to: '/app/integrations', label: 'Integrations', icon: Link2 },
  { to: '/app/jobs', label: 'Jobs', icon: Briefcase },
  { to: '/app/leads', label: 'Leads', icon: Users },
  { to: '/app/finance', label: 'Finance', icon: BarChart3 },
  { to: '/app/plans', label: 'Improvement plans', icon: FileText },
  { to: '/app/agent', label: 'Company AI', icon: Bot },
  { to: '/app/interviewer', label: 'AI interviewer', icon: Mic },
  { to: '/app/knowledge', label: 'Knowledge base', icon: BookOpen },
  { to: '/app/notifications', label: 'Notifications', icon: Bell },
  { to: '/app/billing', label: 'Billing', icon: CreditCard },
]

const accountNav = [
  { to: '/app/profile', label: 'Profile', icon: User },
  { to: '/app/settings', label: 'Settings', icon: Settings },
  { to: '/app/help', label: 'Help', icon: HelpCircle },
]

const adminNav = [
  { to: '/app/admin', label: 'Admin overview', icon: Shield },
  { to: '/app/admin/users', label: 'Users', icon: Users },
  { to: '/app/admin/integrations', label: 'Integrations monitor', icon: Link2 },
  { to: '/app/admin/audit', label: 'Audit logs', icon: FileText },
]

function SidebarNav({
  collapsed,
  onNavigate,
}: {
  collapsed: boolean
  onNavigate?: () => void
}) {
  const location = useLocation()

  const linkClass = (isActive: boolean) =>
    cn(
      'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-150',
      collapsed ? 'justify-center px-2' : '',
      isActive
        ? 'bg-sidebar-accent text-sidebar-foreground'
        : 'text-sidebar-foreground/80 hover:bg-white/10 hover:text-sidebar-foreground',
    )

  const renderGroup = (
    label: string,
    items: typeof mainNav,
    showLabel: boolean,
  ) => (
    <div className="space-y-1">
      {showLabel ? (
        <p className="mb-2 px-3 text-[11px] font-semibold uppercase tracking-wider text-sidebar-foreground/50">
          {label}
        </p>
      ) : null}
      {items.map(({ to, label: itemLabel, icon: Icon, end }) => (
        <NavLink
          key={to}
          to={to}
          end={end}
          title={collapsed ? itemLabel : undefined}
          onClick={() => onNavigate?.()}
          className={({ isActive }) => linkClass(isActive)}
        >
          <Icon className="h-4 w-4 shrink-0" aria-hidden />
          {!collapsed ? <span>{itemLabel}</span> : null}
        </NavLink>
      ))}
    </div>
  )

  return (
    <div className="flex h-full flex-col">
      <div
        className={cn(
          'flex h-14 items-center border-b border-sidebar-border px-3',
          collapsed ? 'justify-center' : 'gap-2',
        )}
      >
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sidebar-accent font-display text-sm font-bold text-sidebar-foreground">
          TQ
        </div>
        {!collapsed ? (
          <div className="min-w-0">
            <p className="truncate font-display text-sm font-bold tracking-tight">
              TradeIQ
            </p>
            <p className="truncate text-xs text-sidebar-foreground/60">
              Field intelligence
            </p>
          </div>
        ) : null}
      </div>
      <ScrollArea className="flex-1 px-2 py-4">
        <nav className="space-y-6" aria-label="Main">
          {renderGroup('Operations', mainNav, !collapsed)}
          <Separator className="bg-sidebar-border" />
          {renderGroup('Account', accountNav, !collapsed)}
          <Separator className="bg-sidebar-border" />
          {renderGroup('Platform admin', adminNav, !collapsed)}
        </nav>
      </ScrollArea>
      <div className="border-t border-sidebar-border p-3">
        <p
          className={cn(
            'text-[11px] text-sidebar-foreground/50',
            collapsed && 'sr-only',
          )}
        >
          Route: {location.pathname}
        </p>
      </div>
    </div>
  )
}

export function DashboardLayout() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const [collapsed, setCollapsed] = useState(() => {
    if (typeof window === 'undefined') return false
    return window.localStorage.getItem(STORAGE_KEY) === '1'
  })

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, collapsed ? '1' : '0')
  }, [collapsed])

  return (
    <div className="flex min-h-screen bg-background">
      <aside
        className={cn(
          'sticky top-0 hidden h-screen shrink-0 border-r border-sidebar-border bg-sidebar text-sidebar-foreground md:flex md:flex-col transition-[width] duration-200',
          collapsed ? 'w-[72px]' : 'w-64',
        )}
        aria-label="Application"
      >
        <SidebarNav collapsed={collapsed} />
        <div className="mt-auto border-t border-sidebar-border p-2">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="w-full text-sidebar-foreground hover:bg-white/10"
            onClick={() => setCollapsed((c) => !c)}
            aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            {collapsed ? (
              <PanelLeft className="h-4 w-4" />
            ) : (
              <PanelLeftClose className="h-4 w-4" />
            )}
          </Button>
        </div>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-40 flex h-14 items-center gap-2 border-b border-border bg-card/95 px-4 backdrop-blur supports-[backdrop-filter]:bg-card/80 md:hidden">
          <Sheet open={mobileNavOpen} onOpenChange={setMobileNavOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-72 p-0 bg-sidebar text-sidebar-foreground border-sidebar-border">
              <SheetHeader className="sr-only">
                <SheetTitle>Navigation</SheetTitle>
              </SheetHeader>
              <SidebarNav
                collapsed={false}
                onNavigate={() => setMobileNavOpen(false)}
              />
            </SheetContent>
          </Sheet>
          <span className="font-display text-lg font-bold">TradeIQ</span>
        </header>

        <main className="mx-auto w-full max-w-[1280px] flex-1 px-4 py-6 sm:px-6 lg:px-8">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
