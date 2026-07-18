import { createContext, useContext, useEffect, useState } from "react";

const SidebarContext = createContext(null);

export function SidebarProvider({ children }) {
    const [collapsed, setCollapsed] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    // Reflect state onto <body> so layout CSS (sidebar width, content margin)
    // can respond globally without threading props through every page.
    useEffect(() => {
        document.body.classList.toggle("sidebar-collapsed", collapsed);
    }, [collapsed]);

    useEffect(() => {
        document.body.classList.toggle("sidebar-mobile-open", mobileOpen);
    }, [mobileOpen]);

    const value = {
        collapsed,
        toggleCollapsed: () => setCollapsed((v) => !v),
        mobileOpen,
        openMobile: () => setMobileOpen(true),
        closeMobile: () => setMobileOpen(false),
        toggleMobile: () => setMobileOpen((v) => !v),
    };

    return (
        <SidebarContext.Provider value={value}>
            {children}
        </SidebarContext.Provider>
    );
}

export function useSidebar() {
    const ctx = useContext(SidebarContext);
    if (!ctx) {
        throw new Error("useSidebar must be used within a SidebarProvider");
    }
    return ctx;
}
