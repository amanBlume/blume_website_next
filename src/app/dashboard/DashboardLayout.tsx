"use client";

import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Heart, 
  Home, 
  Users, 
  BarChart3, 
  Settings, 
  Bell, 
  Search,
  User,
  LogOut,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { UserButton, useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Mobile sidebar
  const [isDesktopSidebarCollapsed, setIsDesktopSidebarCollapsed] = useState(true); // Desktop sidebar collapse
  const { user, isLoaded, isSignedIn } = useUser();
  const router = useRouter();
  const pathname = usePathname();

  // Handle authentication on client side
  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.push('/auth');
    }
  }, [isLoaded, isSignedIn, router]);

  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: Home },
    { name: 'Marketing', href: '/dashboard/patients', icon: Users },
    // { name: 'Analytics', href: '/dashboard/analytics', icon: BarChart3 },
    { name: 'Settings', href: '/dashboard/settings', icon: Settings },
  ];

  const isActive = (href: string) => pathname === href;

  // Show loading screen while checking authentication
  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            {/* <Heart className="h-8 w-8 text-coral-500 animate-pulse" fill="currentColor" /> */}
            <span className="text-2xl font-bold text-navy-900">Blume Health</span>
          </div>
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-coral-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  // Don't render dashboard if not signed in (will redirect)
  if (!isSignedIn) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Desktop Sidebar */}
      <div 
        className={`hidden lg:fixed lg:inset-y-0 lg:flex lg:flex-col transition-all duration-300 ease-in-out ${
          isDesktopSidebarCollapsed ? 'lg:w-16' : 'lg:w-64'
        }`}
      >
        <div className="flex min-h-0 flex-1 flex-col bg-white shadow-lg">
          {/* Logo */}
          <div className="flex h-16 flex-shrink-0 items-center px-4 border-b border-gray-200">
            <div className="flex items-center space-x-2">
              {/* <Heart className="h-8 w-8 text-coral-500 flex-shrink-0" fill="currentColor" /> */}
              {!isDesktopSidebarCollapsed && (
                <span className="text-xl font-bold text-navy-900 truncate">Blume Health</span>
              )}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
            <nav className="flex-1 space-y-1 px-2">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                      isActive(item.href)
                        ? 'bg-coral-100 text-coral-700 border-2 border-coral-500'
                        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                    } ${isDesktopSidebarCollapsed ? 'justify-center' : ''}`}
                    title={isDesktopSidebarCollapsed ? item.name : undefined}
                  >
                    <Icon
                      className={`h-5 w-5 flex-shrink-0 ${
                        isActive(item.href) ? 'text-coral-500' : 'text-gray-400 group-hover:text-gray-500'
                      } ${!isDesktopSidebarCollapsed ? 'mr-3' : ''}`}
                    />
                    {!isDesktopSidebarCollapsed && (
                      <span className="truncate">{item.name}</span>
                    )}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Toggle Button */}
          <div className="flex-shrink-0 border-t border-gray-200 p-2">
            <button
              onClick={() => setIsDesktopSidebarCollapsed(!isDesktopSidebarCollapsed)}
              className="w-full flex items-center justify-center p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 rounded-md transition-colors duration-200"
              title={isDesktopSidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
            >
              {isDesktopSidebarCollapsed ? (
                <ChevronRight className="h-5 w-5" />
              ) : (
                <ChevronLeft className="h-5 w-5" />
              )}
            </button>
          </div>

          {/* User info at bottom */}
          <div className="flex-shrink-0 border-t border-gray-200 p-4">
            <div className={`flex items-center ${isDesktopSidebarCollapsed ? 'justify-center' : 'space-x-3'}`}>
              <UserButton 
                appearance={{
                  elements: {
                    avatarBox: "w-8 h-8"
                  }
                }}
              />
              {!isDesktopSidebarCollapsed && (
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {user?.fullName || user?.emailAddresses[0]?.emailAddress}
                  </p>
                  <p className="text-xs text-gray-500 truncate">
                    Healthcare Provider
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile sidebar */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setIsSidebarOpen(false)} />
          <div className="fixed inset-y-0 left-0 flex w-full max-w-xs flex-col bg-white shadow-xl">
            {/* Mobile sidebar content */}
            <div className="flex h-16 flex-shrink-0 items-center justify-between px-4 border-b border-gray-200">
              <div className="flex items-center space-x-2">
                {/* <Heart className="h-8 w-8 text-coral-500" fill="currentColor" /> */}
                <span className="text-xl font-bold text-coral-500">Blume Health</span>
              </div>
              <button
                onClick={() => setIsSidebarOpen(false)}
                className="p-2 text-gray-400 hover:text-gray-500"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
              <nav className="flex-1 space-y-1 px-2">
                {navigation.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsSidebarOpen(false)}
                      className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                        isActive(item.href)
                          ? 'bg-coral-100 text-coral-700 border-r-2 border-coral-500'
                          : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                      }`}
                    >
                      <Icon
                        className={`mr-3 h-5 w-5 flex-shrink-0 ${
                          isActive(item.href) ? 'text-coral-500' : 'text-gray-400 group-hover:text-gray-500'
                        }`}
                      />
                      {item.name}
                    </Link>
                  );
                })}
              </nav>
            </div>

            <div className="flex-shrink-0 border-t border-gray-200 p-4">
              <div className="flex items-center space-x-3">
                <UserButton 
                  appearance={{
                    elements: {
                      avatarBox: "w-8 h-8"
                    }
                  }}
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {user?.fullName || user?.emailAddresses[0]?.emailAddress}
                  </p>
                  <p className="text-xs text-gray-500 truncate">
                    Healthcare Provider
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main content */}
      <div 
        className={`transition-all duration-300 ease-in-out ${
          isDesktopSidebarCollapsed ? 'lg:pl-16' : 'lg:pl-64'
        }`}
      >
        {/* Top bar */}
        <div className="sticky top-0 z-10 bg-white shadow-sm border-b border-gray-200">
          <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
            {/* Mobile menu button */}
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="p-2 text-gray-400 hover:text-gray-500 lg:hidden"
            >
              <Menu className="h-6 w-6" />
            </button>

            {/* Search bar */}
            {/* <div className="flex-1 max-w-lg mx-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search patients, appointments..."
                  className="w-full pl-10 pr-4 py-2 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-coral-500 focus:border-transparent"
                />
              </div>
            </div> */}

            {/* Right side icons */}
            <div className="flex justify-end space-x-4">
              <button className="p-2 text-gray-400 hover:text-gray-500 relative">
                <Bell className="h-6 w-6" />
                {/* Notification badge */}
                <span className="absolute -top-1 -right-1 h-4 w-4 bg-coral-500 text-white text-xs rounded-full flex items-center justify-center">
                  3
                </span>
              </button>
              <div className="lg:hidden">
                <UserButton />
              </div>
            </div>
          </div>
        </div>

        {/* Page content */}
        <main className="h-[calc(100vh-4rem)] flex flex-col"> 
  {/* Subtract top bar height (4rem = h-16) */}

  {/* Top Half */}
  <div className="flex-1 border-b border-gray-200 flex items-center justify-center">
    <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full">
      {children} {/* your screenshot UI or onboarding content */}
    </div>
  </div>

  {/* Bottom Half (empty for now) */}
  <div className="flex-1"></div>
</main>

      </div>
    </div>
  );
};

export default DashboardLayout;