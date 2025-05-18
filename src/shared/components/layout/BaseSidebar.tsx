export type SidebarPosition = 'left' | 'right';

export interface BaseSidebarProps {
  position?: SidebarPosition;
  isOpen?: boolean;
  onClose?: () => void;
  width?: string;
  children: React.ReactNode;
  className?: string;
}

export interface SidebarHeaderProps {
  title: string;
  onClose?: () => void;
  actions?: React.ReactNode;
}

export const BaseSidebar = ({
  position = 'left',
  isOpen = true,
  width = '64',
  children,
  className = ''
}: BaseSidebarProps) => {
  return (
    <div
      className={`
        w-${width} 
        p-4
        bg-sidebar-bg 
        text-sidebar-fg 
        overflow-y-auto 
        border-${position === 'left' ? 'r' : 'l'} 
        border-gray-300
        dark:border-[#1e1e1e]
        transition-all
        duration-300
        ${isOpen ? 'translate-x-0' : position === 'left' ? '-translate-x-full' : 'translate-x-full'}
        ${className}
        `}
    >
      {children}
    </div>
  );
};