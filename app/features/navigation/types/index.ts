export interface Tab {
    name: string;
    path: string;
}

export interface NavigationState {
    tabs: Tab[];
    activeTab: string | null;
}

export interface FileItem {
    name: string;
    type: 'folder' | 'file';
    path: string;
    extension?: string;
    children?: FileItem[];
}